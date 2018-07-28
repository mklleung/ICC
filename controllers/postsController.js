'use strict';
const AddPost = require( '../models/Posts' );
console.log("loading the addPost Controller")

exports.renderAdmin = ( req, res ) => {
  res.render( 'admin');
};

exports.renderJSAMain = ( req, res ) => {
  res.render( 'jsa');
};
exports.renderTSAMain = ( req, res ) => {
  res.render( 'tsa');
};
exports.renderBKSAMain = ( req, res ) => {
  res.render( 'bksa');
};
exports.renderSEACMain = ( req, res ) => {
  res.render( 'seac');
};
exports.renderBAASAMain = ( req, res ) => {
  res.render( 'baasa');
};
exports.renderC2BMain = ( req, res ) => {
  res.render( 'c2b');
};
exports.renderSACNASMain = ( req, res ) => {
  res.render( 'sacnas');
};
exports.renderSASAMain = ( req, res ) => {
  res.render( 'sasa');
};
exports.renderVSAMain = ( req, res ) => {
  res.render( 'vsa');
};
exports.renderTRISKMain = ( req, res ) => {
  res.render( 'trisk');
};
exports.renderWOCAMain = ( req, res ) => {
  res.render( 'woca');
};
exports.renderCCCMain = ( req, res ) => {
  res.render( 'ccc');
};
exports.renderBASOMain = ( req, res ) => {
  res.render( 'baso');
};
exports.renderBBSOMain = ( req, res ) => {
  res.render( 'bbso');
};
exports.renderBIEIMain = ( req, res ) => {
  res.render( 'biei');
};
exports.renderBC3Main = ( req, res ) => {
  res.render( 'bc3');
};
exports.renderBLSOMain = ( req, res ) => {
  res.render( 'blso');
};







exports.getAllPosts = ( req, res ) => {
  console.log('in getAllPosts')
  AddPost.find( {} )
    .exec()
    .then( ( addPosts ) => {
      res.render( 'addPosts', {
        addPosts: addPosts
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'addPost promise complete' );
    } );
};








exports.attachJSAPosts = ( req, res, next ) => {
  console.log('in attachJSAPosts')
  AddPost.find( {club:"JSA"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachTSAPosts = ( req, res, next ) => {
  console.log('in attachTSAPosts')
  AddPost.find( {club:"TSA"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachBKSAPosts = ( req, res, next ) => {
  console.log('in attachBKSAPosts')
  AddPost.find( {club:"BKSA"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachSEACPosts = ( req, res, next ) => {
  console.log('in attachSEACPosts')
  AddPost.find( {club:"SEAC"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachBAASAPosts = ( req, res, next ) => {
  console.log('in attachBAASAPosts')
  AddPost.find( {club:"BAASA"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachC2BPosts = ( req, res, next ) => {
  console.log('in attachC2BPosts')
  AddPost.find( {club:"C2B"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachCCCPosts = ( req, res, next ) => {
  console.log('in attachCCCPosts')
  AddPost.find( {club:"CCC"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachSACNASPosts = ( req, res, next ) => {
  console.log('in attachSACNASPosts')
  AddPost.find( {club:"SACNAS"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachWOCAPosts = ( req, res, next ) => {
  console.log('in attachWOCAPosts')
  AddPost.find( {club:"WOCA"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachVSAPosts = ( req, res, next ) => {
  console.log('in attachVSAPosts')
  AddPost.find( {club:"VSA"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachSASAPosts = ( req, res, next ) => {
  console.log('in attachSASAPosts')
  AddPost.find( {club:"SASA"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachTRISKPosts = ( req, res, next ) => {
  console.log('in attachTRISKPosts')
  AddPost.find( {club:"TRISK"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachBBSOPosts = ( req, res, next ) => {
  console.log('in attachBBSOPosts')
  AddPost.find( {club:"BBSO"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachBASOPosts = ( req, res, next ) => {
  console.log('in attachBASOPosts')
  AddPost.find( {club:"BASO"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachBC3Posts = ( req, res, next ) => {
  console.log('in attachBC3Posts')
  AddPost.find( {club:"BC3"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachBIEIPosts = ( req, res, next ) => {
  console.log('in attachBIEIPosts')
  AddPost.find( {club:"BIEI"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};
exports.attachBLSOPosts = ( req, res, next ) => {
  console.log('in attachBLSOPosts')
  AddPost.find( {club:"BLSO"} )
    .exec()
    .then( ( addPosts ) => {
      console.log(addPosts)
      res.locals.addPosts = addPosts
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'attachPosts promise complete' );
    } );
};






exports.savePosts = ( req, res ) => {
  console.log("in savePosts!")
  console.dir(req)
  let newPost = new AddPost( {
    title: req.body.title,
    post:req.body.post,
    name: req.body.name,
    email: req.body.email,
    club: req.body.club,
    position: req.body.position,
    year: req.body.year,
    postTime: req.body.postTime
  } )

  console.log("savePosts = "+ newPost)

  newPost.save()
    .then( () => {
      res.redirect( '/addPosts' );
    } )
    .catch( error => {
      res.send( error );
    } );
};


exports.deletePost = (req, res) => {
  console.log("in deleteWorkout")
  let postName = req.body.deletePost
  if (typeof(postName)=='string') {
      AddPost.deleteOne({_id:postName})
           .exec()
           .then(()=>{res.redirect('/admin')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(postName)=='object'){
      AddPost.deleteMany({_id:{$in:postName}})
           .exec()
           .then(()=>{res.redirect('/admin')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(postName)=='undefined'){
      console.log("This is if they didn't select a post")
      res.redirect('/admin')
  } else {
    console.log("This shouldn't happen!")
    res.send(`unknown postName: ${postName}`)
   }
};
