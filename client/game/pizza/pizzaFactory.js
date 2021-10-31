PizzaFactory = class PizzaFactory {
	constructor(props) {
		let keys = Object.keys(props);
		for (let i = 0; i < keys.length; i++)
		{
			let key = keys[i];
			this[key] = props[key];
		}
		// if (!this.id) this.id = Random.id;
		if (!this.id) this.id = Random.id();
		// this.name = props.name;
		// this.diameter = props.diameter;
		// this.toppings = props.toppings;
		// this.diameter = props.diameter;
		// this.size = props.size;
	}

};

// ZBEYER: figure out how to export this later
// We're doing greedy loading
// ZF says, "A lot of people just do an export of a function that returns a thing...
// 		Maybe that's a better pattern long term...
//
//		Make Pizza
//		Breed Pizza -> Make pizza array
//		Etc...
// export const PizzaFactory = PizzaFactory;