import styled from 'styled-components';

const StyledButton = styled.button`
	height: 32px;
	background-color: ${({ disabled }) =>
		disabled ? 'var(--brand-color_4)' : 'var(--brand-color_2)'};
	border: none;
	padding: 0 16px;
	color: var(--brand-color_1);
	border-radius: 4px;
	margin: 0 4px;
	cursor: pointer;
	${({ circle }) =>
		circle &&
		`
		display: flex;
		padding: 0;
		align-items: center;
		justify-content: center;
		width: 32px;
		border-radius: 50%;
	`};
`;

export default function Button({ circle, children, ...props }) {
	return (
		<StyledButton circle={circle} {...props}>
			{children}
		</StyledButton>
	);
}
