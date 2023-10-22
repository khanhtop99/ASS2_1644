var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pewpewtoyRouter = require('./routes/pewpewtoy');
var loginRouter = require('./routes/login');
var bmwRouter = require('./routes/bmw');
var merRouter = require('./routes/mer');
var mgRouter = require('./routes/mg');

var mongoose = require("mongoose");
var uri = "mongodb+srv://khanhnngch210946:khanh1234@cluster0.5lwimzj.mongodb.net/pewpewtoy";
mongoose.connect(uri)
.then(() => console.log ("Connect to DB succeed !"))
.catch((err) => console.log (err));

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : false}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pewpewtoy', pewpewtoyRouter);
app.use('/login', loginRouter);
app.use('/bmw', bmwRouter);
app.use('/mer', merRouter);
app.use('/mg', mgRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT || 3001)
module.exports = app;
