const axios = require('axios');

class Axios {
  static get(endpoint, headers = {}, data= {}) {
    if (process.env.NODE_ENV === 'test') {
      return require(endpoint);
    }

    return axios({
      method: 'get',
      url: endpoint,
      data,
      headers,
    });
  }
}

module.exports = Axios;
