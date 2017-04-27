import React from 'react'
import { Input, Button } from 'antd'
import './assets/style.css'

const Login = () => (
  <div className="div-box">
    <Input className="input" size="large" placeholder="Enter your ID" />
    <Input className="input" size="large" type="password" placeholder="Enter your Password" />
    <Button className="login" size="large" type="primary">Login</Button>
    <div className="div-login">
      <a>Forgot password</a><a>Register</a>
    </div>
  </div>
)

export default Login