// State Class: defines the initial state of the application
var State = function() {
  this.tasteIndex = 0;
  this.allTastes = [];
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
State.prototype.addTasteToAllTastesArray = function(ingredients, taste) {
  this.allTastes.push(new Taste(ingredients, taste));
}

State.prototype.returnTasteAtIndex = function(index) {
  return this.allTastes[index].taste;
}

Taste.prototype.makePreferredTasteTrue = function() {
  this.preferredTaste = true;
}

//2. push the new Taste objects to the state object
state.addTasteToAllTastesArray(['Glug of rum, slug of whisky, splash of gin'], 'strong');
state.addTasteToAllTastesArray(['Olive on a stick, salt-dusted rim, rasher of bacon'], 'salty');
state.addTasteToAllTastesArray(['Shake of bitters, splash of tonic, twist of lemon peel'], 'bitter');
state.addTasteToAllTastesArray(['Sugar cube, spoonful of honey, splash of cola'], 'sweet');
state.addTasteToAllTastesArray(['Slice of orange, dash of cassis, cherry on top'], 'fruity');

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

//Load page with the first question
$(document).ready(function() {
  $('.js-question').text(ourBartender.askQuestion()+" "+state.returnTasteAtIndex(state.tasteIndex))
})


$('.js-submit').on('click', function(){
  if ($("input:checked").val()==="yes") {    
    state.allTastes[state.tasteIndex].makePreferredTasteTrue()
    }

  if(state.tasteIndex < state.allTastes.length - 1 ) { 
        state.tasteIndex +=1;    
        $('.js-question').text(ourBartender.askQuestion()+" "+state.returnTasteAtIndex(state.tasteIndex));
      }

  else {
    $('.js-question').text('done');
    $('.js-submit').hide();
      }
});
