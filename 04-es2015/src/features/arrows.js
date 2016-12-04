export function es5() {
  var o = {
    list: [1, 2, 3, 4, 5],
    result: 0,
    sum: function() {
      var that = this
      this.list.forEach(function(val) {
        that.result += val
      })
    }
  }

  o.sum()

  return o
}

export function es6() {
  var o = {
    list: [1, 2, 3, 4, 5],
    result: 0,
    sum: () => {
      o.result = o.list.reduce((sum, x) => sum + x)
    }
  }

  o.sum()

  return o
}
