import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useRedirectOn = (value: string, redirectTo: string) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (value) {
      navigate(redirectTo)
    }
  }, [value, redirectTo])
}
