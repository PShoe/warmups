console.log('Sept 7 decode');

var message = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.";
var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var cipher = "DEFGHIJKLMNOPQRSTUVWXYZABC";
var alphaArr = alpha.split('');
var cipherArr = cipher.split('');

var shiftLetter = function(char) {
var index = cipherArr.indexOf(char);
if (char.match(/\W/g)) {
    var decodeLetter = char[0];
  } else {
    var decodeLetter = alphaArr[index];
  }
  return decodeLetter;
}

var messageArr = message.split('');
var decode = messageArr.map(shiftLetter);
decode = decode.join("");
console.log(decode);
