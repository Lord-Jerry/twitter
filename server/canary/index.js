const app = require('express')();
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
// const errorHandler = require('./middleware/errorhandler');
// const routes = require('./routes/index');

// set web server port according to environment
const port = process.env.PORT || 3000;

// load configuration file

dotenv.config();

// parse incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use cross origin module
app.use(cors('*'));

// set api routes
// app.use(routes);

// set error handler

// app.use(errorHandler);

// 404 error

app.get('/test', (_req, res) => {
  res.send('this is a test!!!!!!');
});

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