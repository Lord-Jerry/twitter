const app = require('express')();
const dotenv = require('dotenv');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const errorHandler = require('./middlewares/errorhandler');
const { checkLoggedIn } = require('./middlewares/Auth');


if (process.env.NODE_ENV !== 'production') {
  const env = process.env.NODE_ENV || 'development';
  dotenv.config({ path: `./.env.${env}`});
} else {
  dotenv.config();
}

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// set web server port according to environment
const port = process.env.PORT || 8080;

// use cross origin module
app.use(cors('*'));

// set api routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);

app.use(checkLoggedIn, createProxyMiddleware('/api/v1/tweet', { 
  target: 'http://canary:3030',
  changeOrigin: false 
}));

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
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`server started at port ${port}`);
  });
}
module.exports = app;
