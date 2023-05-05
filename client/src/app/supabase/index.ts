import { createClient } from '@supabase/supabase-js'
import { config } from 'src/shared/config'

const supabaseUrl = config.API_ENDPOINT
const supabaseKey = config.API_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
