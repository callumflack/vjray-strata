import React from 'react';
import ReactDOM from 'react-dom';

import styled, { css } from 'styled-components';
import { Flex, Box } from '../styled-grid';
import { hoc } from '../styled-system/styled-components'
import theme from '../theme.js';

// import HeroBox from '../Shared/HeroBox.js';
import Container from '../styled-elements/Container.js';
import { Text, LineBreak } from '../styled-elements/Text.js';
import { Display, Subheadline  } from '../styled-elements/Headline.js';
import Button from '../styled-elements/Button.js';


const Root = styled(Box)`
  height: 70vh;
`;

const Background = styled(Box)`
  background-image: url('static/img/home-sydney.jpg');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${theme.colors.text70};
  height: 100%;
  width: 100%;

  @media (min-width: 1536px) {
    background-position-y: 90%;
  }

  ${'' /* &:before {
    background: rgba(247, 242, 236, 0.2);
    background-blend-mode: multiply;
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  } */}
`;

const Modal = styled.div`
  position: fixed;
  content: " ";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity 0.7s 0.4s;
  opacity: 0;
  visibility: hidden;

  ${props => props.isVisible && css`
    z-index: 15;
    transition: opacity 0.3s, visibility 0s 0.3s;
    opacity: 1;
    visibility: visible;
  `}
`;

const VideoIframe = styled.iframe`
  border: 0;
  height: 100%;
  width: 100%;
`;

const ModalClose = styled.a`
  position: fixed;
  content: " ";
  line-height: 1;
  top: 3rem;
  right: 3rem;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  ${'' /* bottom: 0;
  content: " ";
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%; */}
`;


class SydneyBox extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      contentIsVisible: true,
    };
  }

  openModal(event) {
    event.preventDefault();

    const videoRef = this.video;
    const videoIframe = ReactDOM.findDOMNode(videoRef);
    videoIframe.setAttribute('src', videoRef.props['data-src']);

    this.setState({
      contentIsVisible: false
    });
  }

  closeModal(event) {
    event.preventDefault();
    const videoRef = this.video;
    const videoIframe = ReactDOM.findDOMNode(videoRef);
    videoIframe.setAttribute('src', '');

    this.setState({
      contentIsVisible: true
    });
  }

  render() {
    return (
      <Root>
        <Modal isVisible={!this.state.contentIsVisible} >
          <ModalClose onClick={this.closeModal} href='#'>&times;</ModalClose>
          <VideoIframe
            ref={(ref) => this.video = ref}
            data-src='https://www.youtube.com/embed/ijrkKNZRIfM?autoplay=1'
            frameborder='0'
            allowtransparency='true'
            webkitallowfullscreen=''
            mozallowfullscreen=''
            allowfullscreen=''
          />
        </Modal>

        <Content isVisible={this.state.contentIsVisible}>
          <Background center textCenter width={1}>

            <Container textCenter relative pt={[ 5, 6 ]}>
              <Subheadline color='brandAlt'>Dependable and effective</Subheadline>
              <Display color='brandAlt'>We help make high-density <LineBreak m='auto'>Sydney living great.</LineBreak></Display>
              <Container width={[ 1, 2/3 ]}>
                <Text color='text' mb={3}>This paragraph is about VJ Ray's history in Sydney, how they love Sydney and want to see it progress upwards and stave off housing uncertainty and more pain points that hit customer in the guts.</Text>
                <Text font='textMedium'>
                  <Button color='brandAlt' bg='white' invert icon onClick={this.openModal}>Watch video</Button>
                </Text>
              </Container>
            </Container>

          </Background>
        </Content>
      </Root>
    )
  }
}

export default SydneyBox