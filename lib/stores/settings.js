import bus from 'component/bus'
import clone from 'component/clone'
import db from './db'

export default function plugin () {
  return function (app) {
    let settings = new db('settings')
    app.set('settings', settings.list)

    settings.on('change', function () {
      app.set('settings', settings.get())
    })

    bus.on('settings:add', function (setting) {
      settings.add(setting)
    })

    bus.on('setting:remove', function (id) {
      settings.remove(id)
    })
  }
}