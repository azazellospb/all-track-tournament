import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from 'src/app/store/types'
import { logoutThunk } from 'src/features/authentication/logout/model/logout'

export const LogoutButton = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const onLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    dispatch(logoutThunk())
      .unwrap()
      .finally(() => {
        navigate('/')
      })
  }
  return (
    <a href="#" onClick={onLogout}>
      Log out
    </a>
  )
}
