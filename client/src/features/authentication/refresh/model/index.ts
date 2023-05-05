import { createAsyncThunk } from '@reduxjs/toolkit'
import { useRefreshQuery } from 'src/entities/session/api/sessionApi'
import type { RootState } from 'src/app/store/types'

export const refreshTokenThunk = createAsyncThunk<void, void, { state: RootState }>('authentication/logout', () => {
  useRefreshQuery()
})
