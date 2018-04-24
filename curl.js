const request = require('request');

function curl(address) {
  request.get(address, function (err, res, body) {
    if (err) {
      throw err;
    } else {
      console.log(body);
    }
  })
}

module.exports = curl;
