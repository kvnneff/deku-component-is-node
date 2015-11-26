# deku-is-node [![Build Status](https://travis-ci.org/kvnneff/deku-is-node.svg?branch=master)](https://travis-ci.org/kvnneff/deku-is-node)

Determine if an object is a valid [Deku](https://github.com/dekujs/deku) node.  Useful for testing.

## Example

```js
import isNode from 'deku-is-node'
import element from 'virtual-element'
import Mock from 'component-mock'

const Component = {
  render: function () {
    element('div', [
      element('span', 'Hello World!')
    ])
  }
}

const mock = Mock(component)
const node = mock.render()

isNode(node) //=> returns `true`
isNode(node, 'div') //=> returns `true`
isNode(node, 'span') //=> returns `false`
```

## API

### isNode(node, [type])

  Returns `true` if `node` is a valid Deku node.  If `type` is specified,
  it will ensure that type is strictly equal. (whether that is a `Component`
  or a `String` element name)
