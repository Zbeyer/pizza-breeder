
import PizzaFactory from "./factories/PizzaFactory";

samplePizzas = [
	{
		name: 'Cheese <Sample Pizza>',
		toppings: [
			new ToppingFactory({name: 'Mozzarella', type: 'cheese', strength: 1.0}),
		],
	},
	{
		name: 'Pepperoni <Sample Pizza>',
		toppings: [
			new ToppingFactory({name: 'Pepperoni', type: 'meat', strength: 1.0, oiliness: 2.0}),
		],
	},
	{
		name: 'Sausage <Sample Pizza>',
		toppings: [
			new ToppingFactory({name: 'Sausage', type: 'meat', strength: 1.0, oiliness: 3.0}),
		],
	},
]

pizzeria = {
	name: 'Sample Pizzeria',
	boxes: [
		{
			name: 'Sample Box A',
			pizza: new PizzaFactory(samplePizzas[0])
		},
		{
			name: 'Sample Box B',
			pizza: new PizzaFactory(samplePizzas[1])
		},
		{
			name: 'Sample Box B',
			pizza: new PizzaFactory(samplePizzas[2])
		},
		{
			name: 'Sample Empty Box'
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
