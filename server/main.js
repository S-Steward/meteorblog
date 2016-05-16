import { Meteor } from 'meteor/meteor';
Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
'submitPost':function(title,body){
console.log(title);
console.log(body);

}
})
