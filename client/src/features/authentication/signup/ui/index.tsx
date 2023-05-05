import React from 'react'
import { LockOutlined } from '@ant-design/icons'
import { Button, Form, Input, Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signupThunk } from 'src/features/authentication/signup/model'
import styles from './styles.module.scss'
import type { AppDispatch } from 'src/app/store/types'

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { Title, Paragraph, Text } = Typography
  const navigate = useNavigate()
  const onFinish = ({ password }: { password: string }) => {
    dispatch(signupThunk({ password }))
    navigate('/about', { replace: true })
  }
  return (
    <Form name="initial_signin" className={styles.signInForm} initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item>
        <Typography>
          <Title>
            <Text strong>Choose security password</Text>
          </Title>
          <Paragraph>
            The password must consist of uppercase and lowercase letters, numbers and symbols. The length is at least 10
            characters.
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
          },
          {
            min: 10
          },
          {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/
          }
        ]}
        hasFeedback
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item
        label="Confirm password"
        name="confirm_password"
        rules={[
          {
            required: true,
            message: 'Confirm your password.'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              // eslint-disable-next-line prefer-promise-reject-errors
              return Promise.reject('Entered passwords do not match')
            }
          })
        ]}
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Create account
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterForm
