'use strict'

const observer = require('@risingstack/nx-observe')
const secret = {
  observers: Symbol('observers')
}

function observe (node, state) {
  node.$state = observer.observable(state)
  node.$contextState = observer.observable(node.$contextState)

  node.$observe = $observe
  node.$unobserve = $unobserve
}
observe.$name = 'observe'
observe.$require = ['cleanup']
module.exports = observe

function $observe (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('first argument must be a function')
  }
  observer.observe(fn)
  this.$cleanup(() => observer.unobserve(fn))
}

function $unobserve (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('first argument must be a function')
  }
  observer.unobserve(fn)
}
