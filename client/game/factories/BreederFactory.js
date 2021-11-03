import Factory from "./__BasicFactory";

let BreederFactory = class BreederFactory extends Factory
{
	constructor(props)
	{
		super(props);
		if (!this.pizzaA) this.pizzaA = null;
		if (!this.pizzaB) this.pizzaB = null;
		if (!this.litterSize) this.litterSize = 0;
		if (!this.toppings) this.litterSize = [];
	}
	// Getter
	// get toppings() {
	// 	return foo * bar;
	// }
	// Method
	calcToppings() {
		let toppingA = this.pizzaA?.toppings || [];
		let toppingB = this.pizzaB?.toppings || [];
		this.toppings = [].concat(toppingA, toppingB);
		return this.toppings;
	}
}

export default BreederFactory;
