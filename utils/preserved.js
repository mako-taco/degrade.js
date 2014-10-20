module.exports = function (window) {
	return {	
		HTMLElement: window.HTMLElement,
		console: {
			warn: window.console.warn.bind(console),
			log: window.console.log.bind(console),
			debug: window.console.debug.bind(console),
			time: window.console.time.bind(console),
			error: window.console.error.bind(console)
		},
		parseInt: window.parseInt.bind(window),
		Object: {
			defineProperty: window.Object.definePropery.bind(Object),
			getOwnPropertyDescriptor: window.Object.getOwnPropertyDescriptor
				.bind(Object)
		}
	};
};