const { breaks, idx, joinObj, arr, dec, media } = require('./util')

const REG = /^font$/

module.exports = props => {
  const keys = Object.keys(props).filter(key => REG.test(key))
  const bp = breaks(props)
  const palette = idx([ 'theme', 'fonts' ], props) || {}

  const key = 'font'
  const val = arr(props[key])
  const prop = properties[key] || key
  return val
    .map(cx(palette))
    .map(dec(prop))
    .map(media(bp))
    .reduce(joinObj, {})
}

const cx = obj => n => obj[n] || n

const properties = {
  font: 'fontFamily'
}
