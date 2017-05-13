import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Register from '../component'

storiesOf('Register', module)
  .addDecorator(component => <div style={{ width: '80%', textAlign: 'center', marginTop: '45px' }} >{ component() }</div>)
  .addWithInfo('default', '', () => (
    <Register />
  ))
  .addWithInfo('invalid', '', () => (
    <Register invalid />
  ))
  .addWithInfo('submitting', '', () => (
    <Register submitting email="example@example.com" password="123456789" confirmPassword="123456789" name="example" phone="123456798" />
  ))
  .addWithInfo('submitSucceeded', '', () => (
    <Register submitSucceeded />
  ))
  .addWithInfo('submitFailed', '', () => (
    <Register submitFailed />
  ))
  .addWithInfo('submitFailed', '', () => (
    <Register submitFailed />
  ))
  .addWithInfo('Input text', '', () => (
    <Register email="example@example.com" password="123456789" confirmPassword="123456789" name="example" phone="123456798" agreement />
  ))
  .addWithInfo('Input validate', '', () => (
    <Register validateField />
  ))

