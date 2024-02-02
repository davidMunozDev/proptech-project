import styled from 'styled-components';

const StyledSelect = styled.select`
	height: 32px;
	margin: 0 4px;
	border: 1px solid var(--brand-color_2);
	border-radius: 4px;
	color: var(--brand-color_2);
`;

export default function Select({ placeholder, options, ...props }) {
	return (
		<StyledSelect {...props}>
			<option disabled value=''>
				{placeholder}
			</option>
			{options?.map(({ value, name }, index) => (
				<option key={index} value={value}>
					{name}
				</option>
			))}
		</StyledSelect>
	);
}
