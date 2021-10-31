import { Meteor } from 'meteor/meteor';
const isDebug = Meteor.settings.debug || false;

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
	'isDebug': function()
	{
		// return 'foo';
		return !!(isDebug);
	}
});