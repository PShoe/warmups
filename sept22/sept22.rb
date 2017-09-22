# book = {
#   title: 'jaws',
#   page: 5
# }
require 'pry'

book_ruby = {}
string = "title=jaws&page=5"
string = string.split(/\W/)
# ruby
title = string[0]
page = string[2]

book_ruby[:title] = 'jaws'
book_ruby[:page] = 5


binding.pry
