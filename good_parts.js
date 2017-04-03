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

function revocable(binary){
  return {
    invoke: function (a, b) {
      if (binary !== undefined){
        return binary(a, b)
      }else{
        return undefined
      }
    },
    revoke: function(){
      binary = undefined
    }
  }
}
// var rev = revocable(add), add_rev = rev.invoke;
// console.log(add_rev(3,4));
// rev.revoke();
// console.log(add_rev(5,7))

function m (value,source){
  return {
    value: value,
    source:(typeof source === 'string')
      ? source
      :String(value)
  }
}



function addm (m1, m2){
  return m (m1.value + m2.value,
  "(" + m1.source + "+" + m2.source + ")"
  )
}

// console.log(addm(m(3), m(4)))

function liftm(binary, symbol){
  return function(a, b){
    if (typeof a === 'number'){
      a = m(a)
    }
    if (typeof b === 'number'){
      b = m(b)
    }
    return m (
      binary(a.value, b.value),
      "(" + a.source + symbol + b.source + ")"
      )
  }
}

// console.log(JSON.stringify(liftm(mul, "*")(m(3), m(4))))
// console.log(JSON.stringify(liftm(mul, "*")(3, m(4))))

// simple array expressions

var sae = [mul, 5, 11]

function exp(arg){
  if (Array.isArray(arg) ){
  return arg[0](exp(arg[1]), exp(arg[2]))
  }else{
    return arg
  }
}

// console.log(exp(sae))
// console.log(exp(42))

var nae = [
  Math.sqrt, [
    add,
    [square, 3],
    [square, 4]
    ]
  ];
// console.log(exp(nae))

// recursion is rad for nested data structures

function addg(first){
  function more(next){
    if (next === undefined){
      return first;
    }
    first += next;
    return more;
  }
  if (first !== undefined){
    return more;
  }

}

// console.log(addg(2)(3)())

// retursion: a function that returns itself

function liftg( binary ){
  return function ( first ){
    function more( next ){
      if (next === undefined){
        return first;
      }
      first =binary(first, next);
      return more;
    };
    if (first !== undefined){
      return more;
    }
  }
}

function arrayg(first){
  var array =[];
  function more(next){
    if (next === undefined){
      return array;
    }
    array.push(next);
    return more;
  }
  return more(first)

}

// console.log(arrayg())
// console.log(arrayg(3)(4)(5)())

function continuize(func){
  return function(callback, val){
    return callback(func(val))
  }
}

// sqrtc = continuize(Math.sqrt);
// sqrtc(alert, 81)

// function constructor(init){
//   var that = other_constructor(init),
//     member,
//     method = function(){
//       // init, member, method
//     };

//   that.method = method;
//   return that
// }

 function vector(){
   var array =[]

   return {
     get: function get(i){
       return array[i];
     },
     store: function store(i,v){
       array[+i] = v;
     },
     // +operand tries to coerce into
     append: function append(v){
       array.push(v);
     }
   };
 }

myvector = vector();
myvector.append(7);
myvector.store(1, 8);
console.log(myvector.get(0))
console.log(myvector.get(1))
console.log(myvector)

function returnThis(){
  stash = this
}
var stash;

myvector.store("push",returnThis)
console.log(myvector.append(9))
console.log(stash)

//pubsub

function pubsub(){
  var subscribers = []
  return Object.freeze({
    subscribe: function(subscriber){
      subscribers.push(subscriber)
    },
    publish: function(publication){
      subscribers.forEach(function(s){

        setTimeout(function(){
          s(publication)
        }, 0);

      })
    }
  })
}

// attacks
// my_pubsub.subscribe();
// use the try catcher

// my_pubsub.publish = undefined
// freeze your object

//erase the subscriber array
my_pubsub.subscribe(function (){
  this.length = 0
})
// use a forEach instead of for loop, doesn't give contents of subscribers access to array though this


// makes your publication jump the line
my_pubsub.subscribe(limit(function(){
  my_pubsub.publish("out of order");
}, 1))

// do it async, now it will wait out before recursing (once) because of limit
