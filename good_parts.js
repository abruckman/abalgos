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
function twice1(binary){
  return function(a){
    return binary(a, a);
  };
}
// console.log(twice1(add)(2))

var doubl = twice1(add);
var square = twice2(mul);

function twice2(binary){
  return function(a){
    return curry(binary, a)(a);

  };
}
// console.log(twice2(mul)(2))

function reverse(binary){
  return function(a, b){
    return binary(b, a);
  };
}

var bus = reverse(sub);

// console.log(reverse(sub)(3, 2))

function composeu(binary1, binary2){
  return function(a){
    return binary2(binary1(a));
  };
}

// composeu(doubl, square)(5)

function composeb(f, g){
  return function(a, b, c){
    return g(f(a, b), c);
  };
}

composeb(add, mul)(2, 3, 7);

function limit(binary, count){
  return function(a,b){
    if (count >=1){
      count -= 1;
      return binary(a, b);
    }
    return undefined;
  };
}

lim_add = limit(add, 1);

// console.log(lim_add(1,2));
// console.log(lim_add(3,4));

function from(start){
  return function(){
    var next = start;
    start += 1;
    return next;
  };
}
// var index = from(0);

// console.log(index())
// console.log(index())
// console.log(index())

function to(gen, limit){
  // var val = inc()
  return function(){
    var val = gen();
    if (val < limit){
      return val;
    }else{
      return undefined;
    }
  };
}

// var index = to(from(1), 3)

// console.log(index())
// console.log(index())
// console.log(index())

// function fromTo(min, max){
//   return function(){
//     if (min < max){
//       var last = min
//       min +=1
//       return last
//     }else{
//       return undefined
//     }
//   }
// }

function fromTo(min, max){
  return to(from(min), max);
}

var index = fromTo(0, 3);

// console.log(index())
// console.log(index())
// console.log(index())
// console.log(index())

function element(array, gen){
  // how to add an optional parameter
  // also, gen.typeof === a function
  // 2nd way less likely to fail
  if (gen === undefined){
    gen = fromTo(0, array.length);
  }
  return function(){
    // if they set an array.undefined = to something
    if (index !== undefined){
      return array[gen()];
    }
  };
}

var ele = element(["a", "b", "c", "d"]);

// console.log(ele());
// console.log(ele());
// console.log(ele());
// console.log(ele());
// console.log(ele());
// console.log(ele());

function collect(gen, array){
  return function(){
    val = gen()
    if (val !== undefined){
      array.push(val)
    }
    return val
  }
}

array = []
col = collect(fromTo(0,2), array)

// console.log(col())
// console.log(col())
// console.log(col())
// console.log(col())
// console.log(array)

function filter(gen, condition){
  return function(){
    var value
    do{
      value = gen()
    } while(
      value!== undefined && !condition(value)
    );
    return value
  }
}

var fil = filter(fromTo(0, 4), function third(value){
    return (value % 3) === 0
});

// console.log(fil())
// console.log(fil())
// console.log(fil())

function concat(gen1, gen2){
  return function(){
    var val = gen1();
    if (val !== undefined){
      return val
    }else{
      val = gen2();
      return val
    }
  };
}

// var con = concat(fromTo(0,3), fromTo(0,2));

// console.log(con())
// console.log(con())
// console.log(con())
// console.log(con())
// console.log(con())
// console.log(con())

function gensymf(string){
  var counter = 0
  return function(){
    counter += 1;
    return string.concat(counter);
  }
}

// var geng = gensymf("G"), genh = gensymf("H");
// console.log(geng())
// console.log(genh())
// console.log(geng())
// console.log(genh())

function fibonaccif(a, b){
  var next1 = a
  var next2 = b
  return function(){
    var num = next1
    next1 = next2
    next2 = next2 + num
    return num
  }
}

var fib = fibonaccif(0,1);

// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())
// console.log(fib())

function counter(value){
  return {
    up: function () {
      value += 1;
      return value
    },
    down: function () {
      value -= 1;
      return value;
    }
  };
}

var object = counter(10), up = object.up, down = object.down

console.log(up())
console.log(down())
console.log(down())
console.log(up())
