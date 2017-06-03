import styled, {css} from 'styled-components';

const Anchor = styled.a`
	${props => props.bordered && css`
		display: inline-block;
		padding: 0.8rem 2rem;
		color: inherit;
		border: 1px solid currentColor;
		border-radius: 30px;
	`}

	${props => props.vSpace && css`
		:not(:last-child) {
			margin-right: 1.5rem;
		}
	`}
`;

export default Anchor;
