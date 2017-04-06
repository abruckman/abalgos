function processData(input) {
    //Enter your code here
    input = input.split('\n')
    //console.log(input)
    var field_size = Number(input[0])
    //console.log(field_size)
    var fields = input.slice(1, field_size + 1)
    //console.log(fields)
    var targets = input.slice(field_size+2)
    //console.log(targets)
    var counter
    targets.forEach(function(target){
        counter = 0
        fields.forEach(function(field){
            if (target === field){
                counter += 1
            }
        })
        console.log(counter)
    })

} 
