//import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Image from './Image';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <Image src="/images/logo_fgm.png" alt="FireGrowthModel.ca" />
        </a>
      </div>
    </header>
  );
};

export default Header;