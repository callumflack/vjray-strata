import styled from 'styled-components'
import theme from '../theme'
import { SmallText } from './Text'
import Button from './Button'
import { IconDownload } from './Icons'

const Image = styled('img')`
  box-shadow:
    0 16px 24px 2px rgba(0,0,0,0.18),
    0 6px 30px 5px rgba(0,0,0,0.12),
    0 8px 10px -5px rgba(0,0,0,0.30);
`

export default (props) => (
  <div>
    <a href='#'>
      <Image src='static/img/guide-pdf-placeholder.jpg' />
    </a>
    <SmallText
      align='center'
      font='textRegular'
      letterSpacing='button'
      mt={3}>
      <Button clean color='white'>
        {props.icon && <IconDownload bottom mr={1} />}
        {props.children || 'Download'}
      </Button>
    </SmallText>
  </div>
)