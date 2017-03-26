function identity(x){
  return x
}

function add(a, b){
  return a + b
}

function sub(a,b){
  return a - b
}

function mul(a, b){
  return a * b
}

function identityf(x){
  return function(){
    return x;
  }
}

function addf(a){
  return function (b){
    return a + b
  }
}

function liftf(binary){
  return function(a){
    return function (b){
      return binary(a,b);
    };
  };
}

function curry(binary, val){
  return function(b){
    return binary(val, b);
  };
}

function curryBetter(binary, first){
  return liftf(binary) (first)
}

inc = curry(add, 1)
console.log(inc(5))

inc2 = liftf(add)(1)
console.log(inc2(5))

inc3 = addf(1)
console.log(inc3(5))

// curryBetter(mul, 3) (4)
