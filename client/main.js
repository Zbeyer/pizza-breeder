import { loadSamplePizzaria } from "./game/game";

Template.app.onCreated(function ()
{
	loadSamplePizzaria();
	console.log('app created...');
});

Template.app.rendered = function ()
{
	console.log('rendered');
};

Template.app.helpers({
	pizzeria: function()
	{
		let pizzeria = Session.get('activePizzeria');
		return pizzeria;
	},
	samplePizza: function()
	{
		let pizzeria = Session.get('activePizzeria');
		return pizzeria.boxes[0].pizza;
	}
});