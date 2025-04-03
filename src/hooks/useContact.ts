import { useMutation } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
import { PostgrestError } from '@supabase/supabase-js'

type ContactMessage = {
  name: string
  email: string
  message: string
}

export const useContact = () => {
  return useMutation<any, PostgrestError, ContactMessage>({
    mutationFn: async (message: ContactMessage) => {
      console.log('Enviando mensagem:', message)

      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: message.name,
            email: message.email,
            message: message.message,
            created_at: new Date().toISOString()
          }
        ])
        .select()
        .single()

      if (error) {
        console.error('Erro ao enviar mensagem:', error)
        throw error
      }

      console.log('Mensagem enviada com sucesso:', data)
      return data
    },
    onError: (error) => {
      console.error('Erro na mutação:', error)
    }
  })
} 