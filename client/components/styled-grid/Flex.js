import React from 'react'
import styled from 'styled-components'
import { responsiveStyle } from '../styled-system'
import Box from './Box'

const align = props => props.align ? `align-items:${props.align};` : null
const justify = props => props.justify ? `justify-content:${props.justify};` : null
const order = props => props.order ? `order:${props.order};` : null
const wrap = props => props.wrap ? `flex-wrap:wrap;` : null
const column = props => props.column ? `flex-direction:column;` : null

const Flex = styled(Box)([],
  { display: 'flex' },
  responsiveStyle('flex-direction', 'direction'),
  align,
  justify,
  order,
  wrap,
  column
)

export default Flex
