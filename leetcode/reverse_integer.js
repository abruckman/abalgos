var reverse = function(x) {
    var solution = 0
    var chars
    try {
        chars = String(x).split('')
        if (chars[0] === '-'){
            chars.shift()
            solution = Number("-" + chars.reverse().join(''))
        }else{
            solution = Number(chars.reverse().join(''))
        }
    }catch(e) {
        solution = 0
    }
    if (Math.abs(solution) < 2147483647){
        return solution
    }else{
        return 0
    }
};
