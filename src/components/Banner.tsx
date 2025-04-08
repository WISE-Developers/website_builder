import '../styles/Banner.css';

interface BannerProps {
  title: string;
  imageSrc: string;
}

const Banner = ({ title, imageSrc }: BannerProps) => {
  return (
    <div id="banner">
      <img src={imageSrc} alt={`${title} banner`} />
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;