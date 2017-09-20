# He answers 'Sure.' if you ask him a question.
# He answers 'Whatever.' if you tell him something.
# He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
# He says 'Fine. Be that way!' if you address him without actually saying anything.

require 'pry'

you_say = ""
def leet_speak (you_say)
  you_say = you_say.tr("aeioAEIO",'43104310')
  # Words that start with a consonant start with lower case
  # Consonants after the first letter alternate upper and lower case, except the alternation starts over with lowercase after a digit (ex: sCh00l)
  puts you_say
end

loop do
  puts "Say something to Daniel"
  you_say = gets.gsub "\n", ""

  if you_say == "Stop"
    puts "Goodbye"
    break
  else you_say != "Stop"
    if you_say.downcase.include? "bro,"
      leet_speak(you_say)
    elsif you_say == ""
    puts 'Fine. Be that way!'
    elsif you_say == you_say.upcase
      puts 'Woah, chill out!'
    elsif you_say[-1] == "?"
      puts 'Sure.'
    else
      puts 'Whatever.'
    end
  end
end


binding.pry
