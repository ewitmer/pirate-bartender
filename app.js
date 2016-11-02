// State Class: defines the initial state of the application
var State = function() {
  this.tasteIndex = 0;
  this.allTastes = [];
  this.pantry = [];
};

//1. initialize the new state object (instance of the State class)
var state = new State();

// Taste Class: defines the characteristics of a taste object
var Taste = function(ingredients, taste) {
  this.ingredients = ingredients;
  this.taste = taste;
  this.preferredTaste = false;
};

// State prototype: adds a Taste object to the State.allTastes array 
State.prototype.pushTasteToState = function(ingredients, taste) {
  this.allTastes.push(new Taste(ingredients, taste));
  this.pantry = this.pantry.concat(ingredients);
}

// Change the state of the preferred taste variable to true
Taste.prototype.makePreferredTasteTrue = function() {
  this.preferredTaste = true;
}

//2. push the new Taste objects to the state object
state.pushTasteToState(['Glug of rum', 'slug of whisky', 'splash of gin'], 'strong');
state.pushTasteToState(['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'], 'salty');
state.pushTasteToState(['Shake of bitters', 'splash of tonic', 'twist of lemon peel'], 'bitter');
state.pushTasteToState(['Sugar cube', 'spoonful of honey', 'splash of cola'], 'sweet');
state.pushTasteToState(['Slice of orange', 'dash of cassis', 'cherry on top'], 'fruity');

// Bartender Class: defines the characteristics of a bartender object
var Bartender = function(questions) {
  this.questions = questions;
}

//3. initialize the new bartender object that asks questions about drinks
var ourBartender = new Bartender(['Do you like your drinks', 'Do ye like it', 'Are ye a lubber who likes it', 'Would ye like yer poison with a bit of', 'Do you like your drinks'])

// Bartender prototype: asks a random question from the array of questions
Bartender.prototype.askQuestion = function() {
   return this.questions[Math.floor(Math.random()*this.questions.length)]
};

Bartender.prototype.createDrink = function(state, numberOfIngredients) {
  //check to make sure at least one preference has been selected
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
};

//Load page with the first question
$(document).ready(function() {
  $('.js-question').text(ourBartender.askQuestion()+" "+state.allTastes[state.tasteIndex].taste)
})


$('.js-submit').on('click', function(){
  if ($("input:checked").val()==="yes") {    
    state.allTastes[state.tasteIndex].makePreferredTasteTrue()
    }

  if(state.tasteIndex < state.allTastes.length - 1 ) { 
        state.tasteIndex +=1;    
        $('.js-question').text(ourBartender.askQuestion()+" "+state.allTastes[state.tasteIndex].taste);
      }

  else {
    $('.js-question').text("Your drink is: "+ourBartender.createDrink(state,4));
    $('.js-submit').hide();
      }
});
