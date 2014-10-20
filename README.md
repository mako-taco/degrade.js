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
