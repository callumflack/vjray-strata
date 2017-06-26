const styled = require('styled-components').default
const css = require('styled-components').css
const fontSize = require('../font-size')
const fontFamily = require('../font-family')
const width = require('../width')
const space = require('../space')
const color = require('../color')
const theme = require ('../../theme').default

// console.log( JSON.stringify(theme, null, 2) );

module.exports = (Component, props) => {
  const SystemComponent = styled(Component)`
    ${fontSize}
    ${fontFamily}
    ${width}
    ${space}
    ${color}

    ${props => props.lineHeight && css`
        line-height: ${theme.lineHeight[props.lineHeight]};
    `}
  `

  return SystemComponent
}