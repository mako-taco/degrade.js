module.exports = {	
	HTMLElement: window.HTMLElement,
	console: {
		warn: window.console.warn,
		log: window.console.log,
		debug: window.console.debug,
		time: window.console.time,
		error: window.console.error
	},
	parseInt: window.parseInt,
	Object: {
		defineProperty: Object.definePropery,
		getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor
	}
}