export function es5(val) {
  var C = function(hello) {
    this.hello = hello
  }
  C.prototype.say = function() {
    return this.hello
  }

  var o = new C(val)
  return o.say()
}

export function es6(val) {
  class C {
    constructor(greeting){
      this.greeting = greeting
    }
    hello(){
      return this.greeting;
    }
  }
  const o = new C("World!")
  return o.hello()
}
