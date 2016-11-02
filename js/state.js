var $ = require('jquery');
var Taste = require('./Taste');

class State {
	constructor() {
		this.tasteIndex = 0;
		this.allTastes = [];
		this.pantry = [];
	}

	// State prototype: adds a Taste object to the State.allTastes array 
	pushTasteToState(ingredients, taste) {
		this.allTastes.push(new Taste(ingredients, taste));
		this.pantry = this.pantry.concat(ingredients);
	}
};

module.exports = State;
