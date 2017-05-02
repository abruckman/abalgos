function main() {
  var n = parseInt(readLine());
  var s = readLine();
  var k = parseInt(readLine());
  letters = s.split("")
  var letters_encoded = []
  var encoded
  letters.forEach(function(letter){
    encoded = letter.charCodeAt(0)
    for(i = 0; i < k; i++){
      encoded = rotate(encoded)
    }
    letters_encoded.push(String.fromCharCode(encoded))
  })
  console.log(letters_encoded.join(""))
}
function rotate(int){
   if (97<= int && int <122 ) {
     int += 1
   }else if(int === 122){
     int = 97
   }else if(65 <= int && int <90 ){
     int += 1
   }else if(int === 90){
     int = 65
   }
  return int
}
