import Card from '@/components/Card/Card';
import { Link } from 'wouter';
import PropertyDetail from './PropertyDetail';
import styled from 'styled-components';

const Layout = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
	grid-template-rows: auto;
	gap: 24px;
`;

export default function PropertiesContainer({ properties, isLoading }) {
	const getPropertyLink = (type, id) => `/vivienda/${type}/${id}`;

	return (
		<Layout>
			{!isLoading ? (
				<>
					{properties?.map(property => (
						<Link
							key={property.id}
							to={getPropertyLink(property.property_type, property.id)}
						>
							<article>
								<Card
									vertical
									images={[property.images[0]]}
									content={<PropertyDetail property={property} />}
								/>
							</article>
						</Link>
					))}
				</>
			) : (
				<p>loading...</p>
			)}
		</Layout>
	);
}
