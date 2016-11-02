var $ = require('jquery');

var State = require ('./State');
var Bartender = require('./Bartender');
var Taste = require('./Taste');

//1. initialize the new state object (instance of the State class)
var state = new State();


//2. push the new Taste objects to the state object
state.pushTasteToState(['Glug of rum', 'slug of whisky', 'splash of gin'], 'strong');
state.pushTasteToState(['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'], 'salty');
state.pushTasteToState(['Shake of bitters', 'splash of tonic', 'twist of lemon peel'], 'bitter');
state.pushTasteToState(['Sugar cube', 'spoonful of honey', 'splash of cola'], 'sweet');
state.pushTasteToState(['Slice of orange', 'dash of cassis', 'cherry on top'], 'fruity');


//3. initialize the new bartender object that asks questions about drinks
var ourBartender = new Bartender(['Do you like your drinks', 'Do ye like it', 'Are ye a lubber who likes it', 'Would ye like yer poison with a bit of', 'Do you like your drinks'])


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
