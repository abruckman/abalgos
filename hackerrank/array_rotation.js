function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var q = parseInt(n_temp[2]);
    a = readLine().split(' ');
    a = a.map(Number);

    var i
    var shifted
    for (i=0; i<k; i+=1){
        shifted = a.shift()
        a.push(shifted)
    }

    for(var a0 = 0; a0 < q; a0++){
        var m = parseInt(readLine());
        console.log(a[m])
    }


}
