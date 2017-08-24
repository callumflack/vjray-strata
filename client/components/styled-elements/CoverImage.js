import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

import styled, { css } from 'styled-components'
import { Box } from '../styled-grid';

// bg-pos is set via a styled-component prop
const Root = styled(Box)`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  ${props => props.listening && css`
    background-position: 35% 100%;
    @media (min-width: 1024px) { background-position-x: 100%; }
    @media (min-width: 1280px) { background-position-x: 85%; }
    @media (min-width: 1536px) { background-position-x: 66%; }

    @media (min-width: 1280px) { background-size: contain !important; }
  `}
`

// data-bg is for cloudinary

class CoverImage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '',
    }
  }

  componentDidMount() {
    const baseUrl = 'https://res.cloudinary.com/pw-img-cdn/image/fetch'
    const calcImageDimension = (length, pixelRatio) => 100 * Math.round(length * pixelRatio / 100)

    const image = ReactDOM.findDOMNode(this._image)
    const { clientWidth, clientHeight } = image
    const pixelRatio = window.devicePixelRatio || 1.0

    const imageWidth = calcImageDimension(clientWidth, pixelRatio)
    const imageHeight = this.props.square ? imageWidth : calcImageDimension(clientHeight, pixelRatio)

    const gPosition = this.props.face ? 'g_face' : 'g_center'
    const imageParams = `w_${imageWidth},h_${imageHeight},c_fill,${gPosition},f_auto`
    const url = `${baseUrl}/${imageParams}/${this.props.src}`

    this.setState({
      url: `url('${url}')`,
    });
  }

  render() {
    return (
      <Root
        ref={(ref) => this._image = ref}
        url={this.state.url}
        style={{
          backgroundImage: this.state.url
        }}
        {...props}
      />
    )
  }
}

CoverImage.propTypes = {
  src: PropTypes.string.isRequired,
  square: PropTypes.bool,
  face: PropTypes.bool,
};

CoverImage.defaultProps = {
  square: false,
  face: false,
};

export default CoverImage;