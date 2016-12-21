/** 
 * Module dependencies
 */

var express = require('express');
var converter = require('./converter');

const app = express()
const port = 3000

app.get('/toCelsius', function (req, res) {
  var temperature = req.query.temperature;
  res.send(200, converter.toCelsius(temperature));
})

app.get('/toFahrenheit', function (req, res) {
  var temperature = req.query.temperature;
  res.send(200, converter.toFahrenheit(temperature));
})

app.listen(3000, () => console.log(`Listening on port ${port}`))
