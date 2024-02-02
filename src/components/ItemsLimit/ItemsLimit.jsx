import { useId, useMemo } from 'react';

import { CARDS_PER_PAGE } from '@/config';
import Select from '@/components/Select/Select';
import { getLimits } from './ItemsLimit.utils';
import styled from 'styled-components';

const Container = styled.div`
	position: fixed;
	bottom: 16px;
	left: 16px;
	z-index: 10;
`;

export default function ItemsLimit({ total, selected, onClick }) {
	const limits = useMemo(() => getLimits(total, CARDS_PER_PAGE));
	const selectId = useId();
	return (
		<Container>
			<label htmlFor={selectId}>Limit:</label>
			<Select
				id={selectId}
				placeholder={'limit'}
				options={limits}
				value={selected}
				onChange={e => onClick(e.target.value)}
			/>
		</Container>
	);
}
