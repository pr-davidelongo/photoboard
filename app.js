const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const dashboardRouter = require('./routes/dashboard');
const clientsRouter = require('./routes/clients');
const galleryRouter = require('./routes/gallery');
const albumRouter = require('./routes/album');
// const walletRouter = require('./routes/wallet'); 

const app = express();

// configurazione della sessione di login
app.use(session({
  secret : 'lkJHS345!jdfh6ub£+èefih',
  resave : true,
  saveUninitialized : true
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload({createParentPath: true, useTempFiles : true, tempFileDir : './uploads/tmp/'}));// Abilitazione upload file. (specificare il nome della cartella temporanea da usare)


app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/dashboard', dashboardRouter);
app.use('/clients', clientsRouter);
app.use('/gallery', galleryRouter);
app.use('/album', albumRouter);

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
