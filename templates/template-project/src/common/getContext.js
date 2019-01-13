import {Models} from 'frontful-model'

export default function modelContextFactory(options) {
  const {req, res} = options || {}
  return new Models({
    config: {
      'frontful-router': {req, res},
    },
  })
}
