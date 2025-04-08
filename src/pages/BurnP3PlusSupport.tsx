import Banner from '../components/Banner';
import '../styles/BurnP3PlusSupport.css';

const BurnP3PlusSupport = () => {
  return (
    <div>
      <Banner title="BurnP3+" imageSrc="/images/burnp3_banner.jpg" />
      
      <div className="content">
        <h1>Technical Support</h1>
        
        <div className="support-container">
          <p>
            Contact the project via{' '}
            <a 
              href="https://github.com/BurnP3/BurnP3Plus/issues/new/choose" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img className="invertedColor" width="20px" src="/images/240px-Octicons-mark-github.svg.png" alt="GitHub" />
              GitHub
            </a>
          </p>

          <h1>Technical Support provided by our Community</h1>

          <p>To join our discord community click here:</p>
          
          <div className="discord-container">
            <a href='https://discord.gg/76QzY8eAYr' target="_blank" rel="noopener noreferrer">
              <img src="/images/burnP3Plus-logo.png" height="50px" alt="BurnP3+ logo" />
              <img src="/images/Discord-Logo.png" height="50px" alt="Discord logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurnP3PlusSupport;