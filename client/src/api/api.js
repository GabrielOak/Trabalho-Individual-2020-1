import axios from 'axios'

const base = 'http://157.245.84.59:3000/api/v1'

const API = axios.create({
  baseURL: base
})

export default API
