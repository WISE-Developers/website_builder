import Banner from '../components/Banner';
// import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <Banner title="Home" imageSrc="/images/main_banner.jpg" />

      <div className="content">
        <img className="right" src="/images/prometheus_simulation.jpg" alt="Fire growth simulation" />
        <h1>Welcome to FireGrowthModel.ca</h1>

        <div className="featured">
          <p>FireGrowthModel.ca is the home of Canada's national fire-growth modelling software &mdash; a suite of open, freely available tools for simulating and understanding wildfire behaviour, built and maintained for the fire management community.</p>
          <p>These applications are developed collaboratively by fire agencies across Canada, coordinated through the Canadian Wildland Fire Modelling Framework, and provided to fire management agencies, natural resource managers, planners, and researchers &mdash; in Canada and beyond. This is where you find the software, learn how it works, and get support.</p>
        </div>

        <h2>Project Nomad</h2>
        <p>Project Nomad is our open-source, browser-based fire modelling application &mdash; a modern, map-driven interface that runs the FireSTARR fire-growth engine to produce both deterministic and probabilistic wildfire predictions. Nomad is released under the AGPLv3 licence and can be self-hosted or integrated into an agency's own systems. See the <a href="#/nomad_overview">Nomad</a> pages for details.</p>

        <h2>REDapp</h2>
        <p>The REDapp Development Team is the custodian and legal intellectual property rights holder of REDapp.</p>

        <h2>Burn-P3 &amp; Pandora</h2>
        <p>The <a href="http://www.nrcan.gc.ca/forests" target="_blank" rel="noopener noreferrer">Canadian Forest Service</a> is the lead agency, custodian, and legal intellectual property rights holder of Burn-P3 and Pandora.</p>

        <h2>Wildfire Intelligence and Simulation Engine (W.I.S.E.)</h2>
        <p>The <a href="https://www.enr.gov.nt.ca/en/services/wildfire-operations" target="_blank" rel="noopener noreferrer">Government of the Northwest Territories</a> is the lead agency, custodian, and legal intellectual property rights holder of W.I.S.E.</p>

        <h2>Prometheus &amp; Prometheus COM <span className="legacy-tag">(Legacy)</span></h2>
        <p>Prometheus is the result of a national project endorsed by the <a href="http://www.ciffc.ca" target="_blank" rel="noopener noreferrer">Canadian Interagency Forest Fire Centre</a> and its members. <a href="https://www.alberta.ca/forestry-parks-and-tourism.aspx" target="_blank" rel="noopener noreferrer">Alberta Forestry, Parks and Tourism</a> is the lead agency, custodian, and legal intellectual property rights holder of Prometheus. Prometheus has now reached end-of-life and remains available for reference and legacy use.</p>
      </div>
    </div>
  );
};

export default Home;
