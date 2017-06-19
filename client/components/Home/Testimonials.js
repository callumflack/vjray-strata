import styled from 'styled-components';

import theme from '../../css/theme.js';

const TestimonialsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: left;
`;

const Testimonial = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2.5rem;
  width: 275px;
`;

const Quote = styled.div`
  display: inline-block;
  padding: 1.3rem 2rem;
  margin-bottom: 1.5rem;
  border: 1px solid #dadada;
`;

const Author = styled.div`
  margin: auto;
  display: inline-block;
`;

const AuthorInfo = styled.div`
  display: inline-block;
  margin-left: 1rem;
`;

const Organization = styled.div`
  opacity: ${theme.text.transparent};
`;

const Testimonials = (props) => (
  <TestimonialsWrapper>
    {Array(5).fill(1).map(() =>
    <Testimonial>
      <Quote>Sit sint quae officia asperiores provident, iusto similique Eligendi commodi quaerat provident voluptas sunt aliquam.</Quote>

      <Author>
        <img src='http://lorempixel.com/60/60' />

        <AuthorInfo>
          <div>Dennis Sievers</div>
          <Organization>Campsie</Organization>
        </AuthorInfo>
      </Author>
    </Testimonial>
    )}
  </TestimonialsWrapper>
);

export default Testimonials;
