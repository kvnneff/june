import bus from 'component/bus'
import clone from 'component/clone'
import db from './db'

export default function plugin () {
  return function (app) {
    let seeds = new db('seeds')
    app.set('seeds', seeds.list)
    app.set('seedsDB', seeds)

    seeds.on('change', function () {
      app.set('seeds', seeds.get())
    })

    bus.on('seeds:add', function (seed) {
      seeds.add(seed)
    })

    bus.on('seed:remove', function (id) {
      seeds.remove(id)
    })
  }
}