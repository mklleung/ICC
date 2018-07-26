const
  logInController = require('./controllers/logInController')
  allPostsController = require('./controllers/allPostsController')
  postsController = require('./controllers/postsController')


  createError = require('http-errors');
  express = require('express');
  path = require('path');
  cookieParser = require('cookie-parser');
  logger = require('morgan');
  session = require("express-session"),
  bodyParser = require("body-parser"),
  flash = require('connect-flash')

  indexRouter = require('./routes/index');
  aboutRouter = require('./routes/about');
  aboutICCRouter = require('./routes/aboutICC');
  clubsRouter = require('./routes/clubs');
  eBoardsRouter = require('./routes/eBoards');




  var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

   // here we set up authentication with passport
   const passport = require('passport')
   const configPassport = require('./config/passport')
   configPassport(passport)


var app = express();

// here is where we connect to the database!
const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/icc' );
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected!")
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middleware to process the req object and make it more useful!
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'zzbbyanana' }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
  res.locals.loggedIn = false
  if (req.isAuthenticated()){
    console.log("user has been Authenticated")
    res.locals.user = req.user
    res.locals.loggedIn = true
    if (req.user) {
      if (req.user.googleemail=='mkleung@brandeis.edu') {
        console.log("admin has logged in")
        res.locals.status='admin'
      } else if(req.user.googleemail=='michaelleung360@gmail.com'){
        console.log("jsa has logged in")
        res.locals.status='jsa'
      } else {
        console.log('user has logged in')
        res.locals.status = 'user'
      }
    }
  }
  next()
})

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/aboutICC', aboutICCRouter);
app.use('/clubs', clubsRouter);
app.use('/eBoards', eBoardsRouter);
app.get('/allPosts', allPostsController.getAllPosts );
app.get('/admin',
        allPostsController.getAllPostsAdmin);


app.get('/clubs/jsa',
        postsController.attachJSAPosts,
        postsController.renderJSAMain)
app.get('/clubs/tsa',
        postsController.attachTSAPosts,
        postsController.renderTSAMain)
app.get('/clubs/bksa',
        postsController.attachBKSAPosts,
        postsController.renderBKSAMain)
app.get('/clubs/seac',
        postsController.attachSEACPosts,
        postsController.renderSEACMain)
app.get('/clubs/baasa',
        postsController.attachBAASAPosts,
        postsController.renderBAASAMain)
app.get('/clubs/c2b',
        postsController.attachC2BPosts,
        postsController.renderC2BMain)
app.get('/clubs/ccc',
        postsController.attachCCCPosts,
        postsController.renderCCCMain)
app.get('/clubs/vsa',
        postsController.attachVSAPosts,
        postsController.renderVSAMain)
app.get('/clubs/sasa',
        postsController.attachSASAPosts,
        postsController.renderSASAMain)
app.get('/clubs/sacnas',
        postsController.attachSACNASPosts,
        postsController.renderSACNASMain)
app.get('/clubs/trisk',
        postsController.attachTRISKPosts,
        postsController.renderTRISKMain)
app.get('/clubs/woca',
        postsController.attachWOCAPosts,
        postsController.renderWOCAMain)


app.get('/addPosts', function(req, res) {
      console.log(`req.user = ${req.user}`)
        res.render('addPosts', {
            user : req.user // get the user out of session and pass to template
        });
    });
//app.get('/addPosts',isLoggedIn,postsController.getAllPosts );
app.post('/savePosts',postsController.savePosts );
app.post('/deletePost',postsController.deletePost );
app.use('/addPosts', function(req, res, next) {
  console.log("in / controller")
  res.render('addPosts', { title: 'ICC' });
});


app.get('/loginerror', function(req,res){
  res.render('loginerror',{})
})

app.get('/logins', function(req,res){
  res.render('logins',{})
})


// route for logging out
app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/',
                    failureRedirect : '/loginerror'
            }));

    app.get('/login/authorized',
            passport.authenticate('google', {
                    successRedirect : '/',
                    failureRedirect : '/loginerror'
            }));

function isLoggedIn(req, res, next) {
    console.log("checking to see if they are authenticated!")
    // if user is authenticated in the session, carry on
    res.locals.loggedIn = false
    if (req.isAuthenticated()){
      console.log("user has been Authenticated")
      return next();
    } else {
      console.log("user has not been authenticated...")
      res.redirect('/login');
    }
}

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
