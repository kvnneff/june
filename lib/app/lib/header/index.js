import dom from 'dekujs/virtual-element'

function render ({props}) {

  let createButton = dom('Button', {
    class: 'Header-button Button',
    onClick: props.visitNew
  }, 'Create')

  let settingsButton = dom('Button', {
    class: 'Header-button Button',
    onClick: props.visitSettings
  }, 'Settings')

  return dom('div', {class: 'Header'}, [
    dom('h1', {class: 'Header-title'}, [
      dom('a', {href: '/'}, 'June')
    ]),
    dom('span', {class: 'Header-controls'}, [
      settingsButton,
      createButton
    ])
  ])
}

export default {render}