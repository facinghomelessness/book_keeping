var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/login', function(req, res) {
  res.send('login page');
});
app.post('/login', function(req, res) {
  var target = req.query.target || '/';
  res.send('logged in, redirecting to ' + target);
});

// People
app.get('/people', function(req, res) {
  res.send('list of people');
});
app.post('/people', function(req, res) {
  res.send('posted a person');
});
app.get('/people/:id', function(req, res) {
  res.send('get a person {id=' + req.params.id + '}');
});

// Assets
app.use('assets', express.static(__dirname + '/public'));

var server = app.listen(3000, function () {
  console.log('Example app listening on port %s', 3000);
});
