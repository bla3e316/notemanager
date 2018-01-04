import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Notes = new Mongo.Collection('notes');

Meteor.methods({
  'notes.insert'(text){
    check(text, String);

    //check if user is Logged in
    if(!Meteor.userId()){
      throw new Meteor.Error('please authorize');
    }

    //insert note into collection
    Notes.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'notes.remove'(note){
    check(note._id, String);

    if(note.owner !== Meteor.userId()){
      throw new Meteor.Error('not-authorized');
    }

    Notes.remove(note._id);
  }
});
