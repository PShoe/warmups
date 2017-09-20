# Lunch Orders
#
require 'pry'

add_another_name = ""
orders = {}
until add_another_name == "n" do
  puts "Name for order: "
  name = gets.chomp
  orders[name] = {}
  orders[name][:items] = []
  add_another_item = ""
  until add_another_item == "n" do
    puts "#{ name } wants to order: "
    item = gets.chomp
    orders[name][:items].push(item)

    puts "Add another item to the order? (y/n)"
    add_another_item = gets.chomp
  end

  one_person_order = orders[name][:items].join(", ")
  puts "All #{ name } orders: #{ one_person_order }"

  puts "Add another person? (y/n)"
  add_another_name = gets.chomp

end

all_orders = orders.each {|key, value| puts "#{ key } ordered #{ orders[key][:items].join(" & ") }" }

binding.pry
