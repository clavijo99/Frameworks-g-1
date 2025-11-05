'use client'


import { useState } from 'react'
import { useLogin } from '@/hooks/useLogin'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, loading, error, data } = useLogin()


    const handleLogin = async () => {
        try{
           const result = await  login(email, password)
           if(result){
            console.log({data})
           }
        }catch(err){
            console.log(err)
        }
    }



    return (
        <div>
            <h1>Login</h1>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} >Login</button>
        </div>
    )
}