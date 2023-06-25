var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// 解析application/json
app.use(bodyParser.json());
// 解析application/x-www-form-urlencoded，從網頁表單送來的資料
app.use(bodyParser.urlencoded({extended: true}));

// const addSecurityHeaders = function(req, res, next) {
//   res.header('Content-Security-Policy', 'frame-ancestors self');
//   // res.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
//   // res.header('X-Content-Type-Options', 'nosniff');
//   // res.header('X-Frame-Options', 'ALLOW FROM http://127.0.0.1:9999');
//   next();     
// }

// // 所有的請求都會經過這個 middleware
// app.use(addSecurityHeaders)

// EJS
app.set('view engine', 'ejs');
// app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', require('./routes/index.js'));

const PORT = 3001;
app.listen(PORT, function() {
  console.log(`app listening on port ${PORT}!`);
});