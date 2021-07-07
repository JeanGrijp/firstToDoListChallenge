module.exports = (error, req, res, next) => {
  res.locals.message = error.message;
  res.locals.status = res.locals.status || 400;
  
  return next();
};
