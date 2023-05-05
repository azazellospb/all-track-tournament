import React from 'react'
import { GoogleOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'
import { Actions } from 'src/features/authentication/by-google/Actions'

const GoogleAuthButton = () => {
  const { signInWithGoogle } = Actions
  return (
    <Tooltip title="Login with Google account">
      <Button onClick={signInWithGoogle} type="primary" shape="circle" icon={<GoogleOutlined />} />
    </Tooltip>
  )
}

export default GoogleAuthButton
