import auth0 from 'auth0-js'

class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'ssgoldwater.auth0.com',
    clientID: 'ZxQtvvOMe0y836gJ4Qkh4MxsEY5QwGAx',
    redirectUri: 'http://localhost:8080/callback',
    responseType: 'token id_token',
    scope: 'profile'
  })

  login() {
    localStorage.setItem('io.akna.ecomm.auth_redirect', location.pathname)
    this.auth0.authorize()
  }

  logout() {
    this.auth0.logout({
      returnTo: 'http://localhost:8080/',
      clientID: 'GEPen0MxXQ3T1P0ckfQ4B1x5ckwDjtZ4'
    })

    localStorage.removeItem('io.akna.ecomm.access_token');
    localStorage.removeItem('io.akna.ecomm.id_token');
    localStorage.removeItem('io.akna.ecomm.expires_at');
  }
}

export default new Auth()

