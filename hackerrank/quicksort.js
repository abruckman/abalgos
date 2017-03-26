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
    console.log(answer.join(" "))
    return answer

}
