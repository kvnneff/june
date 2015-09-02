import Router from 'ianstormtaylor/router'
import Store from '../stores/db'

let SeedStore = new Store('seeds')

/**
 * Expose `routes
 */

export default routes

/**
 * Define routes
 */

function routes (app) {
  init()

  function init() {
    var router = new Router()
    router
      .on('/', list)
      .on('/new', newSeed)
      .on('/settings', settings)
      .on('/seed/:id', seed)
      .listen()
      .start()

    Router.go('/')
  }

  function list () {
    app.set('currentRoute', {name: 'list'})
  }

  function newSeed () {
    app.set('currentRoute', {name: 'new'})
  }

  function settings () {
    app.set('currentRoute', {name: 'settings'})
  }

  function seed (context) {
    let id = context.params.id
    let seed = SeedStore.get(function (model) {
      return model.id === id
    })
    app.set('currentRoute', {name: 'seed', data: seed})
  }
}