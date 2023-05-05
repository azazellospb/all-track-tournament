import { supabase } from 'src/app/supabase'

export async function signInWithGoogle() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
    if (error) {
      throw new Error(error.message)
    }
    return { data }
  } catch (error) {
    console.error(error)
  }
  return null
}
