export function es5(n) {
    function counter(n) {
        var cnt = 0

        function next() {
            if (cnt < n) {
                return cnt += 1
            }
        }

        return next
    }

    return counter(n)
}

// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/function*
export function es6(n) {
<<<<<<< HEAD
    function* counter(n) {
        var index = 0
        while (index < n) {
            yield index += 1
        }
    }
    var gen = counter(n)
=======
  function* counter(n) {
    let cnt = 0
    while(cnt++ < n) {
      yield cnt
    }
  }
  return counter(n)
>>>>>>> upstr/master
}
