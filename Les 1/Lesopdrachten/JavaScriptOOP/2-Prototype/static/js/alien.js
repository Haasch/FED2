/**
 *	Object Constructor using 'prototype'
 *	
 *
 */

function Persoon(name) {
	this.name = name;
}

Persoon.prototype.walk = function () {
	console.log('Hi, my name is ' + this.name) + 'and I walk';
};

Persoon.prototype.eat = function () {
	console.log('Hi, my name is ' + this.name) + 'and I eat' ;
};

var bob = new Persoon('Bob');

bob.speak();
