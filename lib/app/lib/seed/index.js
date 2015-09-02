import {Grid, Cell} from 'dominicbarnes/deku-grid'
import dom from 'dekujs/virtual-element'

function render ({props}) {
  let {seed} = props
  let {
    springInsideWeeks,
    springOutsideWeeks,
    transplantWeeks,
    fallWeeks,
    springInsideWhen,
    springOutsideWhen,
    transplantWhen,
    fallWhen} = seed
  let springInside = null
  let springOutside = null
  let transplant = null
  let fall = null

  if (springInsideWeeks[0] > 0 ||springInsideWeeks > 0) {
    springInside = dom('div', {class: 'Seed-plantDate'}, [
      'Plant ' + springInsideWeeks[0] + ' - ' + springInsideWeeks[1] + ' weeks ' + springInsideWhen + ' last frost date'
    ])
  }

  if (transplantWeeks[0] > 0 ||transplantWeeks > 0) {
    transplant = dom('div', {clas: 'Seed-plantDate'}, [
      'Transplant ' + transplantWeeks[0] + ' - ' + transplantWeeks[1] + ' weeks ' + transplantWhen + ' last frost date'
    ])
  }

  if (springOutsideWeeks[0] > 0 ||springOutsideWeeks > 0) {
    springOutside = dom('div', {clas: 'Seed-plantDate'}, [
      'Plant ' + springOutsideWeeks[0] + ' - ' + springOutsideWeeks[1] + ' weeks ' + springOutsideWhen + ' last frost date'
    ])
  }

  if (fallWeeks[0] > 0 ||fallWeeks > 0) {
    fall = dom('div', {clas: 'Seed-plantDate'}, [
      'Plant ' + fallWeeks[0] + ' - ' + fallWeeks[1] + ' weeks ' + fallWhen + ' first fall frost date'
    ])
  }

  return dom('div', {class: 'Seed'}, [
    dom('h1', {class: 'Seed-common'}, seed.common + ', ' + seed.variety),
    dom('h2', {class: 'Seed-latinName'}, seed.latinName),
    dom(Grid, {gutter: true}, [
      dom(Cell, {size: '1of4'}, [
        dom('h4', {class: 'Seed-propertyLabel'}, 'Days to Germinate'),
        seed.dtg[0] + ' - ' + seed.dtg[1]
      ]),
      dom(Cell, {size: '1of4'}, [
        dom('h4', {class: 'Seed-propertyLabel'}, 'Days to Maturity'),
        seed.dtm[0] + ' - ' + seed.dtm[1]
      ]),
      dom(Cell, {size: '1of4'}, [
        dom('h4', {class: 'Seed-propertyLabel'}, 'Quantity'),
        seed.quantity
      ]),
      dom(Cell, {size: '1of4'}, [
        dom('h4', {class: 'Seed-propertyLabel'}, 'Nominal Expiration'),
        seed.expire
      ])
    ]),
    springInside,
    transplant,
    springOutside,
    fall,
    dom('div', {class: 'Seed-notes'}, seed.notes)
  ])
}

export default {render}