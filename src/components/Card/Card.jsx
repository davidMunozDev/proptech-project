import Carousel from '@/components/Carousel/Carousel';
import styled from 'styled-components';

const Layout = styled.div`
	display: flex;
	width: 100%;
	flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
	max-height: ${({ vertical }) => (vertical ? '100%' : '460px')};
	background-color: #f4f4fb;
	border-radius: 16px;
	overflow: hidden;
	box-shadow: 0 3px 15px 0 rgb(0 0 0 / 16%);
	cursor: pointer;
`;

const CarouselContainer = styled.div`
	width: ${({ vertical }) => (vertical ? '100%' : '66%')};
`;

const StyledImg = styled.img`
	display: block;
	object-fit: cover;
	width: 100%;
	height: ${({ vertical }) => (vertical ? '250px' : '460px')};
`;

const ContentContainer = styled.div`
	padding: 24px;
	width: 100%;
`;

export default function Card({ content, images, vertical }) {
	return (
		<Layout vertical={vertical}>
			{images.length > 1 ? (
				<CarouselContainer vertical={vertical}>
					<Carousel>
						{images?.map((img, index) => (
							<div key={`slide-${index}`}>
								<StyledImg
									src={img}
									vertical={vertical}
									alt={`slide ${index}`}
								/>
							</div>
						))}
					</Carousel>
				</CarouselContainer>
			) : (
				<StyledImg src={images[0]} vertical={vertical} alt={'card image'} />
			)}
			<ContentContainer>{content}</ContentContainer>
		</Layout>
	);
}
