import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import '../styles/BurnP3Overview.css';

const BurnP3Overview = () => {
  return (
    <div>
      <Banner title="Burn-P3 (Legacy)" imageSrc="/images/burnp3_banner.jpg" />
      
      <div className="content">
        <h1>Overview</h1>
        <div className="warning">
          <p>The <Link to="/burnp3plus">BurnP3+</Link> project is the modern, open-source successor to Burn-P3 (Legacy).
          The COM (Common Object Model) is a deprecated Microsoft Windows technology.</p>
        </div>
        
        <img className="right" src="/images/grid_output_burnp3.jpg" alt="Burn-P3 Grid Output" />

        <p>Burn-P3 (probability, prediction, and planning) is a spatial fire simulation model that is used for land-management planning and wildland fire research. It uses the Prometheus fire-growth engine to simulate the ignition and spread of a very large number of fires. The inputs to Burn-P3 consist of fuels (e.g., vegetation), topography, weather, and patterns of fire ignitions. Its main output is a surface of fire probabilities, or burn probability map.</p>

        <p>The <a href="http://www.nrcan.gc.ca/forests" target="_blank" rel="noopener noreferrer">Canadian Forest Service</a> is the lead agency, custodian and legal intellectual property rights holder of Burn-P3</p>

        <ul>
          <li>Windows-based software application</li>
          <li>Computes burn probabilities for large landscapes</li>
          <li>Produces additional outputs, such as fire intensity maps</li>
          <li>Extracts fire statistics and simulated fire perimeters</li>
        </ul>

        <p><Link to="/burnp3_documentation">Learn more...</Link></p>
      </div>
    </div>
  );
};

export default BurnP3Overview;