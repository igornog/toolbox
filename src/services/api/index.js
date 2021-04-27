import axios from 'axios'

const request = axios.create({
  baseURL: `https://api-dev.samisaude.com.br/v1/`,
  headers: {
    'api-token': `1ff41e89d825c9665cba01254f71b2a7`
	}
});

const requestDownload = axios.create({
  baseURL: `https://api-dev.samisaude.com.br/v1/`,
  responseType: 'arraybuffer',
  headers: {
    'Content-Disposition': "attachment; filename=template.xlsx",
    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
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

  static postFile = (url, data, options = {}) => {
    console.log(url, data, options)
    return request.post(url, data);
  }

  static getDownload = url => {
    return requestDownload.get(url)
  }


}

export default HttpService