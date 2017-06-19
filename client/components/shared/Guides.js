import styled from 'styled-components';

import theme from '../../css/theme.js';
import {
  Text,
} from '../shared/Text.js';

const GuidesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: left;
  margin-top: 4rem;
`;

const Guide = styled.div`
  width: 175px;
  box-shadow: 0 0 15px #aaa;
`;

const GuideHead = styled.div`
  padding: 0.5rem 0.8rem;
`;

const Icon = styled.div`
  text-align: right;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Guides = (props) => (
  <GuidesWrapper>
    {Array(3).fill(1).map(() =>
    <Guide>
      <GuideHead>
        <Icon>&#8486;</Icon>
        <Text brand>Maintaining your strata asset</Text>
      </GuideHead>

      <Image src='http://lorempixel.com/100/100' />
    </Guide>
    )}
  </GuidesWrapper>
);

export default Guides;
