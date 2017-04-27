/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import { Form, Input, Checkbox, Button, Tooltip, Icon } from 'antd'
import './assets/style.css'

const Register = () => (
  <div className="form-regis">
    <Form>
      <span className="span-regis">Register</span>
      <div className="div-form-regis">
        <label>
          <p>E-mail : <Input className="regis-name" type="email" validateStatus="error" /></p>
        </label>
        <label>
          <p>Password : <Input className="regis-name" type="password" /></p>
        </label>
        <label>
          <p>Confirm Password : <Input className="regis-name" type="password" /></p>
        </label>
        <label>
          <p>Nickname &nbsp;
            <Tooltip title="What do you want other to call you?">
              <Icon type="question-circle-o" />&nbsp; :&nbsp;
            </Tooltip>
            <Input className="regis-name" type="text" /></p>
        </label>
        <label>
          <p>Phone Number : <Input className="regis-name" type="text" /></p>
        </label>
      </div>
      <p>
        <Checkbox>I have read the agreement</Checkbox>
      </p>
      <p>
        <Button className="btn-regis" type="primary">Register</Button>
      </p>
    </Form>
  </div>

)

export default Register
