import axios from 'axios'

const request = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'api-token': process.env.REACT_APP_API_TOKEN
	}
});

const requestDownload = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
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
    return request.post(url, data, options);
  }

  static getDownload = url => {
    return requestDownload.get(url)
  }


}

export default HttpService