import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';

import './main.html';

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

    //insert note into collection
    Notes.insert({
      text,
      createdAt: new Date()
    });

    //clean form
    target.text.value = '';

    //close Modal
    $('#addModal').modal('close');

    return false;
  }
});
