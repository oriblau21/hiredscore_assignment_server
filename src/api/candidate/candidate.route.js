const { getCandidates } = require('./candidate.controller')

module.exports = (app) => {
  app.get('/api/candidate', getCandidates)
}
