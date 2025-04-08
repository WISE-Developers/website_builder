import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import '../styles/PrometheusOverview.css';

const PrometheusOverview = () => {
  return (
    <div>
      <Banner title="Prometheus" imageSrc="/images/prometheus_banner.jpg" />
      
      <div className="content w3-justify">
        <h1>Overview</h1>
        <div className="warning">
          <p>The COM (Common Object Model) is a deprecated Microsoft Windows technology. The <Link to="/wise">W.I.S.E.</Link> project is the modern, open-source successor to Prometheus and the COM.</p>
        </div>
        
        <img className="right" src="/images/logo_prometheus.png" alt="Prometheus Logo" />

        <p>Prometheus is a deterministic wildland fire growth simulation model based on the Fire Weather Index (FWI) and
          Fire Behaviour Prediction (FBP) sub-systems of the Canadian Forest Fire Danger Rating System (CFFDRS). The
          model computes spatially-explicit fire behaviour and spread outputs given heterogeneous fuel, topography and
          weather conditions. All spatial outputs are compatible with Geographic Information Systems. <Link to="/prometheus_documentation">Learn more...</Link></p>

        <p>Prometheus is the result of a national project endorsed by
          the <a href="http://www.ciffc.ca" target="_blank" rel="noopener noreferrer">Canadian Interagency Forest Fire Centre</a> and its
          members.</p>
        
        <p><a href="https://www.alberta.ca/forestry-parks-and-tourism.aspx" target="_blank" rel="noopener noreferrer">Alberta Forestry, Parks and Tourism</a> is the lead agency, custodian and legal intellectual property rights holder of Prometheus &
          Prometheus COM.</p>

        <h2>Potential Applications</h2>

        <ul>
          <li>Forecasting wildland fire growth for operational decision support.</li>
          <li>Assessing the effectiveness of alternative fuel management strategies.</li>
          <li>Planning prescribed burns.</li>
          <li>Providing forensic support for wildfire investigations.</li>
          <li>Studying the role of fire in establishing and maintaining landscape patterns.</li>
          <li>Providing spatial and temporal estimates of smoke emissions.</li>
          <li>Examining the impact of climate change scenarios on area burned.</li>
          <li>Supplementing fire behaviour training and education programs.</li>
        </ul>

        <h2>Prometheus COM</h2>

        <p>COM (Common Object Model) is Microsoft Windows programming standard that allows object-oriented COM
          components (Dynamic Link Libraries) to be re-used in different software applications and languages without
          sharing source code. Prometheus uses this component-based software architecture. The important principles of
          COM include:</p>

        <ul>
          <li>Reuse of the component objects,</li>
          <li>Interoperability of the binary standard,</li>
          <li>Allowance for distributed capabilities.</li>
        </ul>

        <p>Prometheus is engineered using five separate COMs. These COMs are called low-level interfaces and include:</p>

        <ul>
          <li>FuelCOM</li>
          <li>FWICOM</li>
          <li>GridCOM</li>
          <li>FireEngine</li>
          <li>WeatherCOM</li>
        </ul>

        <p>To facilitate the use of these low-level interfaces, an umbrella or wrapper COM was developed. This
          high-level interface is called PrometheusCOM. It provides a more user-friendly interface for programmers to
          communicate with the low level COMs. Examples of software applications that integrate <i>Prometheus</i>COM
          components include Burn-P3, Pandora, Pegasus, and SFMS. COM Programmer's Documentation can be accessed 
          <a href="../resources/com/PrometheusCOM/index.html" target="_blank" rel="noopener noreferrer">on-line</a>.</p>
      </div>
    </div>
  );
};

export default PrometheusOverview;