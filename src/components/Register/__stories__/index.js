import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Register from '../component'

storiesOf('Register', module)
  .addDecorator(component => <div style={{ width: '80%', textAlign: 'center', marginTop: '45px' }} >{ component() }</div>)
  .addWithInfo('default', '', () => (
    <Register />
  ))
