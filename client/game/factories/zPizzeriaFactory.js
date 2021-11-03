import EntityFactory from "./__Entityfactory";

let PizzeriaFactory = class PizzeriaFactory extends EntityFactory
{
	constructor(props)
	{
		super(props);
		if (!this.name) this.name = "Zack\'s Pizzeria"
		if (!this.boxes) this.boxes = [];
		if (!this.displays) this.displays = [];
		if (!this.ovens) this.ovens = [];
	}
};

export default PizzeriaFactory;