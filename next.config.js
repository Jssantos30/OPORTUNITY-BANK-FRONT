module.exports = {
  basePath: process.env.NEXT_BASE_PATH,
  reactStrictMode: true,
  env: {
    REACT_APP_STORAGERESOURCENAME: process.env.REACT_APP_STORAGERESOURCENAME,
    REACT_APP_STORAGESASTOKEN: process.env.REACT_APP_STORAGESASTOKEN,
    NEXT_BASE_PATH:  process.env.NEXT_BASE_PATH,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self'",
          },
          {
            key: 'Content-Security-Policy',
            value: "form-action 'self'",
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ]
  }
}
