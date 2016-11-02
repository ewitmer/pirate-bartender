var $ = require('jquery');

// Taste Class: defines the characteristics of a taste object
class Taste {
	constructor(ingredients, taste) {
  		this.ingredients = ingredients;
  		this.taste = taste;
  		this.preferredTaste = false;
	}

	// Change the state of the preferred taste variable to true
	makePreferredTasteTrue() {
  		this.preferredTaste = true;
	}
};

module.exports = Taste;
