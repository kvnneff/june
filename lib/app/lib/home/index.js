import dom from 'dekujs/virtual-element'

function render () {
  return dom('div', {class: 'Home'}, [
    dom('p', {class: 'Home-welcomeText'}, 'Welcome to June!')
  ])
}

export default {render}