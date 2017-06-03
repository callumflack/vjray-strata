import styled, {css} from 'styled-components';

const Container = styled.div`
	--width: 960px;

	margin: auto;
	max-width: calc(var(--width));

	${props => props.small && css`
		--width: 700px;
	`}

	${props => props.large && css`
		--width: 1200px;
	`}
`;

export default Container;
