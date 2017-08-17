import Link from 'next/link'
import styled from 'styled-components'
import theme from '../theme'
import hoc from '../styled-elements/hoc'
import { HeadlineMetaBaseStyles } from '../styled-elements/Headline'
import Button from '../styled-elements/Button'

const Root = hoc('div').extend``

export default (props) =>
  <Root
    {...HeadlineMetaBaseStyles}
    align='center'
    color={props.bgColor || 'white'}
    {...props}
  />