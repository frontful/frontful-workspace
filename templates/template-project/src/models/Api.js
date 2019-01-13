import browserConfig from 'frontful-config/browser'
import {dao} from 'frontful-dao'

@dao(() => ({
  url: `${browserConfig.url.self}/api`,
}))
class Api {
}

export default Api
