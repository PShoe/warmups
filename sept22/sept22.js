console.log('working')

// book = {
//   title: 'jaws',
//   page: 5
// }

var string = "title=jaws&page=5"
string = string.split(/\W/g)

var book_js = {}
// book[title] = 'jaws'
// book[page] = 5

book_js[string[0]] = string[1]
book_js[string[2]] = string[3]
