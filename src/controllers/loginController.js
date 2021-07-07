const bcrypt = require('bcryptjs');

const User = require('../models/UserSchema');
const generateToken = require('../utils/generateToken');

module.exports = {
  create: async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        res.locals.status = 401;
        return next({ message: 'User not found' });
      }

      const doPasswordsMatch = await bcrypt.compare(password, user.password)

      if (!doPasswordsMatch) {
        res.locals.status = 401;
        return next({ message: 'Wrong password' });
      }

      delete user.password;

      res.locals.message = {
        user,
        token: generateToken({ id: user._id }),
      };

      return next();
    } catch (error) {
      return next(error);
    }
  },
};
