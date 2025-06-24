// import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <ul>
        <li id="left"><a href="#top">Top of Page</a></li>
        <li className="right" id="footer-date">Site updated: 2025-06-24</li>
      </ul>
    </div>
  );
};

export default Footer;