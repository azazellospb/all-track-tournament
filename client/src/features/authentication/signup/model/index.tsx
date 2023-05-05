import { createAsyncThunk } from '@reduxjs/toolkit'
import { sessionApi } from 'src/entities/session/api/sessionApi'
import { isFetchBaseQueryError } from 'src/shared/api/isFetchBaseQueryError'
import type { RootState } from 'src/app/store/types'

type TSignUpProps = {
  password: string
}

export const signupThunk = createAsyncThunk<any, TSignUpProps, { state: RootState }>(
  'authentication/signup',
  async ({ password }: TSignUpProps, { dispatch, getState }) => {
    try {
      const state = getState()
      const { email } = state.session
      await dispatch(sessionApi.endpoints.signup.initiate({ password, email })).unwrap()
    } catch (error) {
      if (isFetchBaseQueryError(error)) {
        if (typeof error.data === 'string') {
          throw new Error(error.data)
        }
      }
      throw new Error('Unknown error')
    }
  }
)
