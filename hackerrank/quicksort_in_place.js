function processData(input) {
    //Enter your code here
    array = input.split('\n')[1].split(" ").map(Number)
    pivot_in_place(array, 0, array.length-1)
}

function pivot_in_place(array, first, last){
    if (first >= last ){return first}
    var j = first
    var i = first
    var pivot = array[last]
    for (j; j <= last; j++){
        if (array[j] <= pivot){
            var ele = array.splice(j, 1)[0]
            array.splice(i, 0, ele)
            i += 1
        }
    }
    console.log(array.join(" "))
    console.log(first)
    console.log(i-1)

    return i
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
