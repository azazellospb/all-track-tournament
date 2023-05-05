import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LockOutlined } from '@ant-design/icons'
import { Button, Divider, Form, Input, Typography } from 'antd'
import Link from 'antd/es/typography/Link'
import { loginThunk } from 'src/features/authentication/login/model'
import styles from './styles.module.scss'
import type { AppDispatch, RootState } from 'src/app/store/types'

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { Title, Paragraph, Text } = Typography
  const email = useSelector((state: RootState) => state.session.email)
  const onFinish = ({ password }: { password: string }) => {
    dispatch(loginThunk({ email, password }))
    navigate('/about', { replace: true })
  }

  useEffect(() => {
    if (!email) navigate('/signin', { replace: true })
  }, [])

  return (
    <Form name="initial_signin" className={styles.signInForm} initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item>
        <Typography>
          <Title>Type password</Title>
          <Paragraph>
            Please input your password from ATT for <Text strong>{email}</Text>
          </Paragraph>
        </Typography>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password.'
          }
        ]}
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
      </Form.Item>
      <Form.Item>
        <Divider plain>or</Divider>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Get link to login
        </Button>
      </Form.Item>
      <Form.Item>
        <Link>Forget password?</Link>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
