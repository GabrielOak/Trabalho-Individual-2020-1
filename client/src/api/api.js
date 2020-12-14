import axios from 'axios'

require('dotenv').config()

const base = `http://${process.env.VUE_APP_API_HOST}/api/v1`

const API = axios.create({
  baseURL: base
})

export default API
