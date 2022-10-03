export const fetchData = async (url, data, sendToken = true, token) => {
  try {
    const headers = { 'Content-Type': 'application/json' }

    if (sendToken) {
      const access_token = token || localStorage.getItem('access_token')
      if (access_token === 'null' || access_token === '') {
        throw new Error('El token de acceso es inválido.')
      }
      headers['Authorization'] = 'Bearer ' + access_token
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })
    const res = await response.json()

    return {
      responseComplete: response.ok,
      res: res,
      error: null,
    }
  } catch (error) {
    return {
      error: [
        'Unexpected token < in JSON at position 0',
        'Unexpected end of JSON input',
      ].includes(error.message)
        ? 'Hubo un error, por favor intenta nuevamente'
        : error.message,
    }
  }
}
