import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function userSubscribe() {
    const loading = ref(false)
    const error = ref<string | null>(null)
    const success = ref(false)

    const subscribe = async (email: string) => {
        loading.value = true
        error.value = null
        success.value = false

        const { error: signUpError } = await supabase.auth.signInWithOtp({
            email
        })

        if (signUpError) {
            error.value = signUpError.message
        } else {
            success.value = true
        }

        loading.value = false
    }

    return {
        subscribe,
        loading,
        error,
        success,
    }
}
