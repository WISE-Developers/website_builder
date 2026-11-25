// import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <ul>
        <li id="left"><a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }}>Top of Page</a></li>
        <li className="right" id="footer-date">Site Last Updated: 2026-11-25 3pm MST</li>
      </ul>
    </div>
  );
};

export default Footer;