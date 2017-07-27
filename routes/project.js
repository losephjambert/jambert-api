const contentful = require('contentful')

module.exports = function(req, res) {
  const entry_id = req.query
  const client = contentful.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  })

  client.getEntry(entry_id)
    .then((response) =>
      res.send(response.fields)
    )
    .catch(console.error)
}