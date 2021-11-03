import EntityFactory from "./__Entityfactory";

let PizzaFactory = class PizzaFactory extends EntityFactory
{
	constructor(props)
	{
		super(props);
		if (!this.toppings) this.toppings = [];
		if (!this.traits) this.traits = [];
	}
};

export default PizzaFactory;
