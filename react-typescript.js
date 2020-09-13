const config = require('./react')

config.presets.push([
  '@babel/preset-typescript',
  { isTSX: true, allExtensions: true },
])

module.exports = config
