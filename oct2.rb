require 'pry'

# KASUN QUESTIONS, instace/class variable
# calling a method iside another method
# what is going on inside under_twenty hash

class Say
  attr_accessor :num

  def initialize num
    @num = num
    if num < 20
      under_twenty = true
    else
      under_twenty = false
    end
    @num = @num.to_s
    @number_array = []

    under_twenty_hash = {
      '0' => '', '1' => 'one', '2' => 'two', '3' => 'three', '4' => 'four', '5' => 'five', '6' => 'six', '7' => 'seven', '8' => 'eight', '9' => 'nine', 10 => 'ten', '11' => 'eleven', '12' => 'twelve', '13' => 'thirteen', '14' => 'fourteen', '15' => 'fifteen', '16' => 'sixteen', '17' => 'seventeen', '18' => 'eighteen', '19' => 'nineteen'
    }

    tens_hash = {'2' => 'twenty', '3' => 'thirty', '4' => 'forty', '5' => 'fifty', '6' => 'sixty', '7' => 'seventy', '8' => 'eighty', '9' => 'ninety'}

    if under_twenty == true
      @number_array.push under_twenty_hash[@num]
    elsif under_twenty == false
      @num = @num.split('')
      @tens = @num[0]
      @ones = @num[1]
      @number_array.push tens_hash[@tens]
      @number_array.push under_twenty_hash[@ones]
    end
  end

  def in_english
    @number_array = @number_array.join(" ")
    @number_array
  end

end
  binding.pry