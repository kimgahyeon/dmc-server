var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// routers
var indexRouter = require('./routes/index');
var projectRouter = require('./routes/project');
var contactRouter = require('./routes/contact');
var teamRouter = require('./routes/team');
var paperRouter = require('./routes/papers');
var blockchainRouter = require('./routes/blockchain');

var adminRouter = require('./routes/admin');
var blueprintRouter = require('./routes/blueprint');
var teamateRouter = require('./routes/teamate');
var healthRouter = require('./routes/health');
var networkRouter = require('./routes/network');
var etherappRouter = require('./routes/etherapp');
var energyRouter = require('./routes/energy');
var educationRouter = require('./routes/education');

var oldRouter = require('./routes/old');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/project', projectRouter);
app.use('/contact', contactRouter);
app.use('/team', teamRouter)
app.use('/papers', paperRouter);
app.use('/blueprint', blueprintRouter);
app.use('/teamate', teamateRouter);
app.use('/blockchain', blockchainRouter);
app.use('/health', healthRouter);
app.use('/network', networkRouter);
app.use('/etherapp', etherappRouter);
app.use('/energy', energyRouter);
app.use('/education', educationRouter);
app.use('/old', oldRouter);

app.use('/admin', adminRouter);

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

module.exports = app;
