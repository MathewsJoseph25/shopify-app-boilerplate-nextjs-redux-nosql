const initialState = {
  loading: false,
  app: {
    callAuthenticityKey: false,
    k: process.env.SHOPIFY_API_KEY,
    environment: process.env.NODE_ENV === 'development',
    currentPath: {
      path: '/',
      href: '/'
    },
    billing: 'init',
  },
  shop: {
    domain: false,
  },
}

export default initialState