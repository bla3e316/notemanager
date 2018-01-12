import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';
import { Accounts } from 'meteor/accounts-base';

import './main.html';

$(document).ready(function () {
  $('.parallax').parallax();
});

//accounts config
Accounts.ui.config({
  passwordSignupFields:'USERNAME_ONLY'
});

Template.body.helpers({
  // notes:[
  //   {text:'Note 1'},
  //   {text:'Note 2'},
  //   {text:'Note 3'}
  // ]

  notes(){
    return Notes.find({});
  }
});

Template.add.events({
  'submit .add-form': function(){
    event.preventDefault();

    //get input value
    const target = event.target;
    const text = target.text.value;

    // //insert note into collection
    // Notes.insert({
    //   text,
    //   createdAt: new Date(),
    //   owner: Meteor.userId(),
    //   username: Meteor.user().username,
    // });

    Meteor.call('notes.insert', text);

    //console.log(text);

    //clean form
    target.text.value = '';

    //close Modal
    $('#addModal').modal('close');

    return false;
  }
});

Template.note.events({
  'click  .delete-note': function(){
    //Notes.remove(this._id);
    Meteor.call('notes.remove', this);
    return false;
  }
});
