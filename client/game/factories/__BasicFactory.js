let isObject = function(objValue)
{
	return objValue && typeof objValue === 'object' && objValue.constructor === Object;
};

let Factory = class Factory
{
	constructor(props)
	{
		if (!isObject(props)) return;

		let keys = Object.keys(props);
		for (let i = 0; i < keys.length; i++)
		{
			let key = keys[i];
			this[key] = props[key];
		}
	}
};

ToppingFactory = class ToppingFactory extends Factory
{

};

export default Factory;
