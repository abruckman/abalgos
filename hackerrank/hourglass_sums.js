function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    var thei = []
    var sum
    var max
    for (var i =1; i <5; i++ ){
      for (var j = 1; j <5; j++){
        thei = [arr[i-1][j-1], arr[i-1][j], arr[i-1][j+1], arr[i][j], arr[i+1][j-1], arr[i+1][j], arr[i+1][j+1]];
           sum = thei.reduce(add, 0);

           if (max === undefined || sum > max)
           {
               max= sum
           }
        }
    }
    console.log(max)
}
function add(a, b) {
    return a + b;
}
