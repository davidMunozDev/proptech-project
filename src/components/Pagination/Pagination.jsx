import Button from '@/components/Button/Button';
import { processPaginationConfig } from '@/components/Pagination/Pagination.utils';
import styled from 'styled-components';

const PaginationContainer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background: #ffffff;
	height: 64px;
	position: fixed;
	bottom: 0;
	left: 0;
`;

export default function Pagination({ currentPage, onClick, config }) {
	const { prev, pages, next } = processPaginationConfig(config);

	return (
		<PaginationContainer>
			{prev && <Button onClick={() => onClick(prev)}>prev</Button>}
			{pages?.map(page => (
				<Button
					key={page}
					disabled={currentPage === page}
					onClick={() => onClick(page)}
				>
					{page}
				</Button>
			))}
			{next && <Button onClick={() => onClick(next)}>next</Button>}
		</PaginationContainer>
	);
}
