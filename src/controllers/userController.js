const User = require('../models/UserSchema');

module.exports = {
  list: async (req, res, next) => {
    try {
      const users = await User.find();
      res.locals.message = users;

      return next();
    } catch (error) {
      return next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const { _doc: user } = await User.create(req.body);
      
      delete user.password

      res.locals.message = user;

      return next();
    } catch (error) {
      return next(error);
    }
  },
  detail: async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        res.locals.status = 404;
        return next({ message: 'User not found' });
      }

      res.locals.message = user;

      return next();
    } catch (error) {
      return next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.locals.message = 'Deleted successfully';

      return next();
    } catch (error) {
      return next(error);
    }
  },
};
