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

    ${props => props.inlineBlock && css`
      display: inline-block;
    `}

    ${props => props.letterSpacing && css`
      letter-spacing: ${theme.letterSpacing[props.letterSpacing] || theme.letterSpacing.body};
    `}

    ${props => props.lineHeight && css`
      line-height: ${theme.lineHeight[props.lineHeight] || theme.lineHeight.text};
    `}

    ${props => props.align && css`
      text-align: ${[props.align]};
    `}

    ${props => props.uppercase && css`
      text-transform: uppercase;
    `}
  `

  return SystemComponent
}