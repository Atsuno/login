import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Home from '../component'

storiesOf('Home', module)
  .addDecorator(component => <div style={{ width: '80%', textAlign: 'center', marginTop: '45px' }} >{ component() }</div>)
  .addWithInfo('default', '', () => (
    <Home />
))