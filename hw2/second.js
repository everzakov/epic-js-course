var console = {log : debug};

function bindFunction(fn, context, ...args) {
    fn.call(context, ...args);
}

let someObject = {
    name: "Efim",
}

function Say(first) {
    console.log(first + " " + this.name);
}

function calc(a, b) {
    return function(op) {
        if (op == "+") {
            return a + b;
        } else if (op == "-") {
            return a - b;
        } else if (op == "*") {
            return a * b;
        } else {
            return a / b;
        }
    };
}

function curry(func) {
    let arguments = [];
    if (func.length == 0) {
        return func();
    }
    let new_func = function(new_arguments) {
        return function(arg) {
            new_arguments.push(arg);
            if (new_arguments.length == func.length) {
                return func(...new_arguments);
            }
            return new_func(new_arguments);
        }
    }
    return new_func(arguments);
}

function sum2(a, b) {
    return a + b;
}

function sum4(a, b, c, d) {
    return a + b + c + d;
}

function const_func_5() {
    return 5;
}

function const_func(a) {
    return a;
}

let obj = {
  real_value: null,

  get magicProperty() {
    this.real_value = this.real_value + 1;
    return this.real_value;
  },

  set magicProperty(value) {
    this.real_value = value;
    let d = new Date();
    console.log(d.toString() + " " + this.real_value);
  }
};

class Counter {
    constructor(counter) {
        this.counter = counter;
    }

    add(new_value) {
        return new Counter(this.counter + new_value);
    }

    reset() {
        return new Counter(0);
    }

    log() {
        console.log(this.counter);
        return new Counter(this.counter);
    }
}

function someFunction() {
    if (new.target) {
        console.error("can not use with new constructor");
    }
}

function sleep(seconds)
{
    var dateBefore = new Date();
    var dateNow = null;
    do { dateNow = new Date(); }
    while(dateNow - dateBefore < seconds * 1000);
}

function getCounter(number) {
    return new Counter(number);
}

bindFunction(Say, someObject, "Hello,");
bindFunction(Say, someObject, "Bye,");

obj.magicProperty = 5;
console.log(obj.magicProperty);
console.log(obj.magicProperty);
console.log(obj.magicProperty);

console.log(calc(1, 2)("+"));
console.log(calc(1, 2)("-"));
console.log(calc(1, 2)("*"));
console.log(calc(1, 2)("/"));

console.log(curry(sum2)(1)(2))
console.log(curry(sum4)(2)(3)(4)(5))
console.log(curry(const_func_5))
console.log(curry(const_func)(1))

try {
    new someFunction();
    console.log("looks bad");
} catch(e) {
    console.log("looks good");
}

console.log(new Date());
sleep(5);
console.log(new Date());

let counter = getCounter(5);
counter.log().add(4).log().add(3).log(0).reset().log().add(8).log()