// Has Inventory...
import EntityFactory from "./__Entityfactory";

let ContainerFactory = class ContainerFactory extends EntityFactory
{
	constructor(props)
	{
		super(props);
		if (!this.inventory) this.inventory = [];
	}
};

export default ContainerFactory;
