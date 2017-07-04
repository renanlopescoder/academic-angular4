var express = require('express');
var app = express();

app.use(express.static('./dist'));
app.set('secret', 'opensecrets');

module.exports = app;

