import React, { PropTypes } from 'react'
import { Input, Button, Alert, Form } from 'antd'
import './assets/style.css'

const FormItem = Form.Item

const Login = ({ invalid, submitting, submitFailed, idName, password, validateField }) => (
  <div className="div-box">
    { submitFailed &&
      <Alert
        message="Invalid E-mail or Password."
        type="error"
        showIcon
        style={{ color: 'red' }}
      />
    }
    {
      validateField ?
        <FormItem
          hasFeedback
          validateStatus="error"
          help="Invalid E-mail"
        >
          <Input placeholder="Enter your E-mail" value={idName} disabled={submitting} />
        </FormItem> :
        <FormItem>
          <Input placeholder="Enter your E-mail" value={idName} disabled={submitting} />
        </FormItem>
    }
    {
      validateField ?
        <FormItem
          hasFeedback
          validateStatus="error"
          help="Invalid Password"
        >
          <Input placeholder="Enter your Password" type="password" value={password} disabled={submitting} />
        </FormItem> :
        <FormItem>
          <Input placeholder="Enter your Password" type="password" value={password} disabled={submitting} />
        </FormItem>
    }

    { submitting ?
      <Button className="login" size="large" type="primary" loading>Login</Button>
      :
      <Button className="login" size="large" type="primary" disabled={invalid}>Login</Button>
    }
    <div className="div-login">
      <a>Forgot password</a><a>Register</a>
    </div>
  </div>
)
Login.propTypes = {
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  submitFailed: PropTypes.bool,
  idName: PropTypes.string,
  password: PropTypes.string,
  validateField: PropTypes.bool
}
Login.defaultProps = {
  invalid: false,
  submitting: false,
  submitFailed: false,
  idName: '',
  password: '',
  validateField: false
}

export default Login