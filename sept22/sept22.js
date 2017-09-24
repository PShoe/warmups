console.log('working')

// book = {
//   title: 'jaws',
//   page: 5
// }

var string = "title=jaws&page=5"
string = string.split(/\W/)

var book_js = {}
var title = string[0]
var page = string[2]

book_js[title] = string[1]
book_js[page] = Number(string[3])

console.log(book_js)
