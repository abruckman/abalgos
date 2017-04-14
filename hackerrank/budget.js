function processData(input) {
    //Enter your code here
  var budget= input.split('\n')[0].split(' ')[1]
  var catalog = input.split('\n')[1].split(' ').map(Number)
  catalog = quicksort(catalog)
  // console.log(catalog)
  var sum = 0
  var i = 0
  while( sum <= budget && i <= catalog.length ){
    //console.log(sum)
    //console.log(budget)
    sum = sum + catalog[i]
    i += 1
  }
  console.log(i - 1)

}

function quicksort(arr) {
    if (arr.length <= 1){return(arr)}
    var pivot = arr.shift()

    var left = []
    var right = []
    var center = []
    arr.forEach(function(ele){
        if(ele < pivot){
            left.push(ele)
        }else if(ele===pivot){
            center.push(ele)
        }else if(ele>pivot){
            right.push(ele)
        }
    })
    center.push(pivot)
    answer = quicksort(left).concat(center.concat(quicksort(right)))
    // console.log(answer.join(" "))
    return answer

}
