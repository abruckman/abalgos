function processData(input) {
    //Enter your code here
  input = input.split("\n")
  var array =[]
  input.forEach(function(ele){array.push( ele.split(" "))})
  //console.log(array)
  var queue = []
  array.forEach(function(ele){
    // console.log(ele)
    switch (ele[0]){
      case "1":
        queue.push(ele[1])
        break;
      case "2":
        queue.shift()
        break;
      case "3":
        console.log(queue[0]);
        break;
      default:
        ele;
    }
    // console.log(queue)
  })
} 
