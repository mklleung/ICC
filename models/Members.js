'use strict';
const mongoose = require( 'mongoose' );

var membersSchema = mongoose.Schema( {
  name: String,
  email: String,
  club: String,
  position: String,
  year: String
} );

module.exports = mongoose.model( 'members', membersSchema );
