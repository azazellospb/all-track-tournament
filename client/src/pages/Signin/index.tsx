import React from 'react'
import { Layout } from 'antd'
import { SignInForm } from 'src/features/authentication'
import { Header } from 'src/widgets/header'

const Signin = () => {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <SignInForm />
      </Layout.Content>
    </Layout>
  )
}

export default Signin
