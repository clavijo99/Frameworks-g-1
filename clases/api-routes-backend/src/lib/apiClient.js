import { publicRoutesApi } from "./route";
import { getAccessToken, getRefreshToken, setTokens, clearTokens } from "./auth";


export async function apiFetch(url, options = {}) {
    
    const isPublicRoute = publicRoutesApi.some(route => url.startsWith(route))

    let accessToken = getAccessToken()
    let refresh = getRefreshToken()


    const headers = {
        'Content-Type': 'Application/json',
        ...( options.headers || {} ),
        ...( isPublicRoute ? {} : accessToken ? { Authorization : `Bearer ${accessToken}` } : {} )
    }


    const config = {
        ...options,
        headers
    }



    let response = await fetch(url, config);


    if(response.status === 401 && !isPublicRoute){
        const refreshed = await refreshToken(refresh)

        if(refresh){
            accessToken = getAccessToken();

            const retryHeader = {
                ...headers,
                'Authorization': `Bearer ${accessToken}`
            }

            response = await fetch(url,
                { ...options, headers: retryHeader }
            )
        }else{
            clearTokens()
            throw new Error('No se logro refrescar los tokens')
        }

    }
    return response
}


async function refreshToken(refresh) {
    if(!refresh) return false

    try{
        const response = await fetch('api/auth/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({refresh})
        })

        if(!response.ok) return false;

        const data = await response.json();

        if(data.access_token && data.refresh_token){
            setTokens(data.access_token, data.refresh_token)
            return true;
        }
        return false
    } catch(error){
        console.log(`Error refresh Token: ${error}`)
        clearTokens()
        return false
    }
}