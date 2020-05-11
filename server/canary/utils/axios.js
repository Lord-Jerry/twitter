const axios = require('axios');

class Axios {
  static get(endpoint, headers = {}, data= {}) {
    return axios({
      method: 'get',
      url: endpoint,
      data,
      headers,
    });
  }
}

module.exports = Axios;
