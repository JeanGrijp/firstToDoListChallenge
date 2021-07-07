module.exports = (req, res) => {
  return res.status(res.locals.status || 200).json(res.locals.message);
};
