console.log('Sept 8, Archaeologist');

 // var makeFakeMap = funtion (){
 //   //makeMap
 //   //insert random X
 // }


//  var  makeMap = function (rows,cols) {
//    var mapArr = [];
//    makeARow(cols);
//    for (var i = 0; i < rows; i ++){
//      mapArr.push(rowArr);
//    }
//    return mapArr;
// }
//
// var makeARow = function (cols) {
//   var rowArr = [];
//   for (var i = 0; i < cols; i++){
//     rowArr.push("A")
//   }
//   return rowArr;
// }
//


var makeMap = function (rows,cols){
  var fullMap = [];
  var char = "A";
  var newRow = char.repeat(cols);
  for (i = 0; i < rows; i++){
    var newLine = newRow.split("");
    fullMap[i] = newLine;
  }
  return fullMap;
}

var presentMap = function(fullMap) {
  var display = '[\n';
  for (var i = 0; i < fullMap.length; i++) {
    display += '['
    for (var j = 0; j < fullMap[i].length; j++) {
      display += '"' + fullMap[i][j] + '"'
      if (j < fullMap[i].length - 1) {
        display += ','
      }
    }
    display += ']'
    if (i < fullMap.length - 1) {
      display += ',\n'
    }
  }
  display += '\n]'
  console.log(display);
}

var map = makeMap(5, 5);
presentMap(map);
