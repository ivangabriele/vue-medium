import Vue from 'vue'
import VueMedium from '../src'

describe('VueMedium', () => {
  it('has a created hook', () => {
    expect(typeof VueMedium.install).toBe('function')
  })
})
