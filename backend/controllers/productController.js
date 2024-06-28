exports.getProducts = (req, res, next) => {
  res.json({
    success: true,
    message: "get products works",
  });
};
exports.getSingleProduct = (req, res, next) => {
  res.json({
    success: true,
    message: "get single product works",
  });
};
