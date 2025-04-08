import Banner from '../components/Banner';
//import { Link } from 'react-router-dom';
import '../styles/WISEOverview.css';

const WISEOverview = () => {
  return (
    <div>
      <Banner title="W.I.S.E." imageSrc="/images/wise_banner.png" />
      
      <div className="content">
        <h1>Overview</h1>
        
        <img className="right" src="/images/wise_logo.png" alt="W.I.S.E. Logo" />

        <p>The Wildfire Intelligence and Simulation Engine (W.I.S.E.) is the modern, open-source successor to Prometheus and the COM. It represents a new approach to wildfire simulation modeling with a focus on automation, collaborative development, and enterprise-level fire modeling.</p>

        <p>W.I.S.E. was first prototyped in 2015 by the Government of Northwest Territories and was originally called Prometheus Software as a Service (PSaaS). It evolved from decades of fire growth simulation experience and addresses many of the limitations of desktop-based applications.</p>

        <p>The <a href="https://www.enr.gov.nt.ca/en/services/wildfire-operations" target="_blank" rel="noopener noreferrer">Government of the Northwest Territories</a> is currently the lead agency, custodian and legal intellectual property rights holder of W.I.S.E.</p>

        <h2>Key Features</h2>
        <ul>
          <li>Open-source architecture for collaborative development and transparency</li>
          <li>Service-oriented design for integration with other systems</li>
          <li>Support for automation and batch processing</li>
          <li>Scalable performance for enterprise deployment</li>
          <li>Modern API for integration with web applications and other services</li>
          <li>Platform independence</li>
        </ul>

        <h2>Technical Overview</h2>
        <p>W.I.S.E. is built using modern technologies and follows a service-oriented architecture. The core fire growth engine is implemented in C++ for maximum performance, with a Node.js wrapper providing a modern API interface.</p>
        
        <p>The architecture is modular, allowing different components to be updated or replaced independently. This design provides flexibility for future enhancements while maintaining compatibility with existing systems.</p>

        <h2>Development Philosophy</h2>
        <p>W.I.S.E. is developed as an open-source project, fostering collaboration between government agencies, research institutions, and the private sector. This approach ensures transparency, promotes innovation, and leverages the collective expertise of the wildfire management community.</p>
        
        <p>The project follows modern software development practices, including continuous integration, automated testing, and peer review of code changes. This approach helps maintain high code quality and reliability.</p>
      </div>
    </div>
  );
};

export default WISEOverview;