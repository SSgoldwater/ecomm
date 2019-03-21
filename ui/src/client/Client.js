import axios from 'axios'

class Client {
  constructor(options) {
    this.axios = axios.create(options)
  }

  getItems() {
    return this.axios.get('/items/')
  }
}

export default Client

