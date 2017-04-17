function processData(input) {
    //Enter your code here
  var toys = input.split("\n")[1].split(' ').map(Number);
  //find min
  var val
  var count = 0
  var max = Math.max.apply(null, toys)
  //console.log(max)
  while (toys.length >0){
    //console.log(ele)
    //console.log(!isNaN(ele))

      val = Math.min.apply(null, toys)
      //console.log(val)
      toys.forEach(function(toy, index){
        if ( val <= toy && val+4 >= toy){
          //console.log(toy + " " + val)
          toys[index] = "taken"
        }
      })
      toys = toys.filter(function(value){
        return !isNaN(value)
      })
      //console.log(val)
      count += 1


  }
  console.log(count)
}
