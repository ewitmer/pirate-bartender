var $ = require('jquery');

// Bartender Class: defines the characteristics of a bartender object
class Bartender {
	
	constructor(questions) {
		this.questions = questions;
	}

	// Bartender prototype: asks a random question from the array of questions
	askQuestion() {
   		return this.questions[Math.floor(Math.random()*this.questions.length)]
	}

	//check to make sure at least one preference has been selected
	createDrink(state, numberOfIngredients) {
  
  		var newRecipe = [];

  		if (state.allTastes.every(function(element) {
    		return !(element.preferredTaste)
  		})) {
    		return "Please select at least one taste preference!"
  			}
  		
  		else {
    		while (newRecipe.length < numberOfIngredients) {
      			var index = Math.floor(Math.random()*state.allTastes.length)
      			if (state.allTastes[index].preferredTaste) {
        			newRecipe.push(state.allTastes[index].ingredients[Math.floor(Math.random()*state.allTastes[index].ingredients.length)])
      			}
    		}  
  		}
  		return newRecipe
	}
};


module.exports = Bartender;