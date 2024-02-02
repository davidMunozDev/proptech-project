import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from '@/components/Button/Button';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useState } from 'react';

const Controls = styled.div`
	width: 90%;
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	transform: translateY(-50%);
	display: flex;
	justify-content: space-between;
	margin: auto;
	z-index: 10;
`;

const Container = styled.div`
	position: relative;
	width: 100%;
`;

export default function Carousel({ settings, children }) {
	const [sliderRef, setSliderRef] = useState(null);
	const sliderSettings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		lazyLoad: true,
		...settings,
	};
	return (
		<Container>
			{children.length > 1 && (
				<Controls>
					<Button circle onClick={sliderRef?.slickPrev}>
						{'<'}
					</Button>
					<Button circle onClick={sliderRef?.slickNext}>
						{'>'}
					</Button>
				</Controls>
			)}
			<Slider ref={setSliderRef} {...sliderSettings}>
				{children}
			</Slider>
		</Container>
	);
}
