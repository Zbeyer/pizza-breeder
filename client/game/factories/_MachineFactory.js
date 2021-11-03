import ContainerFactory from "./_ContainterFactory";

// Container with functionality...
let MachineFactory = class MachineFactory extends ContainerFactory
{
	constructor(props)
	{
		super(props);
		if (!this.inputs) this.inputs = [];
		if (!this.outputs) this.outputs = [];
	}
};

export default MachineFactory;
