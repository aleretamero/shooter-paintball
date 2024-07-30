import Image from 'next/image';
import ReactBootstrapCarousel from 'react-bootstrap/Carousel';

interface CarouselProps {
  images: {
    src: string | any;
    alt: string;
  }[];
}

export function Carousel({ images }: CarouselProps) {
  return (
    <ReactBootstrapCarousel style={{ height: '100%', width: '100%' }}>
      {images.map((image, index) => (
        <ReactBootstrapCarousel.Item
          key={index}
          style={{ height: '100%', width: '100%', backgroundColor: 'red' }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1920}
            height={1080}
            style={{ objectFit: 'cover' }}
          />
        </ReactBootstrapCarousel.Item>
      ))}
    </ReactBootstrapCarousel>
  );
}
