export const getApiHttpsEndpoint = () => {
  const baseUrl = _getBaseUrl()
  return `https://${baseUrl}/api`
}

export const getApiWebsocketEndpoint = () => {
  const baseUrl = _getBaseUrl()
  return `wss://${baseUrl}/api/subscriptions`
}

function _getBaseUrl() {
  return window.location.origin.split("://")[1];
}
