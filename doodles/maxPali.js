function maxPalindrome(string){
  var maxPali = string[0]
  var maxRadius = 0
  var radius
  counter = 0
  for (i=1; i<string.length; i++){
    counter++
    if (string[i-1]===string[i]){
      counter++
      radius=1
      while(string[i-radius - 1] === string[i+radius] && i >= radius+1 && string.length >= i+radius){
        counter++
        radius += 1
      }
      if (radius*2 > maxPali.length){
        maxRadius = radius
        maxPali = string.slice(i-radius, i+radius)
      }
    }
    if (string[i-1] === string[i+1]){
      counter++
      radius = 1
      while(string[i-radius-1] === string[i+radius+1] && radius < i && string.length >= i+radius){
        counter++
        radius+=1
      }
      if (radius*2+1 >= maxPali.length){
        maxRadius = radius
        maxPali = string.slice(i-radius, i+radius+1)
      }
    }
  }
  console.log("--------------------------------------")
  console.log(maxPali)
  console.log("n =" + string.length)
  console.log("andy's count"+ counter)
  console.log(".5n^2 = " +string.length*string.length/2)
  return maxPali
}



function katPalindrome(str){
  var maxPali = "";
  var maxLength = 0;
  counter = 0

  //find start index
  for(var i = 0; i < str.length; i++){
    var startIdx = i;
    counter++
    //find end index
    for(var j = i; j < str.length; j++){
      var endIdx = j;
      counter++
      //a palindrome starts and ends with the same character
      if(str[startIdx] === str[endIdx]){
      var word = str.slice(startIdx,endIdx + 1);

      //replace maxPalindrome is word is palindrome and longer
      if(word.length > maxLength && checkPalindrome(word)){
        maxPali = word;
        maxLength = word.length;
      }
    }
    }
  }
  console.log(maxPali)
  console.log("katPalindrome count ="+ counter)
  return maxPali;
}

function checkPalindrome(word){
  for(var i = 0; i < Math.floor(word.length/2); i++){
    if(word[i] !== word[word.length - i - 1]){
      return false;
    }
  }
  return true;
}

//The counter ticks every time a loop runs

test = "The discovery of America, the rounding of the Cape, opened up fresh ground for the rising bourgeoisie. The East-Indian and Chinese markets, the colonisation of America, trade with the colonies, the increase in the means of exchange and in commodities generally, gave to commerce, to navigation, to industry, an impulse never before known, and thereby, to the revolutionary element in the tottering feudal society, a rapid development."

test2 = "mom drives a civic like a racecar at night"

test3 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

maxPalindrome(test)
katPalindrome(test)

maxPalindrome(test2)
katPalindrome(test2)

maxPalindrome(test3)
katPalindrome(test3)
