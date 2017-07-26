const contentful = require('contentful');

module.exports = function(req, res) {
  const client = contentful.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  })
  client.getEntries(client.accessToken)
  .then(function (entries) {
    console.log(entries)
  })

}