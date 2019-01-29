import React from 'react'
import style from './Dashboard.module.scss'

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div className={style.dashboard}>
        <h3>{'Dashboard'}</h3>
      </div>
    )
  }
}

export default Dashboard
