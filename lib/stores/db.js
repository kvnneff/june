import clone from 'component/clone'
import Emitter from 'component/emitter'
import uid from 'matthewmueller/uid'

if (typeof window !== 'undefined') var localStorage = window.localStorage

export default class Store extends Emitter {
  constructor(name) {
    super()
    if (!name) throw new Error('db name required')
    this.name = name
    this.key = 'june-' + this.name
    this.list = this.load()
    this.store()
  }

  // persistence

  load() {
    var data = localStorage ? localStorage.getItem(this.key) : null
    if (!data) return []
    return JSON.parse(data)
  }

  store() {
    this.emit('change')
    if (localStorage) localStorage.setItem(this.key, JSON.stringify(this.list))
  }

  // read

  get(filter) {
    var list = clone(this.list)
    return filter ? list.filter(filter)[0] : list[0]
  }

  all() {
    return this.get()
  }

  // write

  add(model) {
    if (!model) return false
    model.id = uid()
    this.list.push(model)
    this.store()
  }

  remove(id) {
    this.list.splice(id, 1)
    this.store()
  }
}