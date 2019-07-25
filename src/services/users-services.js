import baseService from './base-service'


export default {
  getAllUsers () {
    return baseService
      .get('/allUsers/')
  },
  me () {
    return baseService
      .get('users/me')
  }
}


