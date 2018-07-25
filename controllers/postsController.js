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

// this displays all of the skills
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
  console.log('in attachTSAPosts')
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
  console.log('in attachTSAPosts')
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
  console.log('in attachTSAPosts')
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
exports.savePosts = ( req, res ) => {
  console.log("in savePosts!")
  console.dir(req)
  let newPost = new AddPost( {
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
  console.log("in deletePost")
  let addPostName = req.body.deleteName
  if (typeof(addPostName)=='string') {
      console.log("in first if statement")
      AddPost.deleteOne({name:addPostName})
           .exec()
           .then(()=>{res.redirect('/admin')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(addPostName)=='object'){
      console.log("in second if statement")
      AddPost.deleteMany({value:{$in:addPostName}})
           .exec()
           .then(()=>{res.redirect('/admin')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(addPostName)=='undefined'){
      console.log("This is if they didn't select a post")
      res.redirect('/admin')
  } else {
    console.log("This shouldn't happen!")
    res.send(`unknown addPostName: ${addPostName}`)
  }

};
