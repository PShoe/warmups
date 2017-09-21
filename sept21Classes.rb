require 'pry'
require 'securerandom'
require 'benchmark'

class Robot
  def initialize
    @count = 0
    @beginning_time = Time.now
    @name = make_name
  end
  def name
    @count = @count + 1
    @name
  end
  def make_name
    @name = SecureRandom.hex(3).upcase
  end
  def reset
    @count = @count + 1
    @beginning_time_reset = Time.now
    @name = SecureRandom.hex(3).upcase
  end
  def instruction_count
    @count
  end
  def timers
    end_time = Time.now
    puts "#{(end_time - @beginning_time)} since creation and #{(end_time - @beginning_time_reset)} since last reboot"
  end
end

binding.pry
