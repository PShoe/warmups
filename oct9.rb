require 'pry'

num_arr = [5,16,4,30,15]

def get_squares num_arr
  square_arr = num_arr.select { |number| Math.sqrt(number) % 1 == 0 }
  square_arr.uniq.sort
end

binding.pry
