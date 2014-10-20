# degrade.js

If you want browser compatability back to IE7 or IE8, your dev cycle probably looks something like this:

1. Develop feature in chrome
2. Test feature in chrome
3. Work out bugs in chrome
4. Launch Windows VM
5. Test feature in IE
6. Work out bugs in IE
7. Repeat

If you're writing a third-party library, you can't rely on tools like Modernizr or polyfills to 
address compatability concerns. That's where `degrade` comes in.  Instead of trying to monkey-patch
old browsers to behave sort of like new ones, we make the new browsers as crappy as the old ones by
crippling javascript in creative ways.

The result is a development cycle that looks more like this:

1. Develop feature in chrome
2. Test feature in chrome
3. Work out bugs in chrome
4. Repeat

`Degrade` lets you develop in chrome, but catch IE specific errors before you ever have to open a VM.

# Usage

```js
parseInt('010'); //10
degrade.to.ie8();
parseInt('010'); //8, and a warning
```
You may also pass in an `options` object:

```js
var options = {
	console: {
		strategy: 'alert',
		logLevel: 'trace'
	}
};
degrade.to.ie8(options);
```

## Options

Below are the complete list of options which can be passed to `degrade`.

### console

Control the behavior of methods like `console.log` or `console.time`.

#### strategy

Must be one of `'alert'`,`'error'`,`'remove'`

# Completeness

## IE8
 - Uses ES3 array prototype
 - `parseInt` with leading 0s defaults to octal
 - `Object.defineProperty` throws an error if passed a non HTMLElement
 - `Object.getPropertyDescriptors` throws an error if passed a non HTMLElement
 - Many options to suit your individual needs for `console` statements

### Known issues
1. `Event.prototype` - In IE8, `Event.prototype` is essentially empty. It will
 	take a large amount of work to knock down `Event`, `KeyEvent`, `MouseEvent`,
 	etc to IE8s level. This is planned for the future.

## IE7
Work on IE7 is planned, but has not yet been started
