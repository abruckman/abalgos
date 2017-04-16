function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var s = readLine();
        var length = s.length
        //console.log(length)
        var template = "hackerrank".split('')
        template.push('false')
        //console.log(template)
        var i
        var j
        j = 0
        i = 0
        for(i ; i<length; i+=1){
          //console.log(s[i])
          //console.log(template[j])
          if(s[i]===template[j]){
            j +=1
          }
        }
        if ( template[j] === 'false' ){
          console.log("YES")
        }else{
          console.log("NO")
        }
        // your code goes here
    }

}
