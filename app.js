var state = {
  tasteIndex: 0,
  allTastes: [],
  preferredTastes: []
}

var Taste = function(ingredients, taste) {
    this.ingredients = ingredients;
    this.taste = taste;
};

Taste.prototype.question = function(question) {
    return question + ' '+ this.taste + '?';
};

state.allTastes.push(new Taste(['Glug of rum, slug of whisky, splash of gin'], 'strong'));
state.allTastes.push(new Taste(['Olive on a stick, salt-dusted rim, rasher of bacon'], 'salty'));
state.allTastes.push(new Taste(['Shake of bitters, splash of tonic, twist of lemon peel'], 'bitter'));
state.allTastes.push(new Taste(['Sugar cube, spoonful of honey, splash of cola'], 'sweet'));
state.allTastes.push(new Taste(['Slice of orange, dash of cassis, cherry on top'], 'fruity'));

function getBartenderQuestion(element, index) {
  var questionPrompts = ['Do you like your drinks', 'Do ye like it', 'Are ye a lubber who likes it', 'Would ye like yer poison with a bit of', 'Do you like your drinks'];
  return element.question(questionPrompts[index])
};

function getTasteArray(tasteArray) {
    var newTasteArray = [];
    tasteArray.forEach(function(element){
      newTasteArray.push(element.taste)});
    return newTasteArray
  };

function getIngredientArray(tasteArray) {
    var newIngredientArray = [];
    tasteArray.forEach(function(element){
      newIngredientArray = newIngredientArray.concat(element.ingredients)});
    return newIngredientArray
  };

function pushToPreferredArray(){
  state.preferredTastes.push(state.allTastes[state.tasteIndex])
} 
 
$(document).ready(function() {
  state.tasteIndex = 0;
  updateQuestion();
})
  
function updateQuestion() {  
  $('.js-question').text(getBartenderQuestion(state.allTastes[state.tasteIndex],state.tasteIndex))
 }

$('.js-submit').on('click', function(){
    
    if(state.tasteIndex < state.allTastes.length) { 
      
      if($( "input:checked" ).val()==="yes") {
        pushToPreferredArray();
        console.log(state.tasteIndex)
        console.log(state.preferredTastes)
      }

     if(state.tasteIndex < state.allTastes.length - 1 ) { 
        state.tasteIndex +=1;    
        updateQuestion();
      }

      else {
        $('.js-question').text(getTasteArray(state.preferredTastes))
        $('.js-submit').hide()
      }
    }
  });
