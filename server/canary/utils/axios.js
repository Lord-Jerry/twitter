const axios = require('axios');

class Axios {
  static send(endpoint, headers = {}, data= {}) {
    return axios({
      method: 'get',
      url: endpoint,
      data,
      headers,
    });
  }
}

module.exports = Axios;
