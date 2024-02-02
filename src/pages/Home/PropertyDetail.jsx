import { TYPE_OF_PROPERTIES } from '@/config';
import { localizeNumber } from '@/utils/Number';

export default function PropertyDetail({ property }) {
	const { price, property_type, location, area, bathrooms } = property;

	return (
		<div>
			<div>
				<h2>
					{TYPE_OF_PROPERTIES[property_type - 1]} desde {localizeNumber(price)}
				</h2>
				<p>{location.address}</p>
				<p>
					Vivienda de {area} m² con {bathrooms} baños.
				</p>
			</div>
		</div>
	);
}
