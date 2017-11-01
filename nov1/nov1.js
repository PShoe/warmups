var fs = require('fs');

fs.readFile('nov1.txt', 'utf-8', function(err, data) {
  JSON.stringify(data);
  fileData = data.split('\n');

  dataArray = [];

  for(var rowNum = 0; rowNum < fileData.length; rowNum++){
    row = fileData[rowNum].split(',');
    dataArray.push(row);
  }

  // remove headers
  var headers = dataArray[0];
  dataArray.shift();
  headers.shift();

  // get names
  nameArray = [];
  for(var i = 0; i < (dataArray.length - 1) ; i++){
    var nameRow = dataArray[i];
    name = nameRow[0]
    nameArray.push(name);
  }

  dataArray.pop(); // dont know why necessary yet

  // make names into object elements
  bigFileObj = {}
  for(var j = 0; j < nameArray.length; j++){
    var nameObj = nameArray[j];
    bigFileObj[nameObj] = [];
  }

  // make person objects
  for(var index = 0; index < dataArray.length; index ++ ){
    personObj = {}
    thisRow = dataArray[index]
    personObj[headers[0]] = thisRow[1];
    personObj[headers[1]] = thisRow[2];
    personObj[headers[2]] = thisRow[3];
    console.log(personObj);
  }

  // put objects into bigFileObj


// first person
//   headers[1] = dataArray[row1][col1]
//   headers[2] = dataArray[row1][col2]
//   headers[3] = dataArray[row1][col3]




  console.log(bigFileObj);
  console.log(dataArray);
  console.log(nameArray);
  console.log(headers);


  debugger
})

// myBigObj[name] = {product: 'Marijuana'}


//
// {
//    'Alica Brereton':[
//       {
//          product:'Marijuana',
//          unitPrice:'9.18',
//          units:'50',
//          totalPrice:'459.00'
//       }
//    ],
