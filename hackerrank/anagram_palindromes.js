array = input.split("")
freq_hash = {}
array.forEach(function( char ){
  if (freq_hash[char] ){
    freq_hash[char] += 1
  }else{
    freq_hash[char] = 1
  }
})
odd_count= 0
Object.keys(freq_hash).forEach(function(key){
    if (freq_hash[key] % 2 === 1){
        odd_count += 1
    }

})
if (odd_count > 1){
  console.log("NO")
  return "NO"
}else{
  console.log("YES")
  return "YES"
}
