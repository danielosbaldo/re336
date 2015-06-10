var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.user(morgan('dev'));
app.use(gzippo.staticGzip(""+_dirname + "/dist"));
app.listen(process.env.PORT || 5000);
