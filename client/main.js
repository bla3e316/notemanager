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
