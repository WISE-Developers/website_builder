import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import '../styles/BurnP3PlusOverview.css';

const BurnP3PlusOverview = () => {
  return (
    <div>
      <Banner title="BurnP3+" imageSrc="/images/burnp3_banner.jpg" />
      
      <div className="content">
        <h1>Overview</h1>
        
        <img className="right" height="30%" width="50%" src="/images/BurnP3Plus-SyncroSimUI.jpg" alt="BurnP3+ SyncroSim UI" />

        <p>BurnP3+ was designed to update and replace Burn-P3, a software application originally developed in 2005 by the Canadian Forest Service (Parisien et al. 2005). BurnP3+ (probability, prediction, and planning) allows users to produce estimates of wildfire susceptibility and risk across a landscape. Using a Monte Carlo simulation modelling approach, BurnP3+ combines stochastic draws of fire ignition, weather, and other burning conditions with a deterministic fire growth model. The outputs of a model run include raster grids of burn probability and burn count estimates, relative likelihood of burning, simulated fire perimeters, and metrics associated with the Fire Behaviour Prediction system such as rates of spread, fire intensity, and fuel consumption. Alternative scenarios can be contrasted to evaluate the response or sensitivity of these outputs to changes in input variables or conditions of interest, such as different weather conditions, fuel treatments, changes in ignition locations, or alternative land management practices.</p>

        <p>The <a href="http://www.nrcan.gc.ca/forests" target="_blank" rel="noopener noreferrer">Canadian Forest Service</a> is the lead agency, custodian and legal intellectual property rights holder of BurnP3+</p>

        <ul>
          <li>Windows-based software application</li>
          <li>Computes burn probabilities for large landscapes</li>
          <li>Produces additional outputs, such as fire intensity maps</li>
          <li>Extracts fire statistics and simulated fire perimeters</li>
        </ul>

        <p><Link to="/burnp3plus_documentation">Learn more...</Link></p>
      </div>
    </div>
  );
};

export default BurnP3PlusOverview;