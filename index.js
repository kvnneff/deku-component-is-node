/**
 * Returns `true` if `node` is a valid Deku node.  If `type` is specified,
 * it will ensure that type is strictly equal. (whether that is a `Component`
 * or a `String` element name)
 * @param  {DekuElement}  node The virtual node to check.
 * @param  {String|Object}  [type] If given, the type of node this must be.
 * @return {Boolean}
 */
function isNode (node, type) {
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

module.exports = isNode
