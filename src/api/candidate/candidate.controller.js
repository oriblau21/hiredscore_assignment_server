const axios = require('axios').default
const config = require('../../config').config
const moment = require('moment')

module.exports.getCandidates = getCandidates

async function getCandidates (req, res) {
  try {
    const response = await axios.get(config.candidatesResource)
    const candidates = response.data
    const mappedCandidates = (candidates || []).map(candidate => {
        return {
            name: candidate.contact_info.name.formatted_name,
            experience: (candidate.experience|| []).map(exp => {
                return {
                    title: exp.title,
                    start_date: exp.start_date,
                    end_date: exp.end_date
                }
            })
        }
    })
    res.json(mappedCandidates)
  } catch (err) {
    console.log(`Error occured in 'getCandidates' '${err}'`)
  }
}
