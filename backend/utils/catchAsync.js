const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.log("err-------------", err);
    next(err);
    return {
      success: false,
      message: "Something unexpected happened!",
    };
  });
};

module.exports = catchAsync;
