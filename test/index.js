/*global describe, it*/

var assert = require('assert')
var isNode = require('../')
var dom = require('virtual-element')
var Mock = require('component-mock')

var Component = {
  render: function () {
    return dom('div')
  }
}

describe('isNode(node, type)', function () {
  it('returns true if given a valid node', function () {
    var mock = Mock(Component)
    var node = mock.render()
    assert(isNode(node))
  })
  it('returns true if given a valid node and matching type', function () {
    var mock = Mock(Component)
    var node = mock.render()
    assert(isNode(node, 'div'))
  })
  it('returns false if given a valid node and a clashing type', function () {
    var mock = Mock(Component)
    var node = mock.render()
    assert(!isNode(node, 'span'))
  })
  it('returns false if given node is missing property `attributes`', function () {
    var mock = Mock(Component)
    var node = mock.render()
    delete node.attributes
    assert(!isNode(node))
  })
  it('returns false if given node is missing property `children`', function () {
    var mock = Mock(Component)
    var node = mock.render()
    delete node.children
    assert(!isNode(node))
  })
  it('returns false if given node is missing property `type`', function () {
    var mock = Mock(Component)
    var node = mock.render()
    delete node.type
    assert(!isNode(node))
  })
})
