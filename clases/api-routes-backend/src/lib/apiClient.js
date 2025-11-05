import { publicRoutes } from "./route";
import { getAccessToken, getRefreshToken, setTokens, clearTokens } from "./auth";


export async function apiFetch(url, options = {}) {
    
    const isPublicRoute = publicRoutes.some(route => url.startswith(route))

    let accessToken = getAccessToken()


    const headers = {
        'Content-Type': 'Application/json',
        ...( options.headers || {} ),
        ...( isPublicRoute ? {} : accessToken ? { Authorization : `Bearer ${accessToken}` } : {} )
    }


    const config = {
        ...options,
        headers
    }


    const response = await fetch(url, config);


    if(response.status === 401 && !isPublicRoute){

        const refreshed = await 

    }

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
    } catch(error){

    }
}