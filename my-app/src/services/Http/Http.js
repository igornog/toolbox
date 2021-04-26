import axios from 'axios'

const request = axios.create({
  baseURL:"https://api-dev.samisaude.com.br/v1/"
});

const requestDownload = axios.create({
  baseURL:"https://api-dev.samisaude.com.br/v1/",
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

  static getDownload = url => {
    return requestDownload.get(url)
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

  static setToken = token => {
    request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    requestDownload.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  static postFile = (url, data, options) => {
    return request.post(url, data, options);
  }

  static deleteFile = (url, data) => {
    return request.delete(url, data);
  }

  static getBeneficiary = url => {
    return request.get(url)
  }
}

export default HttpService