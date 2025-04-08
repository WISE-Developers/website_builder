import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div>
      <Banner title="Page Not Found" imageSrc="/images/main_banner.jpg" />
      
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <p>Please try the following:</p>
        <ul>
          <li>Check that the URL you typed in your browser is correct.</li>
          <li>If you reached this page by clicking a link, please contact the website administrator.</li>
          <li>Return to the <Link to="/">Home Page</Link>.</li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
