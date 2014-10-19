var IE8 = {
	Object: {
		whitelist: {
			props: [
				'defineProperty',
				'getOwnPropertyDescriptor'
			],
		},
		prototype: {
			whitelist: [
				'constructor',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'toLocaleString',
				'toString',
				'valueOf'
			]
		}
	},
	Array: {
		whitelist: {
			props: [],
		},
		prototype: {
			props: [
				'concat',
				'join',
				'length',
				'slice',
				'sort',
				'pop',
				'push',
				'reverse',
				'shift',
				'unshift'
			]
		}
	},
	Date: {
		whitelist: {
			props: [
				'UTC',
				'length',
				'parse'
			]
		},
		prototype: {
			blacklist: [
				'toISOString'
			]
		}
	},
	String: {
		blacklist: [],
		prototype: {
			blacklist: [
				'trim'
			]
		}
	},
	Number: {
		blacklist: [],
		prototype: {
			blacklist: []
		}
	},
	Function: {
		blacklist: [],
		prototype: {
			blacklist: [
				'bind'
			]
		}
	},
	JSON: {
		blacklist: [],
		prototype: {
			blacklist: []
		}
	},
	Event: {
		blacklist: [],
		prototype: {
			blacklist: [
				'preventDefault'
			]
		}
	},
	Error: {
		blacklist: [],
		prototype: {
			blacklist: []
		}
	},
	window: {
		blacklist: [
			'hasOwnProperty'
		]
	}
};

module.exports = {
	IE8: IE8;
};