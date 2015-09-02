import bus from 'component/bus'
import dom from 'dekujs/virtual-element'
import {tree} from 'dekujs/deku'
import {Form, InputField} from 'dominicbarnes/deku-forms'

let lastSpringFrost = dom(InputField, {
  name: 'frostDate[]',
  type: 'date',
  label: 'Last Spring Frost Date'
})

let firstFallFrost = dom(InputField, {
  name: 'frostDate[]',
  type: 'date',
  label: 'First Fall Frost Date'
})

function render () {
  function submit (data, form) {
    bus.emit('settings:add', data)
  }

  return dom(Form, {class: 'SettingsForm Form', onSubmit: submit}, [
    lastSpringFrost,
    firstFallFrost,
    dom('button', {
      class: 'SettingsForm-submitButton Button',
      type: 'submit'
    }, 'Submit')
  ])
}

export default {render}
