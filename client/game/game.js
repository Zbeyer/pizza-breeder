import PizzaFactory from "./factories/PizzaFactory";
import BoxFactory from "./factories/BoxFactory";
import PizzeriaFactory from "./factories/zPizzeriaFactory";

let loadSamplePizzaria = function()
{
	let samplePizzas = [
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
	];

	let samplePizzeria = new PizzeriaFactory();
	for (var i = 0; i < samplePizzas.length; i++)
	{
		let samplePizza = new PizzaFactory(samplePizzas[i]);
		let sampleBox = new BoxFactory({name: `Sample Box ${i}`});
		sampleBox.pizza = samplePizza;
		samplePizzeria.boxes.push(sampleBox);
	}
	// Give them an empty
	samplePizzeria.boxes.push(new BoxFactory());

	Session.set('activePizzeria', samplePizzeria);
	console.log('loaded sample pizzeria: %o', Session.get('activePizzeria'));
};

export {loadSamplePizzaria};