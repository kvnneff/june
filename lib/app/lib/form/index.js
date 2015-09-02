import bus from 'component/bus'
import dom from 'dekujs/virtual-element'
import {tree} from 'dekujs/deku'
import {Form, InputField, TextField, SelectField} from 'dominicbarnes/deku-forms'

let common = dom(InputField, {
  name: 'common',
  label: 'Common Name'
})

let latinName = dom(InputField, {
  name: 'latinName',
  label: 'Latin Name'
})

let variety = dom(InputField, {
  name: 'variety',
  label: 'Variety'
})

let quantity = dom(InputField, {
  name: 'quantity',
  type: 'number',
  label: 'Quantity'
})

let dtgFrom = dom(InputField, {
  name: 'dtg[]',
  type: 'number',
  label: 'Days-to-germinate'
})

let dtgTo = dom(InputField, {
  name: 'dtg[]',
  type: 'number'
})

let dtmFrom = dom(InputField, {
  name: 'dtm[]',
  type: 'number',
  label: 'Days-to-maturity'
})

let dtmTo = dom(InputField, {
  name: 'dtm[]',
  type: 'number'
})

let life = dom(InputField, {
  name: 'life',
  label: 'Seed life'
})

let packYear = dom(InputField, {
  name: 'packYear',
  label: 'Pack Year',
  type: 'date'
})

let source = dom(InputField, {
  name: 'source',
  label: 'Source'
})

let notes = dom(TextField, {
  name: 'notes',
  label: 'Notes',
  multiline: true
})

let springInsideWeeksFrom = dom(InputField, {
  name: 'springInsideWeeks[]',
  label: 'Spring Inside',
  type: 'number'
})

let springInsideWeeksTo = dom(InputField, {
  name: 'springInsideWeeks[]',
  type: 'number'
})

let springInsideWhen = dom(SelectField, {
  name: 'springInsideWhen',
  options: ['before', 'after'],
  value: 'before'
})

let transplantWeeksFrom = dom(InputField, {
  name: 'transplantWeeks[]',
  label: 'Transplant',
  type: 'number'
})

let transplantWeeksTo = dom(InputField, {
  name: 'transplantWeeks[]',
  type: 'number'
})

let transplantWhen = dom(SelectField, {
  name: 'transplantWhen',
  options: ['before', 'after'],
  value: 'before'
})

let springOutsideWeeksFrom = dom(InputField, {
  name: 'springOutsideWeeks[]',
  label: 'Spring Outside',
  type: 'number'
})

let springOutsideWeeksTo = dom(InputField, {
  name: 'springOutsideWeeks[]',
  type: 'number'
})

let springOutsideWhen = dom(SelectField, {
  name: 'springOutsideWhen',
  options: ['before', 'after'],
  value: 'before'
})

let fallWeeksFrom = dom(InputField, {
  name: 'fallWeeks[]',
  label: 'Fall',
  type: 'number'
})

let fallWeeksTo = dom(InputField, {
  name: 'fallWeeks[]',
  type: 'number'
})

let fallWhen = dom(SelectField, {
  name: 'fallWhen',
  options: ['before', 'after'],
  value: 'before'
})



function render ({props}) {
  function submit (data, form) {
    bus.emit('seeds:add', data)
    data.fallWeeks[0] = parseInt(data.fallWeeks[0])
    data.fallWeeks[1] = parseInt(data.fallWeeks[1])
    data.springInsideWeeks[0] = parseInt(data.springInsideWeeks[0])
    data.springInsideWeeks[1] = parseInt(data.springInsideWeeks[1])
    data.springOutsideWeeks[0] = parseInt(data.springOutsideWeeks[0])
    data.springOutsideWeeks[1] = parseInt(data.springOutsideWeeks[1])
    data.transplantWeeks[0] = parseInt(data.transplantWeeks[0])
    data.transplantWeeks[1] = parseInt(data.transplantWeeks[1])
    props.visitHome()
  }

  return dom('div', {class: 'SeedForm'}, [
    dom(Form, {onSubmit: submit}, [
      common,
      latinName,
      variety,
      quantity,
      dom('div', {class: 'Form-group'}, [
        dtgFrom,
        ' - ',
        dtgTo,
      ]),
      dom('div', {class: 'Form-group'}, [
        dtmFrom,
        ' - ',
        dtmTo,
      ]),
      dom('div', {class: 'Form-group'}, [
        springInsideWeeksFrom,
        ' to ',
        springInsideWeeksTo,
        ' weeks ',
        springInsideWhen,
        ' frost date'
      ]),
      dom('div', {class: 'Form-group'}, [
        transplantWeeksFrom,
        ' to ',
        transplantWeeksTo,
        ' weeks ',
        transplantWhen,
        ' frost date'
      ]),
      dom('div', {class: 'Form-group'}, [
        springOutsideWeeksFrom,
        ' to ',
        springOutsideWeeksTo,
        ' weeks ',
        springOutsideWhen,
        ' frost date'
      ]),
      dom('div', {class: 'Form-group'}, [
        fallWeeksFrom,
        ' to ',
        fallWeeksTo,
        ' weeks ',
        fallWhen,
        ' frost date'
      ]),
      life,
      packYear,
      source,
      notes,
      dom('button', {
        class: 'SeedForm-submitButton Button',
        type: 'submit'
      }, 'Submit')
    ])
  ])
}

export default {render}
