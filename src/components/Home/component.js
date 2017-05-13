import React from 'react'
import { Button } from 'antd'
import './assets/style.css'
import DataHome from '../DataHome/index'
import Setting from '../Setting/index'

const Home = () => (
  <div className="main-home">
    <div className="home-side-menu">
      <div className="home-menu">
        <div className="home-logo">logo</div>
        Menu list
      </div>
      <div className="home-foot">foot</div>
    </div>
    <div className="side-content">
      <div className="home-head">
        <Button className="desbord" ghost>Desbord</Button>
        <Setting />
          Menu bar
      </div>
      <div className="home-arrow">
        asdfsadf
      </div>
      <div className="content">
        <div className="home-content"><DataHome /></div>
      </div>
    </div>
  </div>
)
export default Home