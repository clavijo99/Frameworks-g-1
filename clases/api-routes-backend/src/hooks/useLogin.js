import { useState } from 'react'

export const useLogin = () => {
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const login = async (email, password) => {
        try{
            setLoading(true)
            setError(null)

            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password})
            })

            if(!response.ok) throw new Error('Credenciales inválidas')

            const dataJson = await response.json()
            setData(dataJson)
            return dataJson
        } catch(err){
            setError(err.message)
        } finally{
            setLoading(false)
        }
    }

    return { login, loading, error, data }

}