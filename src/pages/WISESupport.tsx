import Banner from '../components/Banner';
import '../styles/WISESupport.css';

const WISESupport = () => {
  return (
    <div>
      <Banner title="W.I.S.E." imageSrc="/images/wise_banner.png" />
      
      <div className="content">
        <h1>Technical Support</h1>
        
        <div className="support-container">
          <p>
            Contact the project via{' '}
            <a 
              href="https://github.com/WISE-Developers/Project_issues/issues/new?assignees=spydmobile%2Cnealmcloughlin%2CBadgerOnABike&labels=Communication+Required&template=project_contact_form.yml&title=%5BContact%5D+Re%3A+WISE" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img className="invertedColor" width="20px" src="/images/240px-Octicons-mark-github.svg.png" alt="GitHub" />
              GitHub
            </a>
          </p>

          <h2>Community Support</h2>
          <p>W.I.S.E. is an open-source project with an active community of users and developers. There are several ways to get support:</p>
          
          <h3>Discord Community</h3>
          <p>Join our Discord community for real-time discussions, questions, and support:</p>
          
          <div className="discord-container">
            <a href='https://discord.gg/HTfn6MGyCb' target="_blank" rel="noopener noreferrer">
              <img id="wise-logo" src="/images/wise_logo.png" height="50px" alt="W.I.S.E. logo" />
              <img id="discord-logo" src="/images/Discord-Logo.png" height="50px" alt="Discord logo" />
            </a>
          </div>
          
          <h3>GitHub Issues</h3>
          <p>For bug reports, feature requests, and technical issues, please use the GitHub issue tracker:</p>
          <ul>
            <li><a href="https://github.com/WISE-Developers/WISE_Application/issues" target="_blank" rel="noopener noreferrer">W.I.S.E. Application Issues</a></li>
          </ul>
          
          <h3>Documentation</h3>
          <p>Comprehensive documentation is available on the project wiki:</p>
          <ul>
            <li><a href="https://github.com/WISE-Developers/WISE_Application/wiki" target="_blank" rel="noopener noreferrer">W.I.S.E. Wiki</a></li>
          </ul>
          
          <h2>Professional Support</h2>
          <p>For organizations requiring professional support or custom development services for W.I.S.E., please contact the project team through GitHub or Discord.</p>
          
          <h2>Training</h2>
          <p>Training resources and workshops are occasionally offered by the W.I.S.E. development team and community members. Watch the Discord channel for announcements.</p>
          
          <h2>Contributing</h2>
          <p>W.I.S.E. is an open-source project, and contributions from the community are welcome. If you'd like to contribute, please review the <a href="https://github.com/WISE-Developers/WISE_Application/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">contribution guidelines</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default WISESupport;