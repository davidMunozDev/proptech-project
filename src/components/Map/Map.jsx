import { useEffect, useRef, useState } from 'react';

import { API_HERE_KEY } from '@/config';
import H from '@here/maps-api-for-javascript';
import onResize from 'simple-element-resize-detector';
import styled from 'styled-components';

const MapContainer = styled.div`
	position: relative;
	width: 100%;
	height: ${({ height }) => (height ? height : '556px')};
`;

export default function Map({ height, latitude, longitude, marker }) {
	const [map, setMap] = useState(null);
	const mapRef = useRef(null);
	const imgMarker = `
		<img
			src='${marker}'
			width="24"
			height="24"
			alt='marker'
		/>
	`;
	useEffect(() => {
		if (!map) {
			const platform = new H.service.Platform({
				apikey: API_HERE_KEY,
			});
			const layers = platform.createDefaultLayers();
			const map = new H.Map(mapRef.current, layers.vector.normal.map, {
				pixelRatio: window.devicePixelRatio,
				center: { lat: latitude, lng: longitude },
				zoom: 18,
			});
			const icon = new H.map.DomIcon(imgMarker);
			const coords = { lat: latitude, lng: longitude };
			const marker = new H.map.DomMarker(coords, { icon: icon });

			map.addObject(marker);
			onResize(mapRef.current, () => {
				map.getViewPort().resize();
			});
			setMap(map);
		}
	}, []);

	return (
		<div>
			<MapContainer height={height} ref={mapRef} />
		</div>
	);
}
