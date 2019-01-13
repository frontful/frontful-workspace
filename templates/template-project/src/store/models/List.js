import Item from './Item'
import store from '../store'

export default class List {
  filter({query} = {}) {
    const replacements = []
    return store.connection.query(`
      SELECT id, [key], value
      FROM list
      WHERE ${store.createExpression(query, replacements).sql};
    `, {
      replacements: replacements,
      type: store.connection.QueryTypes.SELECT,
    }).then((list) => {
      return list.map((item) => {
        return new Item(item)
      })
    })
  }

  delete(id) {
    return store.connection.query(`
      DELETE
      FROM list
      WHERE list.id = :id
    `, {
      replacements: {id},
      type: store.connection.QueryTypes.DELETE,
    }).then(() => {
      return undefined
    })
  }
}
