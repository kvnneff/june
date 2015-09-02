import bus from 'component/bus'
import closest from 'component/closest'
import dom from 'dekujs/virtual-element'

function render ({props}) {
  let {seed, visitSeed} = props
  seed.dtg = seed.dtg || ['', '']
  seed.dtm = seed.dtm || ['', '']

  function remove (event) {
    var id = closest(event.target, '.SeedList-rowItem').dataset.id
    bus.emit('seed:remove', id)
  }

  function view (event) {
    var id = event.delegateTarget.dataset.id
    visitSeed(id)
  }

  return dom('tr', {
    class: 'SeedList-rowItem',
    'data-id': seed.id,
    onClick: view
  }, [
    dom('td', seed.common),
    dom('td', seed.variety),
    dom('td', seed.quantity),
    dom('td', seed.dtg[0] + ' - ' + seed.dtg[1]),
    dom('td', seed.dtm[0] + ' - ' + seed.dtm[1]),
    dom('td', {}, [
      dom('span', {
        class: 'Icon Icon--delete',
        onClick: remove
      }, 'Delete')])
  ])
}

export default {render}