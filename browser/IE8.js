var preserved = require('../utils/preserved')(window),
	browserSettings = require('./browserSettings').IE8,
	applySetting = require('../utils/common').applySetting,
	defaultArg = require('../utils/defaultArg'),
	degradeConsole = require('../degradations/degradeConsole');

/**
 * @param {object} options
 * @param {object} options.console
 * @param {'alert'|'error'|'ignore'} [options.console.strategy='alert']
 * @param {'warn'|'trace'|'error'|'log'|'debug'} [options.console.logLevel=
 *	'error'] - controls how to alert the user when a call to console[method] 
 *	is made 
 */
module.exports = function (options) {
	var browserSetting,
		target,
		key;

	options = defaultArg(options, {});
	options.console = defaultArg(options.console, {});
	options.console.strategy = defaultArg(options.console.strategy, 'alert');
	options.console.logLevel = defaultArg(options.console.logLevel, 'error');

	for(key in browserSettings) {
		if(browserSettings.hasOwnProperty(key)) {
			browserSetting = browserSettings[key];
			target = window[key];
		
			applySetting({
				setting: browserSetting,
				target: target, 
				name: key
			});
		}
	}

	degradeConsole(window.console, options.console);
	degradeParseInt();
	degradeObjectDefineProperty();
	degradeObjectGetOwnPropertyDescriptor();
	degradeEventHasOwnProperty();
};

function degradeParseInt() {
	window.parseInt =  function (str, base) {
		if(str.charAt(0) === '0' && base === undefined) {
			preserved.console.warn('Degrade: passing a string with leading 0 ' +
				'and no base will be interpreted as octal in IE8');
			return preserved.parseInt.call(window, str, 8);
		} 
		else {
			return preserved.parseInt.call(window, str, base);
		}
	};
}

function degradeObjectDefineProperty() {
	Object.defineProperty = function (obj, propName, descriptor) {
		if(obj instanceof preserved.HTMLElement) {
			preserved.Object.defineProperty.call(Object, obj, propName, 
				descriptor);
		}
		else {
			throw new Error('Degrade: defineProperty can only be called on ' +
				'objects of type HTMLElement in IE8');
		}
	};
}

function degradeObjectGetOwnPropertyDescriptor() {
	Object.getOwnPropertyDescriptor = function (obj, prop) {
		if(obj instanceof preserved.HTMLElement) {
			preserved.Object.getOwnPropertyDescriptor.call(Object, obj, prop);
		}
		else {
			throw new Error('Degrade: getOwnPropertyDescriptor can only be ' +
				'called on objects of type HTMLElement in IE8');
		}
	};
}

function degradeEventHasOwnProperty() {
	Event.degradeEventHasOwnProperty = function () {
		throw new Error('Degrade: Event.hasOwnProperty is not supported in ' +
			'IE8');
	};
}
