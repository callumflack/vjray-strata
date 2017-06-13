import styled from 'styled-components';

import theme from '../../css/theme.js';

const FeatureList = styled.div`
  margin-top: 4rem;
  display: flex;
`;

const Item = styled.div`
`;

const Title = styled.h4`
  color: ${theme.colors.brand};
  margin-top: 1.5rem;
`;

const Content = styled.p`
  opacity: 0.7;
`;

const Divider = styled.div`
  padding: 0 0.7rem;
  font-size: 3rem;
  font-weight: 100;
  color: ${theme.colors.brand};
`;

const FeatureListWrapper = (props) => (
  <FeatureList>
    <Item>
      <img src='http://lorempixel.com/75/75' />
      <Title>Dedicated & experienced</Title>
      <Content>Tell us about your home and what makes it unique lorem ipsum.</Content>
    </Item>

    <Divider>+</Divider>

    <Item>
      <img src='http://lorempixel.com/75/75' />
      <Title>Navigate the system</Title>
      <Content>Tell us about your home and what makes it unique lorem ipsum.</Content>
    </Item>

    <Divider>+</Divider>

    <Item>
      <img src='http://lorempixel.com/75/75' />
      <Title>Attendance in person</Title>
      <Content>Tell us about your home and what makes it unique lorem ipsum.</Content>
    </Item>

    <Divider>+</Divider>

    <Item>
      <img src='http://lorempixel.com/75/75' />
      <Title>No lock-ins Full access.</Title>
      <Content>Tell us about your home and what makes it unique lorem ipsum.</Content>
    </Item>
  </FeatureList>
);

export default FeatureListWrapper;
