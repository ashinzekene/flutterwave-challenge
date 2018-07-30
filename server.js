require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes/index');
mongoose.Promise = require('bluebird');
const app = express();
const port = 4331;
// NODE_ENV is set to true by heroku
const isProduction = process.env.NODE_ENV === 'production';

console.log('ENV TEST', process.env.TEST_ENV);
// require('./utils/mongoose');
// require('./utils/auth')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (!isProduction) {
  process.stdout.write('Not in production');
  app.use((req, res, next) => {
    process.stdout.write(`\n${req.method.toUpperCase()}: ${req.url}`);
    next();
  });
  // app.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  //   res.setHeader('Access-Control-Allow-Method', 'GET,POST,DELETE');
  //   res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  //   next();
  // });
}
app.use(express.static(path.join(__dirname, 'dist')));
app.options('*', (req, res) => {
  res.json({ res: 'pre-flight' });
});
app.use('/api', routes);
app.get('*', function (req, res) {
  res.status(404).json({ res: 'Not Found' });
  // res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, err => {
  if (err) {
    return process.stdout.write('An error occurred');
  }
  process.stdout.write(`Server running on port ${port}`);
});

module.exports = app