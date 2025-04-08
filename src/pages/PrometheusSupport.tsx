import Banner from '../components/Banner';
import Image from '../components/Image';
import '../styles/PrometheusSupport.css';

const PrometheusSupport = () => {
  return (
    <div>
      <Banner title="Prometheus" imageSrc="/images/prometheus_banner.jpg" />
      
      <div className="content">
        <div className="support-container">
          <p>
            Contact the project via{' '}
            <a 
              href="https://github.com/WISE-Developers/Project_issues/issues/new?assignees=spydmobile%2Cnealmcloughlin%2CBadgerOnABike&labels=Communication+Required&template=project_contact_form.yml&title=%5BContact%5D+Re%3A+Prometheus" 
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
            <a href='https://discord.gg/HTfn6MGyCb' target="_blank" rel="noopener noreferrer">
              <Image src="/images/logo_prometheus.png" height="100px" alt="Prometheus logo" />
              <Image src="/images/Discord-Logo.png" height="100px" alt="Discord logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrometheusSupport;