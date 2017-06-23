import styled, { css } from 'styled-components'
import { hoc } from '../styled-system/styled-components'
import theme from '../theme'

// https://codepen.io/sdras/pen/a3596da23d8f9463079ac57c8e3ee9f8?editors=1010

const Icon = hoc('span').extend`
  display: inline-block;
  fill: currentColor;
  line-height: 1;
  position: relative;
  text-align: center;
  vertical-align: baseline;

`

const IconSun = function IconSun(props) {
  const fill = props.fill || theme.colors.brand

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" aria-labelledby="title">
      <title id="title">Sun</title>
      <path fill={fill} d="M37.16,0H34.84V9.28h2.32Zm6.1,5.47L41,5l-.91,4.56,2.28.45ZM31.93,9.57,31,5l-2.28.45L29.65,10ZM50.85,3.19,48.7,2.3l-3.56,8.59,2.15.88Zm-28.73,10L19.54,9.28l-1.93,1.29,2.58,3.87Zm-7.68,7-3.86-2.58L9.28,19.55l3.86,2.58ZM11.76,24.7,3.19,21.15,2.3,23.3l8.59,3.56Zm6.16-8.41L11.36,9.73,9.72,11.37l6.56,6.56Zm48.6,27L67,41l-4.56-.91L62,42.35Zm0-14.51L62,29.65l.45,2.28L67,31Zm-5.41-1.89L69.7,23.3l-.89-2.15L60.24,24.7ZM36,13.89A22.11,22.11,0,1,0,58.11,36,22.14,22.14,0,0,0,36,13.89Zm0,41.9A19.79,19.79,0,1,1,55.79,36,19.8,19.8,0,0,1,36,55.79ZM55.7,17.93l6.56-6.56L60.63,9.72l-6.56,6.56Zm-3.9-3.49,2.58-3.87L52.46,9.28l-2.58,3.87Zm5.76,5.75,1.29,1.93,3.87-2.58-1.29-1.93Zm-30.7-9.31L23.3,2.3l-2.15.89,3.56,8.57Zm23,48,2.58,3.87,1.93-1.29-2.58-3.87ZM5.47,28.74,5,31l4.56.91L10,29.65Zm48.59,27,6.56,6.56,1.64-1.64L55.7,54.07Zm-14,6.71L41,67l2.28-.45L42.35,62ZM34.84,72h2.32V62.72H34.84ZM62.72,34.84v2.32H72V34.84Zm-5.16,17,3.86,2.58,1.29-1.93-3.86-2.58Zm2.68-4.51,8.57,3.56.89-2.15-8.59-3.56ZM45.15,61.12,48.7,69.7l2.15-.89L47.3,60.23ZM14.44,51.8l-1.29-1.93L9.28,52.45l1.29,1.93Zm-5.16-17H0v2.32H9.28Zm1.6,10.31L2.29,48.71l.89,2.15,8.59-3.56ZM28.74,66.53,31,67l.91-4.56L29.65,62ZM5,41l.45,2.28L10,42.35l-.45-2.28ZM21.16,68.82l2.15.89,3.55-8.58-2.15-.89Zm-1-11.26-2.58,3.87,1.93,1.29,2.58-3.87Zm-3.91-3.49L9.72,60.63l1.64,1.64,6.56-6.56Z"/>
    </svg>
  )
}

const IconContact = props => (
  <Icon {...props}>
    <svg Style xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-labelledby="title">
      <title id="title">Sun</title>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path fill="currentColor" d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/>
    </svg>
  </Icon>
)

export { IconSun, IconContact };