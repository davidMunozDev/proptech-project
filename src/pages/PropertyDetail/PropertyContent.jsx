import { TYPE_OF_PROPERTIES } from '@/config';
import { localizeNumber } from '@/utils/Number';

export default function PropertyContent({ property }) {
	const { price, property_type, location, rooms, area, bathrooms } = property;

	return (
		<div>
			<div>
				<h1>{TYPE_OF_PROPERTIES[property_type]}</h1>
				<h2>Promoción desde {localizeNumber(price)}</h2>
				<p>{location.address}</p>
				<div>
					<p>Habitaciones </p>
					<strong>{rooms}</strong>
				</div>
				<div>
					<p>Baños </p>
					<strong>{bathrooms}</strong>
				</div>
				<div>
					<p>Superficie </p>
					<strong>{area} m²</strong>
				</div>
			</div>
		</div>
	);
}
