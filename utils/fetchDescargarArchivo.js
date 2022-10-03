export const fetchDescargarArchivo = async () => {
  try {
    const url_dominio = `${process.env.NEXT_PUBLIC_BANK_FILES_PROCESSOR}descargar_archivos`
    const response = await fetch(url_dominio)

    return {
      response: response.ok,
      error_descargas: response.ok ? '' : 'Hubo un error',
    }
  } catch (error) {
    return {
      response: false,
      error_descargas: [
        'Unexpected token < in JSON at position 0',
        'Unexpected end of JSON input',
      ].includes(error.message)
        ? 'Hubo un error, por favor intenta nuevamente'
        : error.message,
    }
  }
}
