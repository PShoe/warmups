console.log('nov 3')

s1 = "xyaabbbccccdefww"
s2 = "xxxxyyyyabklmopq"

var longest = function(str1, str2){

  addedStrings = str1 + str2
  // addedStrings = addedStrings.split('')
  addedStrings = _.uniq(addedStrings)
  addedStrings = _.sortBy(addedStrings)
  addedStrings = addedStrings.join('')

  return addedStrings
}
