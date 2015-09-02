import dom from 'dekujs/virtual-element'
import SeedItem from './lib/seed-item'

function render ({props}) {
  let {seeds, visitNew, visitSeed} = props
  let children = []
  let table = null

  if (seeds.length) {
    children = seeds.map(function (seed) {
      return dom(SeedItem, {seed, visitSeed})
    })
  }

  if (children.length) {
    table = dom('table', {class: 'SeedList-table'}, [
      dom('thead', {class: 'SeedList-tableHead'}, [
        dom('tr', {class: 'SeedList-tableRow'}), [
          dom('th', 'Common Name'),
          dom('th', 'Variety'),
          dom('th', 'Quantity'),
          dom('th', 'DtM'),
          dom('th', 'DtG'),
          dom('th', '')
        ]
      ]),
      dom('tbody', {class: 'SeedList-tableBody'}, [
        children
      ])
    ])
  } else {
    table = dom('div', {
      class: 'SeedList-emptyContainer'
    }, [
      dom('p', {class: 'SeedList-emptyText'}, 'There are currently no seeds in your inventory.'),
      dom('button', {
        class: 'SeedList-emptyButton Button',
        onClick: visitNew
      }, 'Add to Inventory')
    ])
  }

  return dom('div', {class: 'SeedList'}, [
    table
  ])
}

export default {render}