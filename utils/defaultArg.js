module.exports = function (arg, defaultValue) {
	return arg !== undefined ?
		arg :
		defaultValue;
}