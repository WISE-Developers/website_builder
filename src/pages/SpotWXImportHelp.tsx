import Banner from '../components/Banner';
import '../styles/REDappDocumentation.css';

const SpotWXImportHelp = () => (
  <div>
    <Banner title="REDapp: SpotWX Import Help" imageSrc="/images/redapp_banner.png" />
    <div className="content">
      <h1>SpotWX Import Help</h1>
      <ol>
        <li>Download your weather data from <a href="https://spotwx.com/" target="_blank" rel="noopener noreferrer">SpotWX</a>.</li>
        <li>Ensure the file is in CSV format and matches the required column structure for REDapp.</li>
        <li>In REDapp, go to the import section and select your SpotWX CSV file.</li>
        <li>Follow the prompts to map columns and complete the import.</li>
      </ol>
      <p>For more details, see the REDapp User Guide or contact support.</p>
    </div>
  </div>
);

export default SpotWXImportHelp;
