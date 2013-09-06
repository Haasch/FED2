/**
 *	Object literal
 *	
 *
 */

var bob = {
	name: 'Bob',
	
	speak: function () {
		console.log('Hi, my name is ' + this.name);

		// console.log("This is:" + this.constructor);
	}
}

bob.speak();
