import axios from 'axios'

const request = axios.create({
  baseURL: `https://api-dev.samisaude.com.br/v1/`,
  headers: {
    'api-token': `1ff41e89d825c9665cba01254f71b2a7`
    // 'api-token': `1ff41e89d825c9665cba01254f71b2a8` --- PROD
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
}

export default HttpService