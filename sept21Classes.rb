require 'pry'
require 'securerandom'
require 'benchmark'

class Robot
  def initialize
    @count = 0
    @creation_time = Time.now
    @name = make_name
  end
  def name
    @count += 1
    @name
  end
  def make_name
    @name = SecureRandom.hex(3).upcase
  end
  def reset
    @count += 1
    @boot_time = Time.now
    @name = SecureRandom.hex(3).upcase
  end
  def instruction_count
    @count
  end
  def timers
    end_time = Time.now
    puts "#{(end_time - @creation_time)} since creation and #{(end_time - @boot_time)} since last reboot"
  end
end

binding.pry
