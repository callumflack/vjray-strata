import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import styled, { css } from 'styled-components'
import { Box } from '../styled-grid';


const Root = styled(Box)`
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  ${props => props.constrain && css`
    @media (min-width: 1536px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 1600px;
    }
  `}

  ${props => props.listening && css`
    left: 25%;
    @media (min-width: 1024px) { left: 20%; }
    @media (min-width: 1280px) { left: 5%; }
    @media (min-width: 1536px) { left: 10%; }
  `}

  ${props => props.who && css`
    max-width: none;
    @media (min-width: 1024px) { background-position: 50% 50%; }
    @media (min-width: 1280px) { background-position: 50% 50%; }
    @media (min-width: 1536px) { background-position: 30% 100%; }
  `}

  ${props => props.what && css`
    left: 12%;
    @media (min-width: 768px)  { left: 22%; }
    @media (min-width: 1024px) { left: 10%; }
    @media (min-width: 1280px) { left: 5%; }
    @media (min-width: 1800px) { left: 5%; }
  `}

  ${props => props.contact && css`
    left: 12%;
    @media (min-width: 768px)  { left: 22%; }
    @media (min-width: 1024px) { left: 10%; }
    @media (min-width: 1280px) { left: 5%; }
    @media (min-width: 1800px) { left: 20%; }
  `}

  ${props => props.emergency && css`
    left: 12%;
    @media (min-width: 768px)  { left: 22%; }
    @media (min-width: 1024px) { left: 10%; }
    @media (min-width: 1280px) { left: 8%; }
    @media (min-width: 1800px) { left: 8%; }
  `}
`

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
        {...this.props}
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