import React from 'react'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'

@resolver((resolve) => {
  resolve(({item}) => ({
    item: item,
    id: item.id,
    keyValue: item.key,
    value: item.value,
  }))
})
@style(require('./Item.style'))
class Item extends React.PureComponent {
  render() {
    const {style, id, keyValue, value, item} = this.props
    return (
      <div className={style.css('item')}>
        <div>{id}</div>
        <input type="text" value={keyValue} onChange={({target}) => {item.key = target.value}}/>
        <input type="text" value={value} onChange={({target}) => {item.value = target.value}}/>
      </div>
    )
  }
}

export default Item
