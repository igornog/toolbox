import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

const bkoRequest = axios.create({
  baseURL: `https://api-dev.samisaude.com.br/v1/backoffice/`,
  headers: {
    'API-Token': `1ff41e89d825c9665cba01254f71b2a7`
	}
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