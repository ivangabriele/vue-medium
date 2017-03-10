const Vue = require('vue')
const VueMedium = require('../dist/index.umd')

describe('VueMedium', () => {
  it('has a created hook', () => {
    expect(typeof VueMedium.install).toBe('function')
  })
})
