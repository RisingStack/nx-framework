'use strict'

const component = require('../core')
const middlewares = require('../middlewares')
const filters = require('../filters')
const limiters = require('../limiters')

module.exports = function app (config) {
  config = Object.assign({root: true}, config)

  return component(config)
    .useOnContent(middlewares.cleanup)
    .useOnContent(middlewares.observe)
    .useOnContent(middlewares.code)
    .useOnContent(middlewares.expression)
    .useOnContent(middlewares.interpolate)
    .useOnContent(middlewares.attributes)
    .useOnContent(middlewares.style)
    .useOnContent(middlewares.animate)
    .useOnContent(middlewares.ref)
    .useOnContent(middlewares.content)
    .useOnContent(middlewares.flow)
    .useOnContent(middlewares.bindable)
    .useOnContent(middlewares.bind)
    .useOnContent(middlewares.events)
}

for (let name in filters) {
  nx.filter(name, filters[name])
}

for (let name in limiters) {
  nx.limiter(name, limiters[name])
}
