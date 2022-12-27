// token 存储key
export const TokenKey = 'token'
export const getToken = () => {
  return localStorage.getItem(TokenKey)
}
export const setToken = (token: string) => {
  return localStorage.setItem(TokenKey, token)
}
export const removeToken = () => {
  return localStorage.removeItem(TokenKey)
}