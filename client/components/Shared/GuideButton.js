import styled from 'styled-components'
import theme from '../theme'
import { SmallText } from '../styled-elements/Text'
import Button from '../styled-elements/Button'
import { IconDownload } from '../styled-elements/Icons'
import { ImageWithShadow } from './ImageWithShadow'

export default (props) => (
  <div>
    <a href='#'>
      <ImageWithShadow src='static/img/guide-pdf-placeholder.jpg' />
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