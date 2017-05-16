var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('./api/models/todoListModel');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(port, function () {
  console.log('todo list RESTful API server started on: ' + port);
});