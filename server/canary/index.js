const app = require('express')();
const cors = require('cors');
const errorHandler = require('./middlewares/errorhandler');
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  const env = process.env.NODE_ENV || 'development';
  dotenv.config({ path: `./.env.${env}`});
} else {
  dotenv.config();
}

const routes = require('./route/index');

// set web server port according to environment
const port = process.env.PORT || 3030;

// use cross origin module
app.use(cors('*'));

// set api routes
app.use('/api/v1/tweet',routes);

// set error handler

app.use(errorHandler);

// 404 error


app.use((_req, res) => {
  res.status(404).json({
    statusCode: 404,
    message: 'api endpoint not found',
  });
});

// set web server port
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`server started at port ${port}`);
});
module.exports = app;
