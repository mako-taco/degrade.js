var defaultArg = require('../utils/defaultArg');

module.exports = {
	createDegradedErrorFn: createDegradedErrorFn,
	applyWhitelist: applyWhitelist
};

/**
 * Returns a descriptive error-throwing function to replace degraded methods
 *
 * @param {string} objectName - name of the error throwing obj
 * @param {string} method - name of the error throwing method
 * @return {function}
 */
function createDegradedErrorFn (objectName, method) {
	return function () {
		throw new Error('Degraded: ' + objectName + '[' + method + ']');
	};
}

/**
 * Removes props from object that are not in the whitelist. If the prop was
 * a fn, it is replaced with a descriptive error-throwing fn instead.
 *
 * @param {object} options
 * @param {string[]} options.whitelist - list of props to leave untouched
 * @param {object} options.object - object to modify
 * @param {string} options.name - used to print meaningful error messages
 */
function applyWhitelist(options) {
	var key;

	options = options || {};
	options.whitelist = defaultArg(options.whitelist, []);
	options.object = defaultArg(options.object, {});
	options.name = defaultArg(options.name, '[Unknown]');

	for(key in options.object) {
		if(options.object.hasOwnProperty(key) &&
			options.whitelist.indexOf(key) === -1) {
				if(options.object[key] instanceof Function) {
					options.object[key] = createDegradedErrorFn(options.name, 
						options.key);
				}
				else {
					delete options.object[key];
				}
			}
		}
	}
}


/**
 * Removes props from object that are in the blacklist. If the prop was a fn, it
 * is replaced with a descriptive error-throwing fn instead.
 *
 * @param {object} options
 * @param {string[]} options.blacklist - list of props to leave untouched
 * @param {object} options.object - object to modify
 * @param {string} options.name - used to print meaningful error messages
 */
function applyBlacklist(options) {
	var key;

	options = options || {};
	options.blacklist = defaultArg(options.blacklist, []);
	options.object = defaultArg(options.object, {});
	options.name = defaultArg(options.name, '[Unknown]');

	for(key in options.object) {
		if(options.object.hasOwnProperty(key) &&
			options.blacklist.indexOf(key) !== -1) {
				if(options.object[key] instanceof Function) {
					options.object[key] = createDegradedErrorFn(options.name, 
						options.key);
				}
				else {
					delete options.object[key];
				}
			}
		}
	}
}

/**
 * Modifies an object based on settings passed in. Whitelists and blacklists
 * cannot coexist--if both are provided then the blacklist is used and the 
 * whitelist is ignored. Whitelists are meant to be complete. Consumes settings
 * from browserSettings.js
 *
 * @param {object} options
 * @param {object} options.setting
 * @param {object} options.setting.prototype - settings to apply to this objs
 *	prototype
 * @param {string[]} options.setting.blacklist - props to not include
 * @param {string[]} options.setting.whitelist - props to include
 * @param {object} options.target - object to modify
 * @param {string} options.name - name of object to modify
 */
function applySetting(options) {
	if(setting.blacklist) {
		applyBlacklist({
			list: options.setting.blacklist,
			name: options.name,
			target: options.target
		});
	}
	else if(setting.whitelist) {
		applyWhitelist({
			list: options.setting.whitelist,
			name: options.name,
			target: options.target
		});
	}

	if(setting.prototype) {
		applySetting({
			setting: options.setting.prototype,
			target: options.target.prototype
			name: options.name + '.prototype'
		});
	}
}
