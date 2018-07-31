'use strict';
const Members = require( '../models/Members' );
console.log("loading the Members Controller")

exports.renderMembers = ( req, res ) => {
  res.render( 'members');
};
exports.renderAllMembers = ( req, res ) => {
  res.render( 'allMembers');
};

// this displays all of the members
exports.getAllMembers = ( req, res ) => {
  console.log('in getAllMembers')
  Members.find( {} )
    .exec()
    .then( ( members ) => {
      res.render( 'allMembers', {
        members: members
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'AllMembers promise complete' );
    } );
};

// this displays all of the members
exports.getAllMembersAdmin = ( req, res ) => {
  console.log('in getAllMembers')
  Members.find( {} )
    .exec()
    .then( ( members ) => {
      res.render( 'adminMembers', {
        members: members
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'AllMembers promise complete' );
    } );
};



 exports.attachMembers = ( req, res, next ) => {
  console.log('in attachMembers')
  Members.find( {} )
    .exec()
    .then( ( members ) => {
      res.locals.members = members
      next()
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      console.log( 'members promise complete' );
    } );
 };



exports.saveMember = ( req, res ) => {
  console.log("in saveMembers!")
  console.dir(req)
  let newMember = new Members( {
    name: req.body.name,
    email: req.body.email,
    club: req.body.club,
    position: req.body.position,
    year: req.body.year
  } )
  console.log("after the let newMember")
  console.log("newMember = "+ newMember)

  newMember.save()
    .then( () => {
      console.log("redirecting to members")
      res.redirect( '/members' );
    } )
    .catch( error => {
      res.send( error );
    } );
};





exports.deleteMember = (req, res) => {
  console.log("in deleteMember")
  let memberName = req.body.deleteMember
  if (typeof(memberName)=='string') {
      Members.deleteOne({_id:memberName})
           .exec()
           .then(()=>{res.redirect('/adminMembers')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(memberName)=='object'){
      Members.deleteMany({_id:{$in:memberName}})
           .exec()
           .then(()=>{res.redirect('/adminMembers')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(memberName)=='undefined'){
      console.log("This is if they didn't select a post")
      res.redirect('/adminMembers')
  } else {
    console.log("This shouldn't happen!")
    res.send(`unknown memberName: ${memberName}`)
   }
};
