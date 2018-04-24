const fs = require('fs')

function cat(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
  })
}

module.exports = cat;
