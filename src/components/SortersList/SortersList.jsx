import { ACTIONS_CONFIG } from '@/config';
import Sorter from './Sorter';
import styled from 'styled-components';

const SorterContainer = styled.header`
	position: fixed;
	display: flex;
	width: 100%;
	background: #ffffff;
	padding: 16px;
	justify-content: center;
	top: 0;
	left: 0;
	z-index: 10;
`;
export default function SortersList() {
	return (
		<SorterContainer>
			{ACTIONS_CONFIG.map((sorterConfig, index) => (
				<Sorter key={index} config={sorterConfig} />
			))}
		</SorterContainer>
	);
}
