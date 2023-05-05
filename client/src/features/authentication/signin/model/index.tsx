import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from 'src/app/supabase'

export const getRegisterStatusThunk = createAsyncThunk('authentication/getRegisterStatus', async (email: string) => {
  try {
    const { data, error } = await supabase.from('users_emails').select(`email`).eq('email', email)
    if (error) {
      throw new Error(error.message)
    }
    return data[0]
  } catch (error) {
    console.error(error)
  }
  return null
})
