const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  var a = Number(req.body.num1);
  var b = Number(req.body.num2);
  var result = a + b;
  res.send('The addition of given two number is:' + result);
});
app.get('/bmicalculator', function (req, res) {
  res.sendFile(__dirname + '/bmicalculator.html');
});
app.post('/bmicalculator', function (req, res) {
  var m = Number(req.body.ht);
  var n = Number(req.body.wt);
  var ans = n / (m * m);
  res.send('The BMI for the given values is:' + ans);
});
app.listen(3001, function () {
  console.log('Server start on port 3001');
});
