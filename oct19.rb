require 'pry'

# onePts = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' ] // 9
# twoPts = ['D', 'G'] // 11
# threePts = ['B', 'C', 'M', 'P'] // 15
# fourPts = ['F', 'H', 'V', 'W', 'Y' ] // 20
# fivePts = ['K'] // 21
# eightPts = ['J', 'X'] // 23
# tenPts = ['Q', 'Z'] // 25

class Scrabble
  def initialize
  end
  def self.score (string)
    string_array = string.upcase().split('')
    score = 0
    string_array.each do |letter|
      all_letters = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' ,'D', 'G','B', 'C', 'M', 'P','F', 'H', 'V', 'W', 'Y', 'K', 'J', 'X', 'Q', 'Z']
      letter_number = all_letters.index letter
        if letter_number <= 9
          score = score + 1
        elsif letter_number <= 11
          score = score + 2
        elsif letter_number <= 15
          score = score + 3
        elsif letter_number <= 20
          score = score + 4
        elsif letter_number <= 21
          score = score + 5
        elsif letter_number <= 23
          score = score + 8
        elsif letter_number <= 25
          score = score + 10
        end
      end
    score
    end
end


binding.pry
