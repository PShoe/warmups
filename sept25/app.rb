require 'pry'
require_relative 'coffee.rb'


c1 = Coffee.new('latte','2 sugars','medium','Darryl')
c2 = Coffee.new('flat white','1 sugars','medium','Sidhra')
c3 = Coffee.new('latte','2 sugars','large','DT')

coffee_array = [c1,c2,c3]

puts "UNCOLLECTED COFFEES: "
not_collected_coffees = coffee_array.select {|coffee| coffee.collected == false}
puts not_collected_coffees


binding.pry
