// scripts.js

var a = 2,
	b = 5,
	value = (a * a) - (2 * a * b) + (b * b);

console.log('value = ' + value);

console.log( value>0 ? 'value is positive' : 'value is negative');

switch(value) {
	case 0:
		console.log('value is equal to 0')
	default:
		console.log('value is not equal to 0')
};