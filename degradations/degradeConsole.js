var defaultArg = require('../utils/defaultArg');

/**
 * Degrades the `console` object
 * 
 * @param {console} console
 * @param {object} [options={}]
 * @param {'alert'|'error'|'ignore'|'remove'} [options.strategy='alert']
 * @param {'warn'|'trace'|'error'|'log'|'debug'} [options.logLevel='error'] - 
 *	controls how to alert the user when a call to console[method] is made 
 */
module.exports = function (console, options) {
	var realConsole = {};

	options = defaultArg(options, {});
	options.strategy = defaultArg(options.strategy, 'alert');
	options.logLevel = defaultArg(options.logLevel, 'error');
	
	if(options.strategy === 'remove') {
		window.console = undefined;
	}
	else {
		for(var method in console) {
			if(console.hasOwnProperty(method)) {
				realConsole[method] = console[method];
				if(console[method] instanceof Function) {
					console[method] = createConsoleWrapper(method);
				}
			}
		}
	}

	
	/**
	 * Wraps a console function to throw errors/warn appropriately
	 *
	 * @param {string} method - a fn of console to wrap
	 * @return {function}
	 */
	function createConsoleWrapper(method) {
		if(options.strategy === 'error') {
			return function () {
				throw new Error('Degraded: console.' + method);
			};
		}
		else if(options.strategy === 'alert') {
			return function () {
				realConsole[options.logLevel]('Degraded: console.' + method);
				realConsole[method].apply(console, arguments);
			};
		}
		else if(options.strategy === 'ignore') {
			return realConsole[method];
		}
		else {
			throw new Error('Degrade: unrecognized console strategy `' + 
				options.strategy + '`');
		}
	}
};
