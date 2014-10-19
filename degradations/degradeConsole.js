var defaultArg = require('../utils/defaultArg');

/**
 * Degrades the `console` object
 * 
 * @param {console} console
 * @param {object} [options={}]
 * @param {boolean} [options.throwError=false] - throw an error on console
 *	when a console fn is used instead of alerting w/ console message
 * @param {boolean} [options.squelch=false] - toggles warning when a console
 *	fn is used.
 * @param {string} [options.logLevel='error'] - controls how to log an
 *	a call to console[method]. 
 */
module.exports = function (console, options) {
	var realConsole = {};

	options = defaultArg(options, {});
	options.strategy = defaultArg(options.strategy, 'warn');
	options.logLevel = defaultArg(options.logLevel, 'warn');
	
	for(var method in console) {
		if(console.hasOwnProperty(method)) {
			realConsole[method] = console[method];
			if(console[method] instanceof Function) {
				if(options.strategy === 'remove') {
					console[method] = undefined;
				}
				else {
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
		else if(options.strategy === 'warn') {
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
