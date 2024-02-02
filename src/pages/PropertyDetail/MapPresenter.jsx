import Map from '@/components/Map/Map';
import { useProperty } from '@/hooks/useProperty';

export default function MapPresenter({ id }) {
	const { property, isLoading } = useProperty({ id });

	if (isLoading) return <div>loading...</div>;

	const { location } = property;
	return (
		<div>
			<h2>{location.address}</h2>
			<Map
				{...location}
				marker={
					'https://frtassets.fotocasa.es/statics/img/detail_map_marker.png'
				}
			/>
		</div>
	);
}
