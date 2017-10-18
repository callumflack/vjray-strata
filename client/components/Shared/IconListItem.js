import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { LargeText, Text, PrimaryButtonText } from './Texts'
import { Button } from './Buttons'
import Icon from './Icon';
import icons from "./iconConstants";

const ItemRoot = styled(Flex)`
  &:last-child {
    margin-bottom: 0;
  }
`

const ItemIcon = styled(Icon)`
  @media (min-width: 768px) {
    transform: translateY(-20px);
  }
`

const IconListItem = (props) => (
  <ItemRoot
    direction={[ 'column', 'row' ]}
    mx={-2}
    mb={[ 3, 4 ]}>
    <Box px={[ 2 ]}>
      <ItemIcon
        color='brand'
        size='90'
        icon={icons[props.item.icon]}
      />
    </Box>
    <Box px={[ 2 ]}>
      <LargeText
        as="h4"
        color='brand'
        family='displayMedium'
        mb={1}
        children={props.item.headline}
      />
      <Text color='text70'>
        {props.item.text}
        {props.item.link &&
          <Link href={props.item.link}><a>Find out more</a></Link>
        }
      </Text>
      {props.item.buttonUrl &&
        <PrimaryButtonText align='left' color='white' mt={2}>
          <Link href={props.item.buttonUrl}>
            <Button large icon color='brand' bgColor='transparent' children={props.item.buttonLabel} />
          </Link>
        </PrimaryButtonText>
      }
    </Box>
  </ItemRoot>
)

export default IconListItem;