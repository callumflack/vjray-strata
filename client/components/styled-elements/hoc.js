const styled = require('styled-components').default
const css = require('styled-components').css
const fontSize = require('../styled-system/font-size')
const width = require('../styled-system/width')
const space = require('../styled-system/space')
const color = require('../styled-system/color')
const theme = require ('../theme').default

// console.log( JSON.stringify(theme, null, 2) );

module.exports = (Component, props) => {
  const SystemComponent = styled(Component)`
    ${fontSize}
    ${width}
    ${space}
    ${color}

    ${props => props.align && css`
      text-align: ${[props.align]};
    `}

    ${props => props.font && css`
      font-family: ${theme.fonts[props.font] || theme.fonts.textLight};
    `}

    ${props => props.inlineBlock && css`
      display: inline-block;
    `}

    ${props => props.letterSpacing && css`
      letter-spacing: ${theme.letterSpacing[props.letterSpacing] || theme.letterSpacing.body};
    `}

    ${props => props.lineHeight && css`
      line-height: ${theme.lineHeight[props.lineHeight] || theme.lineHeight.text};
    `}

    ${props => props.uppercase && css`
      text-transform: uppercase;
    `}
  `

  return SystemComponent
}