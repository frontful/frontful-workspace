import Store from 'frontful-store-sql/common/Store'
import config from 'frontful-config/server'

const store = new Store('template-project', config.connection['template-project'])

export default store
