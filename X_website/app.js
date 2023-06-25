var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// 解析application/json
app.use(bodyParser.json());
// 解析application/x-www-form-urlencoded，從網頁表單送來的資料
app.use(bodyParser.urlencoded({extended: true}));

// EJS
app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', require('./routes/index.js'));

app.listen(9999, function() {
  console.log('app listening on port 9999!');
});