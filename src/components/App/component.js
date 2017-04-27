import React from 'react'
import 'antd/dist/antd.css'
import logo from './assets/logo.svg'
import './assets/style.css'
import Home from '../Home/component'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="App-intro">
      <Home />
    </div>
  </div>
)
export default App
