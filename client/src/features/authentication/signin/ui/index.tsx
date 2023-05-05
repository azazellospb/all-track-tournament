import React, { useEffect, useState } from 'react'
import { LockOutlined } from '@ant-design/icons'
import { Button, Divider, Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GoogleAuthButton from 'src/features/authentication/by-google/ui'
import { getRegisterStatusThunk } from 'src/features/authentication/signin/model'
import { setUserEmail } from 'src/entities/session/model/slice'
import styles from './styles.module.scss'
import type { AppDispatch, RootState } from 'src/app/store/types'

const SignInForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [userEmail, setEmail] = useState('')
  const navigate = useNavigate()
  const { isAuthorized, isLoading, email } = useSelector((state: RootState) => state.session)
  useEffect(() => {
    console.log('userEmail && !isLoading, isAuthorized :', userEmail && !isLoading, isAuthorized)
    console.log('userEmail, isLoading, isAuthorized :', userEmail, isLoading, isAuthorized)
    if (userEmail && !isLoading) {
      if (isAuthorized) {
        navigate('/login', { replace: true })
      } else {
        navigate('/register', { replace: true })
      }
    }
  }, [userEmail, isAuthorized, isLoading, email])

  const onFinish = ({ initial_signin_email }: { initial_signin_email: string }) => {
    dispatch(getRegisterStatusThunk(initial_signin_email))
    dispatch(setUserEmail(initial_signin_email))
    setEmail(initial_signin_email)
  }

  return (
    <Form name="initial_signin" className={styles.signInForm} initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item
        label="Email adress"
        name="initial_signin_email"
        rules={[
          {
            required: true,
            message: 'Please input email.'
          },
          {
            type: 'email',
            message: 'Please enter a valid email'
          }
        ]}
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Continue with email
        </Button>
      </Form.Item>
      <Form.Item>
        <Divider plain>or</Divider>
      </Form.Item>
      <Form.Item>
        <div className="authOptions">
          <GoogleAuthButton />
        </div>
      </Form.Item>
    </Form>
  )
}

export default SignInForm
