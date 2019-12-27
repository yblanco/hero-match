import axios from 'axios';

export default class {
  constructor(host = '') {
    this.info = '';
    this.host = host;
    this.axios = axios.create({
      baseURL: host,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  call($route, method="get", data = {}) {
    const url = `${$route}`;
    let request;
    this.info = `Request to ${this.host}${url}`;
    switch (method) {
      case 'post':
        request = this.axios.post(url, data);
        break;
      case 'put':
        request =  this.axios.post(url, data);
        break;
      default:
        request = this.axios.get(url)
    }
    return request
      .then(this.then.bind(this))
      .catch(this.catch.bind(this));
  }

  catch(err) {
    console.log(`Error on ${this.info}: ${err.message}`);
  }

  then(res) {
    const { status, data } = res;
    console.log(`Status on ${this.info}: ${status}`);
    return data;
  }

}
