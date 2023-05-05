import React from 'react'
import { Layout } from 'antd'
import { LoginForm } from 'src/features/authentication'
import { Header } from 'src/widgets/header'

const Login = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <LoginForm />
      </Layout.Content>
    </Layout>
  )
}

export default Login
