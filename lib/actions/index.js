import Router from 'ianstormtaylor/router'

/**
 * Expose `actions`
 */

export default actions

/**
 * Define functions for `app`
 */

function actions (app) {
  init()

  function init () {
    app.set('visitList', visitList)
    app.set('visitHome', visitHome)
    app.set('visitNew', visitNew)
    app.set('visitSettings', visitSettings)
    app.set('visitSeed', visitSeed)
  }

  function visitList () {
    Router.go('/')
  }

  function visitHome () {
    Router.go('/')
  }

  function visitNew () {
    Router.go('/new')
  }

  function visitSeed (id) {
    Router.go('/seed/' + id)
  }

  function visitSettings () {
    Router.go('/settings')
  }
}