export const CURRENT_SERVER = window.location.hostname === 'localhost'
  ? 'https://myappr.herokuapp.com/'
  : `${window.location.protocol}//${window.location.hostname}/`;
export const UPLOAD_API = `${CURRENT_SERVER}upload`;
