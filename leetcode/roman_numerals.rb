# @param {Integer} num
# @return {String}
def int_to_roman(num)
    full_number = "".to_s
    roman_numerals_table = {"M" => 1000,
      "CM" =>900,
      "D" => 500,
      "CD"=> 400,
      "C" => 100,
      "XC" => 90,
      "L" => 50,
      "XL" =>40,
      "X" => 10,
      "IX" => 9,
      "V" => 5,
      "IV"=>4,
      "I" => 1}
    num
    # prev_letter = ""
    roman_numerals_table.each do  |letter, number|
      count_letters = num / number
      # if count_letters == 4
      #   full_number = full_number + letter + prev_letter
      # else
      full_number = full_number +letter * count_letters
      # end
      num = num % number
      # prev_letter = letter
    end
    p full_number
end
