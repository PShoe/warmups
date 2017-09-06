console.log('Sept 6 Warmup')



var bob = [3,2,6,11,9,2,6,9,10];
var jim = [5,12,9,22,13,7,16,10,11];
var fish = [2,2,4,5,4,3,6,4,1];
var par = [3,4,5,5,3,3,4,3,5];


var add = function(a, b) {
    return a + b;
}
var totalScores = function (arr) {
    var scoreSum = arr.reduce(add, 0);
    return scoreSum;
}

/// ask for further explanation of REDUCE method

console.log("Bob: " + totalScores(bob));
console.log("Jim: " + totalScores(jim));
console.log("Fish: " + totalScores(fish));
console.log("Par: " + totalScores(par));


var checkPar = function (arr) {
  var par = 35;
  var yourScore = totalScores(arr);

  if (yourScore <= par) {
    console.log("You got par!");
  } else {
    console.log("Keep practicing..");
  }
}

console.log(checkPar(fish));

var calcFishWinnings = (totalScores(bob) + totalScores(jim)) - 70;
console.log(calcFishWinnings);
