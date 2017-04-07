function processData(input) {
    //Enter your code here
    array = input.split('\n')[1].split(' ').map(Number)
    array = quicksort(array)

    middle = array[array.length/2 - 0.5]
    console.log(middle)
    // console.log(array)
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
    console.log(answer.join(" "))
    return answer

}
