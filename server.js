require('dotenv').config()
const config = require('./src/config').config

if (!config.candidatesResource) {
    console.error('There is no resource for candidates')
} else {
    const { initServer } = require('./src/lib/express')
    
    initServer()
}
