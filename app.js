const
  logInController = require('./controllers/logInController')
  allPostsController = require('./controllers/allPostsController')
  postsController = require('./controllers/postsController')
  membersController = require('./controllers/membersController')

  Members = require( './models/Members' );


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
mongoose.connect( 'mongodb://user1:testtest1@ds141641.mlab.com:41641/icc-brandeis' );
//mongoose.connect( 'mongodb://localhost/icc' );
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
      if (req.user.googleemail=='michaelleung360@gmail.com') {
        console.log("admin has logged in")
        res.locals.status='ADMIN'
      } else if(req.user.googleemail=='mkleung@brandeis.edu'){
        console.log("jsa has logged in")
        res.locals.status='JSA'
      } else if(req.user.googleemail=='baasa@brandeis.edu'){
        console.log("baasa has logged in")
        res.locals.status='BAASA'
      } else if(req.user.googleemail=='baso@brandeis.edu'){
        console.log("baso has logged in")
        res.locals.status='BASO'
      } else if(req.user.googleemail=='bbso@brandeis.edu'){
        console.log("bbso has logged in")
        res.locals.status='BBSO'
      } else if(req.user.googleemail=='bc3@brandeis.edu'){
        console.log("bc3 has logged in")
        res.locals.status='BC3'
      } else if(req.user.googleemail=='bksa@brandeis.edu'){
        console.log("bksa has logged in")
        res.locals.status='BKSA'
      } else if(req.user.googleemail=='biei@brandeis.edu'){
        console.log("biei has logged in")
        res.locals.status='BIEI'
      } else if(req.user.googleemail=='blso@brandeis.edu'){
        console.log("blso has logged in")
        res.locals.status='blso'
      } else if(req.user.googleemail=='c2b@brandeis.edu'){
        console.log("c2b has logged in")
        res.locals.status='C2B'
      } else if(req.user.googleemail=='ccc@brandeis.edu'){
        console.log("ccc has logged in")
        res.locals.status='CCC'
      } else if(req.user.googleemail=='sacnas@brandeis.edu'){
        console.log("sacnas has logged in")
        res.locals.status='SACNAS'
      } else if(req.user.googleemail=='sasa@brandeis.edu'){
        console.log("sasa has logged in")
        res.locals.status='SASA'
      } else if(req.user.googleemail=='seac@brandeis.edu'){
        console.log("seac has logged in")
        res.locals.status='SEAC'
      } else if(req.user.googleemail=='trisk@brandeis.edu'){
        console.log("trisk has logged in")
        res.locals.status='TRISK'
      } else if(req.user.googleemail=='tsa@brandeis.edu'){
        console.log("tsa has logged in")
        res.locals.status='TSA'
      } else if(req.user.googleemail=='vsa@brandeis.edu'){
        console.log("vsa has logged in")
        res.locals.status='VSA'
      } else if(req.user.googleemail=='woca@brandeis.edu'){
        console.log("woca has logged in")
        res.locals.status='WOCA'
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
app.get('/adminMembers',
        membersController.getAllMembersAdmin);

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
app.get('/clubs/baso',
        postsController.attachBASOPosts,
        postsController.renderBASOMain)
app.get('/clubs/bbso',
        postsController.attachBBSOPosts,
        postsController.renderBBSOMain)
app.get('/clubs/bc3',
        postsController.attachBC3Posts,
        postsController.renderBC3Main)
app.get('/clubs/biei',
        postsController.attachBIEIPosts,
        postsController.renderBIEIMain)
app.get('/clubs/blso',
        postsController.attachBLSOPosts,
        postsController.renderBLSOMain)



app.get('/jsaManage',
        postsController.attachJSAPosts,
        (req, res) => {
        res.render('jsaManage')
      });
app.get('/baasaManage',
        postsController.attachBAASAPosts,
        (req, res) => {
        res.render('baasaManage')
      });
app.get('/basoManage',
        postsController.attachBASOPosts,
        (req, res) => {
        res.render('basoManage')
      });
app.get('/bbsoManage',
        postsController.attachBBSOPosts,
        (req, res) => {
        res.render('bbsoManage')
      });
app.get('/bc3Manage',
        postsController.attachBC3Posts,
        (req, res) => {
        res.render('bc3Manage')
      });
app.get('/bksaManage',
        postsController.attachBKSAPosts,
        (req, res) => {
        res.render('bksaManage')
      });
app.get('/bieiManage',
        postsController.attachBIEIPosts,
        (req, res) => {
        res.render('bieiManage')
      });
app.get('/blsoManage',
        postsController.attachBLSOPosts,
        (req, res) => {
        res.render('blsoManage')
      });
app.get('/c2bManage',
        postsController.attachC2BPosts,
        (req, res) => {
        res.render('c2bManage')
      });
app.get('/cccManage',
        postsController.attachCCCPosts,
        (req, res) => {
        res.render('cccManage')
      });
app.get('/sacnasManage',
        postsController.attachSACNASPosts,
        (req, res) => {
        res.render('sacnasManage')
      });
app.get('/sasaManage',
        postsController.attachSASAPosts,
        (req, res) => {
        res.render('sasaManage')
      });
app.get('/seacManage',
        postsController.attachSEACPosts,
        (req, res) => {
        res.render('seacManage')
      });
app.get('/triskManage',
        postsController.attachTRISKPosts,
        (req, res) => {
        res.render('triskManage')
      });
app.get('/tsaManage',
        postsController.attachTSAPosts,
        (req, res) => {
        res.render('tsaManage')
      });
app.get('/vsaManage',
        postsController.attachVSAPosts,
        (req, res) => {
        res.render('vsaManage')
      });
app.get('/wocaManage',
        postsController.attachWOCAPosts,
        (req, res) => {
        res.render('wocaManage')
      });

app.get('/allPages',
        (req, res) => {
        res.render('allPages')
      });


app.get('/addPosts', function(req, res) {
      console.log(`req.user = ${req.user}`)
        res.render('addPosts', {
            user : req.user
        });
    });
//app.get('/addPosts',isLoggedIn,postsController.getAllPosts );
app.post('/savePosts',postsController.savePosts );
app.post('/deletePost',postsController.deletePost );
app.post('/deleteMember',membersController.deleteMember );
app.use('/addPosts', function(req, res, next) {
  console.log("in / controller")
  res.render('addPosts', { title: 'ICC' });
});
app.get('/members',  membersController.renderMembers)
app.post('/saveMember',membersController.saveMember );
app.get('/allMembers',
    membersController.getAllMembers,
    membersController.renderAllMembers);


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
