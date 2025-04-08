import Banner from '../components/Banner';
import '../styles/FBANTools.css';

const FBANTools = () => {
  return (
    <div>
      <Banner title="FBAN Tools" imageSrc="/images/wise_banner.png" />
      
      <div className="content">
        <div className="warning">
          <p>This page will be used for disseminating a variety of tools and software links related to operational fire behaviour prediction in Canada and the CIFFC Wildfire Behaviour Specialist Course suite (S-589/590/591).</p>
          <p>For questions please contact <a href="mailto://Kelsy.gibos@gov.ab.ca">Kelsy Gibos (Kelsy.gibos@gov.ab.ca)</a> or <a href="mailto://Daniel.Perrakis@nrcan-rncan.gc.ca">Daniel Perrakis (Daniel.Perrakis@nrcan-rncan.gc.ca)</a>.</p>
        </div>

        <p>FBAN tools: (click on links below, then choose 'download raw file')</p>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Fireecology1/FBANTools/blob/main/FWI%20multiday-2018.xls">FWI multi-day calculator (Excel Spreadsheet .xls)</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Fireecology1/FBANTools/blob/main/WFBS%20Spreadsheets%202016.xls">WFBS Spreadsheets - Latest Version (Excel Spreadsheet .xls)</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://fireresearch.ca/fuelgraph-combustigraph/">FuelGraph-CombustiGraph Website</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://pfcfire.shinyapps.io/FuelGraphR/">Online (FuelGraphR)</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://fireresearch.ca/wp-content/uploads/2024/05/fuelgraph_combustigraph_v5_11_2024.xlsx">FuelGraph-CombustiGraph (Excel Spreadsheet .xlsx)</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.frames.gov/applied-fire-behavior/cfis">CFIS (Crown Fire Initiation and Spread system – Cruz-Alexander-Wakimoto)</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FBANTools;