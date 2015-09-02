/*global describe, it*/
import bus from 'component/bus'
import Mock from 'dekujs/component-mock'
import assert from '/test/assertions'
import {delay, mount} from '/test/util'
import Form from '/lib/app/lib/form'

describe('Form', function () {
  var mock = Mock(Form)

  it('should return a form element', function () {
    var node = mock.render()
    assert.node.isNode(node, 'div')
  })
})