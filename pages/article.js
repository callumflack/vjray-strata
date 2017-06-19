import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout.js';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import Guides from '../components/shared/Guides.js';
import Contact from '../components/shared/Contact.js';
import {
  HeaderHr,
  Text,
  Paragraph,
} from '../components/shared/Text.js';


const Hero = styled.div`
  background-color: #F0FAFC;
`;

const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const PostTitle = styled.h1`
  margin-top: 1rem;
`;

const PostDescription = styled(Paragraph)`
`;

const PostInfo = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

const PostImageWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  flex-basis: 0;
  padding: 0 2rem;
  text-align: center;

  img {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    margin: auto;
    max-width: 100%;
  }
`;


class Article extends React.Component {
  render() {
    return (
      <Layout>
        <Hero>
          <Block>
            <FlexContainer>
              <PostInfo>
                <HeaderHr>June 13, 2017</HeaderHr>

                <PostTitle>The five biggest pitfalls to avoid in your Body Corp.</PostTitle>
                <Text transparent>
                  <PostDescription lg>
                    Ipsum ullam illum autem vero incidunt saepe Officia error sit ut veniam veritatis Vero ratione autem magni esse ab In cum rem ex maiores adipisci? Ipsum fugit vero et nam?
                  </PostDescription>
                </Text>
              </PostInfo>

              <PostImageWrapper>
                <img src='http://lorempixel.com/400/300' />
              </PostImageWrapper>
            </FlexContainer>
          </Block>
        </Hero>

        <Block>
          <Container sm>
            <Paragraph>Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Eius asperiores facilis quasi veniam nihil laborum! Nihil suscipit accusantium facilis eum earum. Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
            <Paragraph>Eius asperiores facilis quasi veniam nihil laborum! Nihil suscipit accusantium facilis eum earum. Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</Paragraph>
          </Container>
        </Block>

        <Block>
          <Container sm textCenter>
            <HeaderHr>See all guides and articles</HeaderHr>

            <Guides />
          </Container>
        </Block>

        <Block>
          <Container sm textCenter>
            <Contact />
          </Container>
        </Block>
      </Layout>
    )
  }
}

export default Article;
