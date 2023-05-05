import { createSlice } from '@reduxjs/toolkit'
import { SessionUserId } from 'src/entities/session/api/types'
import { sessionApi } from 'src/entities/session/api/sessionApi'
import { getRegisterStatusThunk } from 'src/features/authentication/signin/model'

type SessionSliceState = {
  isLoading: boolean
  email: string
} & SessionState

type SessionState =
  | {
      accessToken: string
      userId: SessionUserId
      isAuthorized: true
    }
  | {
      isAuthorized: false
      accessToken?: string
      userId?: SessionUserId
    }

const initialState: SessionSliceState = {
  isAuthorized: false,
  isLoading: true,
  email: ''
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSessionData: (state) => {
      state.accessToken = undefined
      state.userId = undefined
      state.isAuthorized = false
      state.email = ''
    },
    setUserEmail: (state, { payload }) => {
      state.email = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getRegisterStatusThunk.fulfilled, (state: SessionSliceState, { payload }) => {
      if (payload) {
        state.isLoading = false
        state.isAuthorized = true
        state.email = payload?.email
      } else {
        state.isLoading = false
        state.isAuthorized = false
      }
    })
    builder.addCase(getRegisterStatusThunk.pending, (state: SessionSliceState) => {
      state.isLoading = true
    })
    builder.addMatcher(sessionApi.endpoints.login.matchFulfilled, (state: SessionSliceState, { payload }) => {
      state.isAuthorized = true
      if (state.isAuthorized) {
        state.userId = payload.userId
        state.isLoading = false
        state.email = payload.email
      }
    })
  }
})

export const { clearSessionData, setUserEmail } = sessionSlice.actions
