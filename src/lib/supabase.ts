import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('VITE_SUPABASE_URL não está definida')
}

if (!supabaseAnonKey) {
  throw new Error('VITE_SUPABASE_ANON_KEY não está definida')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})

// Verificar conexão
supabase.from('contact_messages').select('*', { count: 'exact', head: true })
  .then(({ error }) => {
    if (error) {
      console.error('Erro ao conectar com Supabase:', error.message)
      throw error
    }
    console.log('Conexão com Supabase estabelecida com sucesso!')
  })
  .catch((error) => {
    console.error('Erro ao inicializar Supabase:', error)
  }) 