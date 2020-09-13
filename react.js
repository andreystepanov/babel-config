const config = require('./')

config.presets.push('@babel/preset-react')

config.plugins.push([
  'babel-plugin-transform-react-remove-prop-types',
  { mode: 'unsafe-wrap' },
])

module.exports = config
