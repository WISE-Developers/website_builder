import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div id="header">
      <Link to="/" id="left">
        <img src="/images/logo_fgm.png" alt="FireGrowthModel.ca" />
      </Link>
      <h1 id="left">Ahead of Wildland Fire</h1>
    </div>
  );
};

export default Header;