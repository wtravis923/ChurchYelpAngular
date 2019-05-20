export let APIURL = '';

switch (window.location.hostname) {
  case 'churchyelp.herokuapp.com':
    APIURL = 'https://churchyelp.herokuapp.com'
    break;
  default: 
    APIURL = 'http://localhost:62897'
}

export const environment = {
  production: true
};
