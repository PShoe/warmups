require 'pry'

class Dice

  def self.roll(*num_of_rolls)
    roll_array = []
    if num_of_rolls == []
    num_of_rolls = 1
    else
    num_of_rolls = num_of_rolls.first
    end
    i = 0
    while i < num_of_rolls do
      roll = rand(1..6)
      roll_array.push(roll)
      i = i + 1
    end
    roll_array
  end


end


# questions - don't always need an intialize,

# def self.roll(num_of_rolls=1)
#
# roll_array = []
# num_of_rolls.times do
#   roll = rand(1..6)
#   roll_array.push(roll)
# end
