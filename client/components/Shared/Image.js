import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import theme from '../theme.js';
import { Box } from '../styled-grid';


/*
 * Pin is a wrapper used to position the img responsively.
 */

const Pin = styled(Box)`
  bottom: 0;
  display: flex;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
`

const Root = styled('img')`
  align-self: flex-end;
  display: flex;
  height: 100%;
  margin-left: auto;
  max-width: initial;

  ${props => props.listening && css`
    margin-left: -45%;
    @media (min-width: 768px)  { margin-left: -10%; }
    @media (max-height: 1000px) and (min-width: 1024px) { margin-left: auto; }
    @media (min-width: 1280px) { margin-left: auto; margin-right: 10%; }
    @media (min-width: 1536px) { margin-right: 0; }
    @media (min-width: 1800px) { margin-right: 5%; }
    @media (min-width: 2000px) { margin-right: 20%; }
  `}

  ${props => props.contact && css`
    margin-left: -45%;
    @media (min-width: 768px)  { margin-left: -20%; }
    @media (max-height: 1000px) and (min-width: 1024px) { margin-left: auto; }
    @media (min-width: 1280px) { margin-left: auto; margin-right: 10%; }
    @media (min-width: 1536px) { margin-right: 5%; }
    @media (min-width: 1800px) { margin-right: 12%; }
    @media (min-width: 2000px) { margin-right: 13%; }
    @media (min-width: 2250px) { margin-right: 20%; }
  `}






  ${props => props.who && css`
  `}

  ${props => props.what && css`
  `}

  ${props => props.emergency && css`
  `}
`

const Image = props => (
  <Pin>
    <Root {...props} src={props.src} />
  </Pin>
)


export default Image;