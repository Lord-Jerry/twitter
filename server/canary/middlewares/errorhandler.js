// eslint-disable-next-line no-unused-vars
const logger = (err, req, res, next) => {
  if (!err.statusCode) {
    /* eslint-disable-next-line no-console */
    console.error(err.stack);
    return res.status(500).json({
      message: 'internal server error',
      statusCode: 500,
    });
  }

  return res.status(err.statusCode).json({
    message: err.message,
    statusCode: err.statusCode,
  });
};
module.exports = logger;
