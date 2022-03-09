const production = require('./webpack/production')
const development = require('./webpack/development')

module.exports = process.env.NODE_ENV === 'development' ? development : production