import { createAsyncThunk } from '@reduxjs/toolkit'
import { clearSessionData } from 'src/entities/session/model/slice'
import type { RootState } from 'src/app/store/types'

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
  'authentication/refresh',
  async (_: unknown, { dispatch }) => {
    dispatch(clearSessionData())
  }
)
