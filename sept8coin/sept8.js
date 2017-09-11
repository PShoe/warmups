console.log("Sept 8, The Ultimate Life Decider- ARRAYS ")

  var tailsArr = [];
  var headsArr = [];

  while (tailsArr.length < 5 && headsArr.length < 5){

    var coin = Math.round(Math.random())

    if (coin === 1){
      coin = 'heads';
      headsArr.push(coin);
    } else if (coin === 0) {
      coin = 'tails';
      tailsArr.push(coin);
    }
    }

  var tossArr = tailsArr.concat(headsArr);
  tossArr = tossArr.join(" ");

  var tossWinner = function () {
    if (tailsArr.length < headsArr.length) {

      console.log("Tosses: " + tossArr + "\n" + "Heads wins!")
    } else {
      console.log("Tosses: " + tossArr + "\n" + "Tails wins!")
    }
  }


console.log(tossWinner());


console.log("Sept 8, The Ultimate Life Decider - COUNTER")

  var headsCount = 0;
  var tailsCount = 0;

  while (headsCount < 5 && tailsCount < 5){
    var coin = Math.round(Math.random())
    if (coin === 1){
      headsCount += 1
    } else if (coin === 0) {
      tailsCount += 1
    }}


  var tossWinner2 = function () {
    if (tailsCount < headsCount) {
      console.log(headsCount + " :Heads " + tailsCount + " :Tails" + "\n" + "Heads wins!")
    } else {
      console.log(headsCount + " :Heads " + tailsCount + " :Tails" + "\n" + "Tails wins!")
    }
  }

  console.log(tossWinner2());
