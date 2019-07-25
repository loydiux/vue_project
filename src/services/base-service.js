import axios from 'axios'


const baseService = axios.create({
  baseURL: 'http://localhost:4000/api/',
  headers: {
    'Accept': 'application/json',
    'Accept-Language': 'es',
    'Content-Type': 'application/json'
  }
})

baseService.interceptors.response.use(
  function (response) {
    console.log('response', response)
    return response
  },
  function (error) {
    console.error('ERROR', error)
  }
)


export default baseService
