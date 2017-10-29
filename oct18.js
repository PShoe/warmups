console.log('working?');

cardNums = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
suits = ['Clubs','Spades','Hearts','Diamonds'];
alreadyPicked = [];
var card = "";

var pickCard = function() {
  var num = cardNums[Math.floor(Math.random()*cardNums.length)];
  var suit = suits[Math.floor(Math.random()*suits.length)];
  card = num + suit;
  alreadyPicked.push(card);
  return card;
};

var filterPicked = function(alreadyPicked) {
alreadyPicked = alreadyPicked.filter(function(x,i,a){
  return a.indexOf(x) == i;
})
}

var deal = function(numToDeal) {
  for (var i = 0; alreadyPicked.length < numToDeal; i++){
    pickCard();
    if (alreadyPicked.length > 1) {
    filterPicked();
  }
  }
}
