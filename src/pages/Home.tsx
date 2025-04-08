import Banner from '../components/Banner';
// import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <Banner title="Home" imageSrc="/images/main_banner.jpg" />
      
      <div className="content">
        <img className="right" src="/images/prometheus_simulation.jpg" alt="Prometheus Simulation" />
        <h1>Welcome to FireGrowthModel.ca</h1>
        
        <div className="featured">
          <p>FireGrowthModel.ca is now home to several projects related to Canadian Wildfires.</p>
          <p>Considerable time and effort are spent to ensure these software applications can be used by fire
              management agencies across Canada and other interested stakeholders including natural resource managers,
              planners, and researchers. The lead agencies have also extended support to fire management agencies and
              researchers outside of Canada.</p>
        </div>
        
        <h2>Prometheus & Prometheus COM</h2>
        <p> Prometheus is the result of a national project endorsed by
            the <a href="http://www.ciffc.ca" target="_blank" rel="noopener noreferrer">Canadian Interagency Forest Fire Centre</a> and its
            members.
            <a href="https://www.alberta.ca/forestry-parks-and-tourism.aspx" target="_blank" rel="noopener noreferrer">Alberta Forestry, Parks and Tourism</a> is the lead agency, custodian and legal intellectual property rights holder of Prometheus.</p>

        <h3>BurnP3 & Pandora</h3>
        <p> The <a href="http://www.nrcan.gc.ca/forests" target="_blank" rel="noopener noreferrer">Canadian Forest Service</a> is the lead agency, custodian and legal intellectual property rights holder of Burn-P3 and
        Pandora.</p>
        
        <h2>Wildfire Intelligence and Simulation Engine (W.I.S.E.)</h2>
        <p>
          <a href="https://www.enr.gov.nt.ca/en/services/wildfire-operations" target="_blank" rel="noopener noreferrer">Government of the Northwest Territories</a> is currently the lead agency, custodian and legal intellectual property rights holder of W.I.S.E.
        </p>
        
        <h2>REDapp</h2>
        <p>
          The REDapp Development Team is currently the custodian and legal intellectual property rights holder of REDapp.
        </p>
      </div>
    </div>
  );
};

export default Home;