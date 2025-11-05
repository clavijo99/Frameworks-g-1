import { apiFetch } from '@/lib/apiClient'
import { useState } from 'react'

export const useLogin = () => {
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const login = async (email, password) => {
        try{
            setLoading(true)
            setError(null)

            const response = await apiFetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({email, password})
            })
            console.log(response)
            if(!response.ok) throw new Error('Credenciales inválidas')

            const dataJson = await response.json()
            setData(dataJson)
            return true
        } catch(err){
            console.log({err})
            setError(err.message)
            return false
        } finally{
            setLoading(false)
        }
    }

    return { login, loading, error, data }

}