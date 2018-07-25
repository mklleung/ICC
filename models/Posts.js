'use strict';
const mongoose = require( 'mongoose' );

var postsSchema = mongoose.Schema( {
  post: String,
  name: String,
  email: String,
  club: String,
  position: String,
  year: String,
  postTime: String
} );

module.exports = mongoose.model( 'allPosts', postsSchema );
