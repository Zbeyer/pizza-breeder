// Has Unique Id
import Factory from "./__BasicFactory";

let EntityFactory = class EntityFactory extends Factory
{
	constructor(props)
	{
		super(props); // you're missing this
		if (!this.id) this.id = Random.id();
	}
};

export default EntityFactory;
