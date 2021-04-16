import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

const bkoRequest = axios.create({
  baseURL: `http://backoffice.samisaude.com.br`
});

class HttpService {
  static get = url => {
    return request.get(url)
  }

  static post = (url, obj) => {
    return request.post(url, obj)
  }

  static put = (url, obj) => {
    return request.put(url, obj)
  }

  static delete = (url) => {
    return request.delete(url)
  }
  
  static getCompanies = url => {
    return bkoRequest.get(url)
  }
}

export default HttpService