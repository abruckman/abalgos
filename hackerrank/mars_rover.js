function main() {
    var S = readLine();
    var count = 0
    var chars = S.split("")
    chars.forEach(function(char, i){
      if(i%3=== 0 && char !== "S"){
        count ++
      }else if(i%3 ===1 && char !== "O"){
        count ++
      }else if(i%3 === 2 && char !=="S"){
        count ++
      }
    })
    console.log(count)
}
