'use strict';
const AddPosts = require( '../models/Posts' );
console.log("loading the addPosts Controller")


// this displays all of the skills
exports.getAllPosts = ( req, res ) => {
  console.log('in getallPosts')
  AddPosts.find( {} )
    .exec()
    .then( ( addPosts ) => {
      console.log("in here")
      console.log(addPosts)
      res.render( 'allPosts', {
        addPosts : addPosts
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'addPosts promise complete' );
    } );
};

exports.getAllPostsAdmin = ( req, res ) => {
  console.log('in getallPosts')
  AddPosts.find( {} )
    .exec()
    .then( ( addPosts ) => {
      console.log("in here")
      console.log(addPosts)
      res.render( 'admin', {
        addPosts : addPosts
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'addPosts promise complete' );
    } );
};
