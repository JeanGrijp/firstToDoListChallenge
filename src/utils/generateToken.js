const jwt = require('jsonwebtoken');

const DAY_IN_SECONDS = 24 * 60 * 60;

module.exports = (param) => jwt.sign(param, process.env.SECRET, {
  expiresIn: DAY_IN_SECONDS,
});
