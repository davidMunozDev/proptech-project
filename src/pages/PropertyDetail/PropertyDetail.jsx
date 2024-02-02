import { Link } from 'wouter';
import MapPresenter from './MapPresenter';
import PageLayout from '@/components/Layout/PageLayout';
import PropertyPresenter from './PropertyPresenter';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	position: absolute;
	top: 24px;
	left: 24px;
	font-size: 32px;
	line-height: 32px;
	&:hover {
		box-shadow: 0 3px 8px 0 rgb(0 0 0 / 16%);
	}
`;

export default function PropertyDetail({ params }) {
	const { id } = params;
	return (
		<>
			<StyledLink to='/'>⬅️</StyledLink>
			<PageLayout>
				<PropertyPresenter id={id} />
				<MapPresenter id={id} />
			</PageLayout>
		</>
	);
}
