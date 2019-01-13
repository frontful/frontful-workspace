import '../views/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import Views from '../views'
import browserConfig from 'frontful-config/browser'
import environment from 'frontful-environment'
import initialize from '../common/initialize'
import {Style} from 'frontful-style'

const {models, resolver} = initialize(<Views />)

environment.coldreload.serializer = () => models.serialize()
environment.coldreload.deserializer = (state) => models.deserialize(state)

resolver.execute().then((View) => {
  ReactDOM[browserConfig.isomorphic ? 'hydrate' : 'render'](
    <Style>
      <View />
    </Style>,
    document.getElementById('app')
  )
})
