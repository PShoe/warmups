class Coffee
  attr_accessor :customer_name, :collected

  def initialize (type, sugar, size, customer_name)
    @type = type
    @sugar = sugar
    @size = size
    @customer_name = customer_name
    @order_time = Time.now
    @collected = false
    @wait_time_seconds = rand(120..300)
  end
  def to_s
    "#{@customer_name}'s #{@type}, #{@size}, #{@sugar}"
  end
  def misspell
    alphabet = ('a'..'z').to_a
    replace_letter = alphabet.sample
    @customer_name[0] = replace_letter.upcase
    "#{@customer_name}'s #{@type}, #{@size}, #{@sugar}"
  end
  def check_ready
    # can't use 'ready?' here by convention
    ask_time = Time.now
    time_lapsed = (ask_time - @order_time).to_i
    if time_lapsed < @wait_time_seconds
      "You've been waiting #{time_lapsed} seconds #{@customer_name}, and the full wait time is #{@wait_time_seconds} seconds"
    elsif time_lapsed >= @wait_time_seconds
      "Your drink is now ready to be collected"
    end
  end
  def go_collect
    collect_time = Time.now
    time_lapsed = (collect_time - @order_time).to_i

    if time_lapsed >= @wait_time_seconds
      @collected = true
      "Your coffee has been collected"
    elsif time_lapsed < @wait_time_seconds
      "Your coffee is not ready yet"
    end
  end

end
