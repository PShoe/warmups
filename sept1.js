

console.log('September 1, 2017 Warmup - THE BOARD');


var genGrid = function(char,numOfRow,numOfCol){
    var grid = '';
    for (row = 0; row < numOfRow; row++) {
        for (col = 0; col < numOfCol; col++) {
            grid += char + ' ';
        }
        grid += '\n';
    }
    return grid;
}






// var hashGrid = function(){
//     var grid = [];
//      for(i = 0; i < 9; i++){
//          var newRow = ["# # # # # # # #"];
//          grid.push(newRow);
//          grid.push("\n");
//      };
//      return grid;
// }


//console.log("hash:" + "\n" + hashGrid());
console.log(genGrid('g',4,6));
