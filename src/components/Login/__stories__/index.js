import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Login from '../component'

storiesOf('Login', module)
  .addDecorator(component => <div style={{ width: '80%', textAlign: 'center', marginTop: '45px' }} >{ component() }</div>)
  .addWithInfo('default', '', () => (
    <Login />
))