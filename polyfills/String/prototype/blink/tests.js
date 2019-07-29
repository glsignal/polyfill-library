/* eslint-env mocha */
/* globals proclaim */

it('is a function', function () {
	proclaim.isFunction(String.prototype.blink);
});

it('has correct arity', function () {
	proclaim.arity(String.prototype.blink, 1);
});

it('has correct name', function () {
	proclaim.hasName(String.prototype.blink, 'blink');
});

it('is not enumerable', function () {
	proclaim.isNotEnumerable(String.prototype, 'blink');
});

it('should throw a TypeError when called with undefined context', function () {
    proclaim.throws(function () {
        String.prototype.blink.call(undefined);
    }, TypeError);
});

it('should throw a TypeError when called with null context', function () {
    proclaim.throws(function () {
        String.prototype.blink.call(null);
    }, TypeError);
});

it('works on strings correctly', function() {
	proclaim.deepEqual('_'.blink(), '<blink>_</blink>');
	proclaim.deepEqual('<'.blink(), '<blink><</blink>');
	proclaim.deepEqual(String.prototype.blink.call(1234), '<blink>1234</blink>');
});