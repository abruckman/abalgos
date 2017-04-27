function getFactors(int){
  var factors = [];
  for(i=2; i <int; i++){
    if (int % i === 0){
      factors.push(i);
    };
  };
  return factors;
}

function getPrimeFactors(int){
  //enclose the array of factors
  var factors = [];
  function getFactors(int){
    //the last prime factor has to be entered separately
    var prime = true;
    //loop up to the int itself and see if it is divisible by anything
    //if it is not it's a prime factor
    for(i=2; i <=Math.sqrt(int); i++){
      //could improve bigO with
      console.log(int +" & "+ i)
      if (int % i === 0){
        console.log("found "+ i)
        factors.push(i)
        //shows that this int was not a prime factor
        prime =false;
        //divide the int by the prime factor and put it through again
        getFactors(int/i)
        //once we found the factor we're done with this loop, we break to save runtime
        break
      };
    };
    //if this int is the last prime factor it will not have been hit
    if (prime){
      console.log(int+ " is left")
      factors.push(int)
    }
    return factors;
  }
  return getFactors(int)
}


getPrimeFactors(18)
