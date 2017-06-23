import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { Flex, Box } from '../styled-grid';
import { hoc } from '../styled-system/styled-components'
import theme from '../theme.js';

import Container from '../shared/Container.js';
import { Text, LineBreak } from '../shared/Text.js';
import { Display, Subheadline  } from '../shared/Headline.js';
import Button from '../shared/Button.js';


const Root = styled(Box)`
  height: 75vh;
  position: relative;
`;

const Background = styled(Box)`
  background-image: url('static/img/home-sydney.jpg');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${theme.colors.text70};
  height: 100%;
  width: 100%;

  &:before {
    background: rgba(247, 242, 236, 0.2);
    background-blend-mode: multiply;
    bottom: 0;
    content: " ";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const VideoIframe = styled.iframe`
  border: 0;
  height: 100%;
  width: 100%;

  bottom: 0;
  content: " ";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: 0.7s opacity;

  ${props => !props.isVisible && css`
    opacity: 0;
  `}
`;


class SydneyBox extends React.Component {
  constructor(props) {
    super(props);

    this.triggerVideo = this.triggerVideo.bind(this);

    this.state = {
      contentIsVisible: true,
    };
  }

  triggerVideo(event) {
    event.preventDefault();

    const videoRef = this.video;
    const videoIframe = ReactDOM.findDOMNode(videoRef);
    videoIframe.setAttribute('src', videoRef.props['data-src']);

    this.setState({
      contentIsVisible: false
    });
  }

  render() {
    return (
      <Root px={0}>
        <VideoIframe ref={(ref) => this.video = ref} data-src='https://www.youtube.com/embed/ijrkKNZRIfM?autoplay=1' frameborder='0' allowtransparency='true' webkitallowfullscreen='' mozallowfullscreen='' allowfullscreen='' />

        <Content isVisible={this.state.contentIsVisible}>
          <Background center textCenter width={1}>

            <Container textCenter relative pt={[ 5, 6 ]}>
              <Subheadline>Dependable and effective</Subheadline>
              <Display>We help make high-density <LineBreak m='auto'>Sydney living great.</LineBreak></Display>
              <Container width={[ 1, 2/3 ]}>
                <Text color='brand' mb={3}>This paragraph is about VJ Ray's history in Sydney, how they love Sydney and want to see it progress upwards and stave off housing uncertainty and more pain points that hit customer in the guts.</Text>
                <Text medium>
                  <Button color='brand' invert icon onClick={this.triggerVideo}>Watch video</Button>
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