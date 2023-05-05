import React from 'react'
import { Layout } from 'antd'
import { RegisterForm } from 'src/features/authentication'
import { Header } from 'src/widgets/header'

const Register = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <RegisterForm />
      </Layout.Content>
    </Layout>
  )
}

export default Register
