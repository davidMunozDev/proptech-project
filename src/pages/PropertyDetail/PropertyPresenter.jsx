import Card from '@/components/Card/Card';
import PropertyContent from './PropertyContent';
import styled from 'styled-components';
import { useProperty } from '@/hooks/useProperty';

const Container = styled.div`
	padding: 0 0 32px;
`;

export default function PropertyPresenter({ id }) {
	const { property, isLoading } = useProperty({ id });

	if (isLoading) return <div>...loading</div>;
	return (
		<Container>
			<Card
				images={property.images}
				content={<PropertyContent property={property} />}
			/>
		</Container>
	);
}
