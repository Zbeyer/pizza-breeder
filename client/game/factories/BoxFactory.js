import ContainerFactory from "./_ContainterFactory";

let BoxFactory = class BoxFactory extends ContainerFactory
{
	constructor(props)
	{
		super(props);
		if (!this.pizza) this.pizza = null;
	}
};

export default BoxFactory;
