import React from 'react';
import ReactDOM from 'react-dom';

import styled, { css } from 'styled-components';
import { Flex, Box } from '../styled-grid';
import hoc from '../styled-elements/hoc'
import theme from '../theme.js';

import Container from '../styled-elements/Container.js';
import { Text, LineBreak } from '../styled-elements/Text.js';
import { Display, Subheadline  } from '../styled-elements/Headline.js';
import Button from '../styled-elements/Button.js';
import { FlexEmbed } from '../styled-elements/FlexEmbed.js';


const Root = styled(Box)`
  height: ${theme.blockHeights.super};
  height: 80vh;
`;

const StyledBox = styled(Box)`
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

const FullBoxHeight = styled.div`
  height: 100%;
`;

const transition = {
  duration: 0.7,
  delay: 0.4,
  type: 'ease-in-out'
};

const Modal = styled.div`
  background-color: #151515;
  bottom: 0;
  content: " ";
  opacity: 0;
  position: fixed;
  top: 0;
  transition:
    opacity 0s,
    visibility 0s,
    z-index 0s;
  left: 0;
  right: 0;
  visibility: hidden;
  z-index: -1;

  ${props => props.isVisible && css`
    opacity: 1;
    transition:
      opacity ${transition.duration}s ${transition.type} ${transition.delay}s,
      visibility 0s linear ${transition.delay}s,
      z-index 0s linear ${transition.delay}s;
    visibility: visible;
    z-index: 15;
  `}
`;

const VideoIframe = styled.iframe`
  height: 100%;
  width: 100%;
`;

const ModalClose = styled.a`
  --Close-space: 3rem;
  color: #fff;
  content: " ";
  cursor: pointer;
  font-size: 5rem;
  font-family: ${theme.fonts.displayThin};
  line-height: 1;
  position: fixed;
  right: var(--Close-space);
  top: calc( 0.7 * var(--Close-space));
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
          <Flex align='center' style={{ height: '100vh' }}>
            <Container mw='lg' w='1140px'>
              <FlexEmbed ratio='9/16'>
                <VideoIframe
                  ref={(ref) => this.video = ref}
                  data-src='https://www.youtube.com/embed/1QJBUBemFKI?autoplay=1'
                  frameborder='0'
                  allowtransparency='true'
                  webkitallowfullscreen=''
                  mozallowfullscreen=''
                  allowfullscreen=''
                />
              </FlexEmbed>
            </Container>
          </Flex>
        </Modal>

        <FullBoxHeight>
          <StyledBox>

            <Container textCenter relative pt={[ 5, 6 ]}>
              <Subheadline color='text' children='Dependable and effective' />
              <Display color='brandAlt' mb={3}>We help make Sydney <LineBreak m='auto'>strata living great.</LineBreak></Display>
              <Container width={[ 1, 2/3 ]}>
                <Text color='text' mb={3}>This paragraph is about VJ Ray's history in Sydney, how they love Sydney and want to see it progress upwards and stave off housing uncertainty and more pain points that hit customer in the guts.</Text>
                <Text font='textMedium'>
                  <Button color='brandAlt' bg='white' invert icon onClick={this.openModal} children='Watch video' />
                </Text>
              </Container>
            </Container>

          </StyledBox>
        </FullBoxHeight>
      </Root>
    )
  }
}

export default SydneyBox