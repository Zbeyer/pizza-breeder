import { Meteor } from "meteor/meteor";
import { Session } from 'meteor/session'; // https://docs.meteor.com/api/session.html

/**
 * Is Debug determined by server
 * If we are actively fetching debug we set the session to askingServer as an atomic lock
 * If the session is set explicitly to true, then our helper returns true
 * If the session isset to anything else we set the session to false.
 * @return {boolean}
 */
isDebug = function()
{
	ensureIsDebugSet();
	return Session.get('isDebug') === true;
};

let ensureIsDebugSet = function()
{
	if (Session.get('isDebug') === undefined)
	{
		Session.set('isDebug', 'askingServer...');
		Meteor.call('isDebug', function(error, response)
		{
			Session.set('isDebug', response || error);
		});
	}
};

Template.isDebug.helpers({
	isDebug: function()
	{
		return isDebug(); // Return helper above
	}
});