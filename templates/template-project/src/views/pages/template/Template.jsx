import React from 'react'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'
import List from '../../../models/List'
import Item from '../../components/item/Item'

@resolver.define(({models}) => ({
  list: models.global(List),
}))
@resolver((resolve) => {
  resolve(({list}) => ({
    items: list.resolve().then((list) => {
      return resolve.value(list.items.map((item) => {
        return resolve.value({
          key: item.id,
          View: <Item item={item} />,
        })
      }))
    }),
  }))
})
@style(require('./Template.style'))
class Template extends React.PureComponent {
  render() {
    const {style, items} = this.props
    return (
      <div className={style.css('template')}>
        <h3>{'Template'}</h3>
        <div>
          {items.map((item) => (
            <item.View key={item.key} />
          ))}
        </div>
      </div>
    )
  }
}

export default Template
