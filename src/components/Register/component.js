/* eslint-disable jsx-a11y/label-has-for */
import React, { PropTypes } from 'react'
import { Form, Input, Checkbox, Button, Tooltip, Icon, Card, Alert } from 'antd'
import './assets/style.css'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
}

const Register = ({
    invalid, submitting, submitSucceeded, submitFailed, email, password, confirmPassword, validateField, name, phone, agreement
  }) => (
    <div className="form-regis">
      <span className="span-regis">Register</span>
      { !submitSucceeded &&
      <Form>
        {
          submitFailed &&
          <div className="regis-alert">
            <Alert
              message="Error Something wrong."
              type="error"
              showIcon
              style={{ color: 'red' }}
            />
          </div>
        }
        <div className="div-form-regis">
          {
            validateField ?
              <FormItem
                {...formItemLayout}
                label="E-Mail"
                validateStatus="error"
                help="Invalid E-Mail."
              > <Input placeholder="example@example.com" type="email" disabled={submitting} value={email} />
              </FormItem> :
              <FormItem
                {...formItemLayout}
                label="E-Mail"
              > <Input placeholder="example@example.com" type="email" disabled={submitting} value={email} />
              </FormItem>
          }
          {
            validateField ?
              <FormItem
                {...formItemLayout}
                label="Password"
                validateStatus="error"
                help="Invalid Password."
              >
                <Input id="error" type="password" disabled={submitting} value={password} />
              </FormItem> :
              <FormItem
                {...formItemLayout}
                label="Password"
              >
                <Input id="error" type="password" disabled={submitting} value={password} />
              </FormItem>
          }
          {
            validateField ?
              <FormItem
                {...formItemLayout}
                label="Confirm Password"
                validateStatus="error"
                help="Password do not match."
              >
                <Input id="error" type="password" disabled={submitting} value={confirmPassword} />
              </FormItem> :
              <FormItem
                {...formItemLayout}
                label="Confirm Password"
              >
                <Input id="error" type="password" disabled={submitting} value={confirmPassword} />
              </FormItem>
          }
          {
            validateField ?
              <FormItem
                {...formItemLayout}
                label={(
                  <span>
              Nickname&nbsp;
                    <Tooltip title="What do you want other to call you?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                )}
                validateStatus="error"
                help="Duplicate names."
              >
                <Input id="error" type="text" disabled={submitting} value={name} />
              </FormItem> :
              <FormItem
                {...formItemLayout}
                label={(
                  <span>
              Nickname&nbsp;
                    <Tooltip title="What do you want other to call you?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                )}
              >
                <Input id="error" type="text" disabled={submitting} value={name} />
              </FormItem>
          }
          {
            validateField ?
              <FormItem
                {...formItemLayout}
                label="Phone Number"
                validateStatus="error"
                help="Number only"
              >
                <Input id="error" type="text" disabled={submitting} value={phone} />
              </FormItem> :
              <FormItem
                {...formItemLayout}
                label="Phone Number"
              >
                <Input id="error" type="text" disabled={submitting} value={phone} />
              </FormItem>
          }
        </div>
        <p>
          <Checkbox disabled={submitting} defaultChecked={agreement} >I have read the agreement</Checkbox>
        </p>
        {
          submitting ?
            <p>
              <Button className="btn-regis" type="primary" loading>Register</Button>
            </p>
          :
            <p>
              <Button className="btn-regis" type="primary" disabled={invalid}>Register</Button>
            </p>
        }
      </Form>
    }
      {
      submitSucceeded &&
      <div>
        <Card bordered={false} style={{ width: 450 }} >
          <p>You have successfully registered.</p>
          <p>And your confirm E-mail.</p>
          <p>Thanks so much for joining us.</p>
          <Button type="primary" ghost style={{ float: 'right', marginTop: 30 }}>Go to Login page</Button>
        </Card>
      </div>
    }
    </div>
)

Register.propTypes = {
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  submitSucceeded: PropTypes.bool,
  submitFailed: PropTypes.bool,
  validateField: PropTypes.bool,
  agreement: PropTypes.bool,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string
}
Register.defaultProps = {
  invalid: false,
  submitting: false,
  submitSucceeded: false,
  submitFailed: false,
  validateField: false,
  agreement: false,
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  phone: ''
}


export default Register
