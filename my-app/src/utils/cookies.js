import Cookies from 'js-cookie'

export const removeCookies = () => {
  Cookies.remove('USERID', { path: '/' })
  Cookies.remove('USERJWT', { path: '/' })
}

export const getUserIdCookie = () => {
  const userId = Cookies.get('USERID')
  if (!userId) {
    console.log('Erro ao pegar o userId no cookie')
  }
  return userId
}

export const setUserIdCookie = (userId) => {
  if (!userId) {
    console.log('USERID inválido para inserção no cookie')
  }
  Cookies.set('USERID', userId, { path: '/', secure: true })
}

export const getUserJwtCookie = () => {
  const userJWT = Cookies.get('USERJWT')
  if (!userJWT) {
    console.log('Erro ao pegar o userJWT no cookie')
  }
  return userJWT
}

export const setUserJwtCookie = (userJWT) => {
  if (!userJWT) {
    console.log('userJWT inválido para inserção no cookie')
  }
  Cookies.set('USERJWT', userJWT, { path: '/', secure: true })
}
