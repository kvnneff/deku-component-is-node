module.exports = function (node, type) {
  var isNode = true
  var requiredProps = [
    'attributes',
    'children',
    'type'
  ]

  requiredProps.some(function (prop) {
    if (!node[prop]) {
      isNode = false
      return true
    }
  })

  if (type && isNode) return node.type === type
  return isNode
}
