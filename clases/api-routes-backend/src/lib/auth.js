const ACCESStOKEN = 'accessToken';
const REFRESHtOKEN = 'refreshToken';

export const  getAccessToken = () =>  localStorage.getItem(ACCESStOKEN);


export const  getRefreshToken = () => localStorage.getItem(REFRESHtOKEN)


export function setTokens(access, refresh){
    localStorage.setItem(ACCESStOKEN, access);
    localStorage.setItem(REFRESHtOKEN, refresh);
}


export function clearTokens(){
    localStorage.removeItem(ACCESStOKEN)
    localStorage.removeItem(REFRESHtOKEN)
}


export const isAuthenticated = () => {
    if ( typeof window  === 'undefined') return false;
    //return !!localStorage.getItem('accessToken');
    //TODO: validar
    const token = localStorage.getItem('accessToken')
    if(token != null ){
        return true
    }
    return false
}