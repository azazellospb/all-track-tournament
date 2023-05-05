import React from 'react'
import { lazy } from '@loadable/component'

const About = lazy(() => import('src/pages/About'))
const Login = lazy(() => import('src/pages/Login'))
const Register = lazy(() => import('src/pages/Register'))
const Signin = lazy(() => import('src/pages/Signin'))

export const routes = [
  {
    path: '/',
    element: <About />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/signin',
    element: <Signin />
  }
]
