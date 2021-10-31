samplePizza = {
	name: 'sample pizza'
}

pizzeria = {
	name: 'Sample Pizzeria',
	boxes: [
		{
			name: 'Sample Box',
			pizza: new PizzaFactory(samplePizza)
		}
	],
	displays: [],
	ovens:[],
}

/**
 * Pizza Factory: Define a pizza from a property object
 */

Template.pizza.helpers({
	data: function()
	{
		return Template.instance().data;
	}
});

Template.pizza.events({

});
