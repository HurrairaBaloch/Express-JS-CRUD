const middle = (req, res, next) => {
  res.send("ok");
  next();
};

export default middle;
