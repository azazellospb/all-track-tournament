import { createListenerMiddleware, type TypedStartListening } from '@reduxjs/toolkit'
import { invalidateAccessToken } from 'src/shared/api'
import { logoutThunk } from 'src/features/authentication/logout/model/logout'
import { refreshTokenThunk } from 'src/features/authentication/refresh/model'
import type { AppDispatch, RootState } from 'src/app/store/types'

export const invalidateAccessTokenListener = createListenerMiddleware()

// @see https://redux-toolkit.js.org/api/createListenerMiddleware#typescript-usage
export type TypedListening = TypedStartListening<RootState, AppDispatch>

export const startInvalidateAccessTokenListener = invalidateAccessTokenListener.startListening as TypedListening

startInvalidateAccessTokenListener({
  actionCreator: invalidateAccessToken,
  effect: async (_, api) => {
    // In the future here may be logic with refresh access token
    // @see https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#preventing-multiple-unauthorized-errors
    api.dispatch(logoutThunk())
    api.dispatch(refreshTokenThunk())
  }
})
