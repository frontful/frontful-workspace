import Api from './Api'
import Item from './Item'
import {model, formatter} from 'frontful-model'

@model.define(({models}) => ({
  api: models.global(Api),
}))
@model({
  items: formatter.array(formatter.model(Item)),
})
class Model {
  resolve() {
    return this.api.resolve('/list').then((items) => {
      this.items = items
      return this
    })
  }
}

export default Model
