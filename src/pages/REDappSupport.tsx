import Banner from '../components/Banner';
import '../styles/REDappSupport.css';
import { Link } from 'react-router-dom';
const REDappSupport = () => {
  return (
    <div>
    <Banner title="REDapp" imageSrc="/images/redapp_banner.png" />     
      
      <div className="content">
        <h1>Technical Support</h1>
        
        <div className="support-container">
          <p>
            Contact the project via{' '}
            <a 
              href="https://github.com/WISE-Developers/REDapp/issues/new?assignees=spydmobile%2Cnealmcloughlin%2CBadgerOnABike&labels=Communication+Required&template=redapp_contact_form.yml&title=%5BContact%5D+Re%3A+REDapp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img className="invertedColor" width="20px" src="/images/240px-Octicons-mark-github.svg.png" alt="GitHub" />
              GitHub
            </a>
          </p>

          <h2>Community Support</h2>
          <p>REDapp is an open-source project with an active community of users and developers. There are several ways to get support:</p>
          
          <h3>Discord Community</h3>
          <p>Join our Discord community for real-time discussions, questions, and support:</p>
          
          <div className="discord-container">
            <a href='https://discord.gg/HTfn6MGyCb' target="_blank" rel="noopener noreferrer">
              <img id="redapp-logo" src="/images/redapplogo_129x129.png" height="50px" alt="REDapp logo" />
              <img id="discord-logo" src="/images/Discord-Logo.png" height="50px" alt="Discord logo" />
            </a>
          </div>
          
          <h3>GitHub Issues</h3>
          <p>For bug reports, feature requests, and technical issues, please use the GitHub issue tracker:</p>
          <ul>
            
            <li>
                
                <Link 
                target="_blank" 
                rel="noopener noreferrer" 
                to="https://github.com/WISE-Developers/REDapp/issues/new?assignees=spydmobile&labels=bug%2Ctriage%2CREDapp&projects=&template=redapp_bug_report.yml&title=%5BREDapp+Bug%5D%3A+">REDapp Bug Report</Link>
            </li>
            <li>
            <Link 
                target="_blank" 
                rel="noopener noreferrer" 
                to="https://github.com/WISE-Developers/REDapp/issues/new?assignees=spydmobile&labels=bug%2Ctriage%2CREDapp&projects=&template=redapp_bug_report.yml&title=%5BREDapp+Bug%5D%3A+">REDapp Feature Request</Link>
            </li>
          </ul>
          
         
        </div>
      </div>
    </div>
  );
};

export default REDappSupport;