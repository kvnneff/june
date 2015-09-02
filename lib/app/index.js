import {tree} from 'dekujs/deku'
import dom from 'dekujs/virtual-element'
import bus from 'component/bus'
import List from './lib/list'
import Header from './lib/header'
import Settings from './lib/settings'
import Form from './lib/form'
import Seed from './lib/seed'

var propTypes = {
  route: {source: 'currentRoute'},
  seeds: {source: 'seeds'},
  visitNew: {source: 'visitNew'},
  visitSettings: {source: 'visitSettings'},
  visitHome: {source: 'visitHome'},
  visitSeed: {source: 'visitSeed'}
}

function render ({props}) {
  let route = props.route
  let view = 'div'
  let viewProps = {}
  let headerProps = {}

  headerProps = {
    visitNew: props.visitNew,
    visitSettings: props.visitSettings
  }

  if (route && route.name === 'list') {
    view = List

    viewProps = {
      seeds: props.seeds,
      visitNew: props.visitNew,
      visitSeed: props.visitSeed
    }
  }

  if (route && route.name === 'new') {
    view = Form
    viewProps = {
      visitHome: props.visitHome
    }
  }

  if (route && route.name === 'settings') {
    view = Settings
    viewProps = {}
  }

  if (route && route.name === 'seed') {
    view = Seed
    viewProps = {
      seed: route.data
    }
  }

  return dom('div', {class: 'App-content'}, [
    dom(Header, headerProps),
    dom('div', {class: 'Page-content'}, [
      dom(view, viewProps)
    ])
  ])
}

export default {render, propTypes}