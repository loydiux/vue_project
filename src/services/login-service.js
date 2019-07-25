import baseService from './base-service'


export default {
  login (value, password) {
    return baseService
      .post('usuarios/authenticate/', { value: value, password: password })
  },
  me () {
    return baseService
      .get('users/me')
  }
}


