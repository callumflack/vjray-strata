import Link from 'next/link'
import styled from 'styled-components'
import theme from './theme'
import hoc from './Shared/hoc'
import { HeadlineMetaBaseStyles } from './Shared/Headline'
import Button from './Shared/Button'

const Root = hoc('div').extend`
  a {
    background-image: initial;
  }
`

export default (props) =>
  <Root
    {...HeadlineMetaBaseStyles}
    align='center'
    color={props.bgColor || 'white'}
    {...props}
  />