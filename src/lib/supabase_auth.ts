import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL!
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY!

export const supabase_client = createClient(supabaseUrl, supabaseKey)
