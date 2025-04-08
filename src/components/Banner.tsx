import '../styles/Banner.css';
import Image from './Image';

interface BannerProps {
  title: string;
  imageSrc: string;
}

const Banner = ({ title, imageSrc }: BannerProps) => {
  return (
    <div id="banner">
      <Image src={imageSrc} alt={`${title} banner`} />
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;