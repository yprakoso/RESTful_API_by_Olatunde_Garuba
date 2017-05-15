var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, function () {
  console.log('todo list RESTful API server started on: ' + port);
});