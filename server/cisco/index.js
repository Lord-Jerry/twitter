const app = require('express')();
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');
const errorHandler = require('./middlewares/errorhandler');
const routes = require('./routes/index');
const { checkLoggedIn } = require('./middlewares/Auth');

// set web server port according to environment
const port = process.env.PORT || 8080;

// load configuration file
dotenv.config();

// parse incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use cross origin module
app.use(cors('*'));

app.use(checkLoggedIn, createProxyMiddleware('/api/v1/tweet', { target: 'http://canary:3000', changeOrigin: true }));
// set api routes
app.use('/api/v1/auth', routes);

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
