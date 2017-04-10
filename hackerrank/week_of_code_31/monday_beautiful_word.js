function isBeautiful(word){
    var vowels = ["a", "e","i","o", "u", "y"]
    var length = word.length
    var last
    var letter
    for (i = 0; i<word.length; i+= 1){
      letter = word[i]
      if(vowels.includes(letter)){
        if(vowels.includes(last) || last === letter){
          return "No"
        }
      }else{
        if(last === letter){
          return "No"
        }
      }
      last = letter
    }
    return "Yes"

}
