import React from 'react'
import { Button, Menu, Dropdown, Icon } from 'antd'


const Setting = () => {
  const handleMenuClick = e => {
    console.log('click ', e)
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <Button ghost style={{ border: 0, float: "right" }}>
        <Icon type="setting" />
      </Button>
    </Dropdown>
  )
}

export default Setting