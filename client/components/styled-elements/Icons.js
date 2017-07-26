import styled, { css } from 'styled-components'
import hoc from '../styled-elements/hoc'
import theme from '../theme'

// https://codepen.io/sdras/pen/a3596da23d8f9463079ac57c8e3ee9f8?editors=1010
// https://github.com/zeit/next.js/tree/master/examples/svg-components

const Icon = hoc('span').extend`
  display: inline-block;
  line-height: 1;
  position: relative;
  text-align: center;

  > svg {
    --Icon-vertical-align: baseline;
    fill: currentColor;
    vertical-align: var(--Icon-vertical-align);
  }

  ${props => props.color && css`
    color: ${theme.colors[props.color] || 'currentColor'};
  `}

  ${props => props.contact && css`
    margin: 0 9px 0 3px;

    > svg {
      --Icon-vertical-align: bottom;
    }
  `}

  ${props => props.bottom && css`
    > svg {
      --Icon-vertical-align: bottom;
    }
  `}
`

const IconLogo = props => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="57" viewBox="0 0 90 57" aria-labelledby="title">
      <title id="title">VJ Ray</title>
      <rect fill="none" width="90" height="57"/>
      <path d="M44.85,0,.1,27.16l-.1.19H11.12l.1,10.25,67.67.1V27.55L90,27.45ZM25.23,32.87c-2.14.4-1.47-2.38-.48-3.09h.58l.58.48A2.22,2.22,0,0,1,25.23,32.87Zm.48-13.24L21.46,33.06l-2.9.1L16,21.65l2.22-1.45,1.64,8.31v.19H20l3.77-12L27,14.79C27.19,15.1,26,18.78,25.71,19.62Zm4.16,10.92-.29-4.93L31.42,24l.29-.1c.73,2.95-.85,4.63,1.55,6.19,2.57-.2,2.13-2.71,2.13-5.41l.1-14.89L38.09,8l.1,5.7c0,4.53.77,14.7-1.16,17.3C35.35,33.3,31.06,33.42,29.87,30.55Zm9.76,2.32a1.43,1.43,0,0,1-1.16-2.22c.22-.47.44-.52.87-.77a1.6,1.6,0,0,1,1.16.77A1.72,1.72,0,0,1,39.63,32.87Zm13.44.1H50.75c-.67-1.8-2-10-3.38-10.34l-.19,10.25-2.42.1.1-28.81C48.74,6.1,54,8.74,52.59,15.27a8.23,8.23,0,0,1-2.42,4.83l2.9,12.57Zm10.54,0-1.55-6.09h-4l-1.74,6a5.79,5.79,0,0,1-2.22.19L54,33l5.7-19.82c2.73,1.34,2.3,2.68,3.09,5.8l3.29,14.11Zm8.12-5.22L71.54,33H69.12c0-7.46-1.77-11.09-3.77-16.43l2.9,1.74,2.32,6.28,1.74-3.67a4.12,4.12,0,0,1,2,1.16C74,24.15,72.35,25.86,71.73,27.74ZM47.27,8.6V19h.1a6.67,6.67,0,0,0,1.93-8.6C48.84,9.57,48.45,8.77,47.27,8.6Zm13,10.92-1.35,4.83h2.61l-1.06-4.83ZM22.13,47.9H25v8.55h3.09V47.9h2.84V45.08H22.13Zm49-2.83L66.77,56.46h3.41l.7-2.13h3.89l.7,2.13h3.41L74.48,45.08Zm.49,6.81,1.17-3.56L74,51.89Zm-53.35-2L16,48.67c-.47-.24-.6-.41-.6-.62s.21-.42.7-.42a5.41,5.41,0,0,1,2.78.91l1.33-2.75a8.56,8.56,0,0,0-3.89-1c-2.86,0-4.28,1.41-4.28,3.45a3.45,3.45,0,0,0,2,3.22l2.49,1.25c.36.18.55.33.55.6s-.36.5-1,.5a6.15,6.15,0,0,1-3.56-1.4l-1.41,3A9.66,9.66,0,0,0,16,56.7c2.91,0,4.47-1.27,4.47-3.61A3.3,3.3,0,0,0,18.31,49.87Zm24.35-1.06c0-2-1.28-3.74-4.29-3.74H33.5V56.46h3.09V52.23l2.93,4.23h3.85l-3.15-4.23A3.41,3.41,0,0,0,42.66,48.81Zm-4.71,1.43H36.59V47.81h1.35c.94,0,1.51.36,1.51,1.2S38.89,50.25,37.94,50.25ZM57.59,47.9h2.84v8.55h3.09V47.9h2.84V45.08H57.59Zm-8.11-2.83L45.07,56.46h3.41l.7-2.13h3.89l.7,2.13h3.41L52.78,45.08ZM50,51.89l1.17-3.56,1.15,3.56Z"/>
    </svg>
  </Icon>
)

const IconSun = function IconSun(props) {
  const fill = props.fill || theme.colors.brand

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" aria-labelledby="title">
      <title id="title">Sun</title>
      <path fill={fill} d="M37.16,0H34.84V9.28h2.32Zm6.1,5.47L41,5l-.91,4.56,2.28.45ZM31.93,9.57,31,5l-2.28.45L29.65,10ZM50.85,3.19,48.7,2.3l-3.56,8.59,2.15.88Zm-28.73,10L19.54,9.28l-1.93,1.29,2.58,3.87Zm-7.68,7-3.86-2.58L9.28,19.55l3.86,2.58ZM11.76,24.7,3.19,21.15,2.3,23.3l8.59,3.56Zm6.16-8.41L11.36,9.73,9.72,11.37l6.56,6.56Zm48.6,27L67,41l-4.56-.91L62,42.35Zm0-14.51L62,29.65l.45,2.28L67,31Zm-5.41-1.89L69.7,23.3l-.89-2.15L60.24,24.7ZM36,13.89A22.11,22.11,0,1,0,58.11,36,22.14,22.14,0,0,0,36,13.89Zm0,41.9A19.79,19.79,0,1,1,55.79,36,19.8,19.8,0,0,1,36,55.79ZM55.7,17.93l6.56-6.56L60.63,9.72l-6.56,6.56Zm-3.9-3.49,2.58-3.87L52.46,9.28l-2.58,3.87Zm5.76,5.75,1.29,1.93,3.87-2.58-1.29-1.93Zm-30.7-9.31L23.3,2.3l-2.15.89,3.56,8.57Zm23,48,2.58,3.87,1.93-1.29-2.58-3.87ZM5.47,28.74,5,31l4.56.91L10,29.65Zm48.59,27,6.56,6.56,1.64-1.64L55.7,54.07Zm-14,6.71L41,67l2.28-.45L42.35,62ZM34.84,72h2.32V62.72H34.84ZM62.72,34.84v2.32H72V34.84Zm-5.16,17,3.86,2.58,1.29-1.93-3.86-2.58Zm2.68-4.51,8.57,3.56.89-2.15-8.59-3.56ZM45.15,61.12,48.7,69.7l2.15-.89L47.3,60.23ZM14.44,51.8l-1.29-1.93L9.28,52.45l1.29,1.93Zm-5.16-17H0v2.32H9.28Zm1.6,10.31L2.29,48.71l.89,2.15,8.59-3.56ZM28.74,66.53,31,67l.91-4.56L29.65,62ZM5,41l.45,2.28L10,42.35l-.45-2.28ZM21.16,68.82l2.15.89,3.55-8.58-2.15-.89Zm-1-11.26-2.58,3.87,1.93,1.29,2.58-3.87Zm-3.91-3.49L9.72,60.63l1.64,1.64,6.56-6.56Z"/>
    </svg>
  )
}

const IconDownload = props => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" aria-labelledby="title">
      <title id="title">Download</title>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>
  </Icon>
)

const IconContact = props => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-labelledby="title">
      <title id="title">Contact</title>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/>
    </svg>
  </Icon>
)

const IconPhone = props => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-labelledby="title">
      <title id="title">Phone</title>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  </Icon>
)

const IconEmergency = props => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-labelledby="title">
      <title id="title">Emergency</title>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"/>
    </svg>
  </Icon>
)

const IconEmail = props => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-labelledby="title">
      <title id="title">Email</title>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  </Icon>
)

const IconAddress = props => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-labelledby="title">
      <title id="title">Address</title>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
    </svg>
  </Icon>
)

const IconOpen = props => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-labelledby="title">
      <title id="title">Opening hours</title>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>
    </svg>
  </Icon>
)

export {
  IconLogo,
  IconSun,
  IconDownload,
  IconContact,
  IconPhone,
  IconEmail,
  IconAddress,
  IconOpen,
  IconEmergency
}