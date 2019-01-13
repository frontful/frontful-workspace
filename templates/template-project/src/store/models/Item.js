import {State} from 'frontful-store-sql'
import store from '../store'

export default class Item extends State {
  constructor(state) {
    super({
      key: null,
      value: null,
      ...state,
    })
  }

  async save(update) {
    super.save(update)
    const state = this.toJS()
    return store.connection.query(`
      UPDATE list
      SET [key] = :key, value = :value
      WHERE id = :id
      IF @@ROWCOUNT = 0
      INSERT INTO list
      ([key], value)
      OUTPUT Inserted.id
      VALUES
      (:key, :value)
    `, {
      replacements: state,
      type: store.connection.QueryTypes.SELECT,
    }).then((inserted) => {
      if (inserted.length > 0 && inserted[0].id) {
        this.id = inserted[0].id
      }
    })
  }
}
