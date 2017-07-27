const contentful = require('contentful');
const config = require("../.config/contentful.js");

module.exports = function(req, res) {
  const client = contentful.createClient({
    space: process.env.SPACE_ID || config.space,
    accessToken: process.env.ACCESS_TOKEN || config.accessToken
  })

  client.getEntries({content_type: 'blogPost'})
    .then((response) =>
      res.send(response.items)
    )
    .catch(console.error)
}