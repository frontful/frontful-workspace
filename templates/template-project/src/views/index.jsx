import style from './index.style'

import Template from './pages/template/Template'
import React from 'react'
import {Router} from 'frontful-router'
import {resolver} from 'frontful-resolver'

@resolver((resolve) => {
  resolve(() => ({
    View: (
      <Router>
        <Template pattern="/" />
      </Router>
    )
  }))
})
@style
class Index extends React.PureComponent {
  render() {
    const {View} = this.props
    return <View />
  }
}

export default Index
