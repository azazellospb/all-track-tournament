import { useSelector } from 'react-redux'
import type { RootState } from 'src/app/store/types'

export const useViewer = () => {
  return useSelector((state: RootState) => state.session)
}

export const useAuth = () => {
  const { email } = useViewer()
  return {
    isAuth: !!email,
    email
  }
}
