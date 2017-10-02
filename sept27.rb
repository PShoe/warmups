require 'pry'

# if string.size == 4
# connector = string[3] - do not pronouce this
# if string.size == 2
# last_char = string[3] - prounouce this


string = '0xA3'
full_sentence = ""
string.slice! "0x"
string.upcase!
sentence_complete = false

while sentence_complete == false
  def change_letter letter
    phrase = ""
    if letter == "A"
      phrase = "Atta"
    elsif letter == "B"
      phrase = "Bibbity"
    elsif letter == "C"
      phrase = "City"
    elsif letter == "D"
      phrase = "Dickety"
    elsif letter == "E"
      phrase = "Ebbity"
    elsif letter == "F"
      phrase = "Fleventy"
    end
    return phrase
  end

  def change_num_ones num
    phrase = ""
    if



  end

  def change_num_tens num

  end

  first_letter = string[0]
  first_phrase = change_letter first_letter
  puts first_phrase
  binding.pry

  if string.size == 2
    second_letter = string[1]
    if second_letter == "0"
      full_sentence = first_phrase
      return full_sentence
    else
      full_sentence =  first_phrase + second_letter
      return full_sentence
    end
  end

  puts full_sentence
  sentence_complete = true
  # puts full_sentence
end
