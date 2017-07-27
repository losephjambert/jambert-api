const contentful = require('contentful')

module.exports = function(req, res) {
  const entry_id = req.query.projectId
  const client = contentful.createClient({
    space: process.env.SPACE_ID || '3rtn1vfpfic2',
    accessToken: process.env.ACCESS_TOKEN || '22eb6ce953fda24b10d7b4e693685c4891063361aff3dae19136c1656792d36c'
  })

  client.getEntry(entry_id)
    .then((response) =>
      res.send(response)
    )
    .catch(console.error)
}