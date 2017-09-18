# He answers 'Sure.' if you ask him a question.
# He answers 'Whatever.' if you tell him something.
# He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
# He says 'Fine. Be that way!' if you address him without actually saying anything.

require 'pry'

loop do
  puts "Say something to Daniel"
  you_say = gets.gsub "\n", ""

  if you_say == "Stop"
    puts "Goodbye"
    break
  else you_say != "Stop"
    if you_say == ""
    puts 'Fine. Be that way!'
    elsif you_say == you_say.upcase
      puts 'Woah, chill out!'
    elsif you_say.include?("\?")
      puts 'Sure.'
    else
      puts 'Whatever.'
    end
  end
end


binding.pry
