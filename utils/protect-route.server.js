import Cookies from 'cookies'

export function protectRouteAndRedirect(req, res) {
  const cookies = new Cookies(req, res)
  const token = cookies.get('bank-token')
 
  if (!token) {
    return { redirect: { destination: '/login', permanent: true } }
  }

  return { token }
}
