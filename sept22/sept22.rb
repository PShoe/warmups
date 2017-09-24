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

book_ruby[:title] = string[1]
book_ruby[:page] = string[3].to_i

puts book_ruby

binding.pry
