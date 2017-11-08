console.log('working?')

// if only one letter - print value of key

// split into pairs?
// if two letters:
// if letter is before-  subtract
// if letter is after- add

// 3 letters ---?

// the first letter will indicate the tens place...

//what are the intervals that change the first letters?
// 1-4 all I
// 4 - IV
// 5-8 all V
// 9 - IX
// 10 - 39 - all X + stuff
// 40 - 49 - all XL + stuff
// 50-89 - all L + stuff
// 90 - 99 - all XC + stuff
// 100 - C + stuff

letters = [
    [1000, 'M'],
    // -100
      [900, 'CM'], //special double letter
    [500, 'D'],
    // -100
      [400, 'CD'], //special double letter
    [100, 'C'],
    // -10
    [ 90, 'XC'], //special double lettertouch 
    [50, 'L'],
    // -10
      [40, 'XL'], //special double letter
    [10, 'X'],
    // -1
      [9, 'IX'], //special double letter
    [5, 'V'],
    // -1
      [4, 'IV'], //special double letter
    [1, 'I']
];
var romanNumeral = function(myNum){
  roman = '';
  if (myNum === 0){
    return roman
    // romans have nothing for zero
  }
  for (var i = 0; i <letters.length; i++){
    if(myNum >= letters[i][0]){
      // if greater than or equal to 1000 or letters[i][0]
      // if greater than or equal to 900
      // if greater than or equal to 500... etc
      // *37* is greater than or equal to 10 - returns (X)
      // sends number 27 (37-10) back into this function
      // 27 is >= 10, sends 17 back into function  (X)
      // 17 is >= 10, sends 7 back into function  (X)
      // 7 is >= 5 returns (V)
      // 7-5, sends 2 back into function
      // 2 is >= 1, returns (I), sends 1 back into function
      // 1 is >= 1, returns (I) 1-1 is zero which is not greater than anything in letters, stops
      return letters[i][1] + romanNumeral(myNum - letters[i][0]);
    }
  }
}
