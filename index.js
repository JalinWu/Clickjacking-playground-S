var express = require('express');
var bodyParser = require('body-parser');

// ========== start A_website ==========

var app = express();

const addSecurityHeaders = function(req, res, next) {
  // http response header 設定於此





  next();     
}

// 所有的請求都會經過這個 middleware
app.use(addSecurityHeaders)

// 解析application/json
app.use(bodyParser.json());
// 解析application/x-www-form-urlencoded，從網頁表單送來的資料
app.use(bodyParser.urlencoded({extended: true}));

// EJS
app.set('view engine', 'ejs');
app.set('views', './A_website/views');
// app.use(express.static(__dirname + '/A_website/public'));

// Routes
app.use('/', require('./A_website/routes/index.js'));

const PORT = 3001;
app.listen(PORT, function() {
  console.log(`A_website listening on port ${PORT}!`);
});

// ========== start X_website ==========

var app2 = express();

// 解析application/json
app2.use(bodyParser.json());
// 解析application/x-www-form-urlencoded，從網頁表單送來的資料
app2.use(bodyParser.urlencoded({extended: true}));

// EJS
app2.set('view engine', 'ejs');
app2.set('views', './X_website/views');

// Routes
app2.use('/', require('./X_website/routes/index.js'));

const PORT2 = 9999;
app2.listen(PORT2, function() {
  console.log(`X_website listening on port ${PORT2}!`);
});