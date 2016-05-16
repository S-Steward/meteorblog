import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.blog.events({
  // counter starts at 0
  'submit #blogForm':function(e){
  e.preventDefault();
  var title=$('#blogTitle').val();
  var body=$('#blogSubject').val();
  Meteor.call('submitPost',title,body);
});

Template.listBlogs.blogs = function(){
return Blogs.find();
}