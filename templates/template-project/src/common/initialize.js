import getContext from './getContext'
import {Resolver} from 'frontful-resolver'

export default function initialize(element, options) {
  const models = getContext(options)
  const resolver = new Resolver(element, {models})
  return {
    models,
    resolver,
  }
}
