import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Login from '../component'

storiesOf('Login', module)
  .addDecorator(component => <div style={{ width: '80%', textAlign: 'center', marginTop: '45px' }} >{ component() }</div>)
  .addWithInfo('default', '', () => (
    <Login />
  ))
  .addWithInfo('invalid', '', () => (
    <Login invalid />
  ))
  .addWithInfo('submitting', '', () => (
    <Login submitting idName="example@example.com" password="123456789" />
  ))
  .addWithInfo('submitFailed', '', () => (
    <Login submitFailed idName="example@example.com" password="123456789" />
  ))
  .addWithInfo('Input text ID and Password', '', () => (
    <Login idName="example@example.com" password="123456789" />
  ))
  .addWithInfo('Input ID and Password', '', () => (
    <Login validateField />
  ))