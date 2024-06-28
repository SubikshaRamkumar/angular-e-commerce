exports.getProducts = (res, req, next) => {
  res.json({
    success: true,
    message: "get products works",
  });
};
exports.getSingleProduct = (res, req, next) => {
  res.json({
    success: true,
    message: "get single product works",
  });
};
