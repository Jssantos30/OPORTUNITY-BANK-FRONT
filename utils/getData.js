export const getData = async url => {
  try {
    const token = window.localStorage.getItem('access_token')
    if (token === 'null' || token === '') throw Error('Token is missing')

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    })

    return {
      responseComplete: response.ok,
      response,
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
