import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.blog.events({
  // counter starts at 0
  'submit #blogForm'function(e){
  e.preventDefault();
  var title= $('#blogTitle').val();
  var body=$('#blogSubject').val();
  Meteor.call('submitPost',title,body);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
