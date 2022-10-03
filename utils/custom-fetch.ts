export enum RequestTypes {
  credit = 'NEXT_PUBLIC_CREDITSOLICITATION_V1',
  auth = 'NEXT_PUBLIC_AUTHSERVICE_V1',
  config = 'NEXT_PUBLIC_CONFIG_SERVICES_V1',
  files = 'NEXT_PUBLIC_FILES_SERVICE_V1',
  report = 'NEXT_PUBLIC_REPORT_SERVICES_V1',
  public = 'NEXT_PUBLIC_AUTHSERVICE_V1',
}

export function customFetch(path: string, { type, ...options }: Options = {}) {
  let URI: string | undefined = ''

  switch (type) {
    case RequestTypes.credit:
      URI = process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1
      break
    case RequestTypes.auth:
      URI = process.env.NEXT_PUBLIC_AUTHSERVICE_V1
      break
    case RequestTypes.config:
      URI = process.env.NEXT_PUBLIC_CONFIG_SERVICES_V1
      break
    case RequestTypes.files:
      URI = process.env.NEXT_PUBLIC_FILES_SERVICE_V1
      break
    case RequestTypes.report:
      URI = process.env.NEXT_PUBLIC_REPORT_SERVICES_V1
      break
    case RequestTypes.public:
      URI = process.env.NEXT_PUBLIC_AUTHSERVICE_V1
      break

    default:
      URI = process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1
      break
  }

  const headers: any = {
    Authorization: `Bearer ${
      typeof localStorage !== 'undefined' ? localStorage.getItem('access_token') : ''
    }`,
    ...(options.headers || {}),
  }

  if (!options.preventContentType) {
    headers['Content-Type'] = 'application/json'
  }

  return fetch(URI + path, {
    ...options,
    headers,
  })
}
export function customFetchPublic(path: string, { type, ...options }: Options = {}) {
  let URI: string | undefined = ''

  switch (type) {
    case RequestTypes.auth:
      // URI = 'http://localhost:3001/api/v1/'
      URI = process.env.NEXT_PUBLIC_AUTHSERVICE_V1
      break
    case RequestTypes.config:
      // URI = 'http://localhost:3002/api/v1/'
      URI = process.env.NEXT_PUBLIC_CONFIG_SERVICES_V1
      break
    default:
      // URI = 'http://localhost:3002/api/v1/'
      URI = process.env.NEXT_PUBLIC_AUTHSERVICE_V1
      break
  }

  const headers: any = {
    Authorization: `Bearer ${
      typeof localStorage !== 'undefined' ? localStorage.getItem('token_interno') : ''
    }`,
    ...(options.headers || {}),
  }

  if (!options.preventContentType) {
    headers['Content-Type'] = 'application/json'
  }

  return fetch(URI + path, {
    ...options,
    headers,
  })
}

interface Options extends RequestInit {
  type?: RequestTypes
  preventContentType?: boolean
}
