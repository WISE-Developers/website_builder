import Banner from '../components/Banner';
import TabContent from '../components/TabContent';
import '../styles/PandoraSoftware.css';

const PandoraSoftware = () => {
  const tabs = [
    {
      id: 'downloads',
      title: 'Downloads',
      isDefault: true,
      children: (
        <div>
          <p>Pandora 2025.12 was released on December 4, 2025. Parameters files from previous versions of Pandora will work with this version.</p>

          <ul className="download">
            <li><a href="https://cwfis.cfs.nrcan.gc.ca/downloads/fires/pandora2025.12.zip">Download Pandora 2025.12</a></li>
          </ul>

          <h3>Installation Instructions</h3>

          <ul>
            <li>The Prometheus COM must be installed in order for Pandora to run. Note that the Prometheus COM is not the same as the Prometheus application, though it is installed at the same time.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'requirements',
      title: 'Requirements',
      children: (
        <div>
          <p>Your computer must meet or exceed the system requirements for Prometheus in order to install and use Pandora. See under "Requirements" on the <a href="/prometheus_software#requirements">Prometheus software page</a>.</p>
        </div>
      )
    },
    {
      id: 'release_notes',
      title: 'Release Notes',
      children: (
        <div>



          <h3>New in Pandora 2025.12</h3>
          <li>Modified to work with Prometheus 2023.06.01/EOL. This modification involved ignoring spurious error messages when exporting shape files. As a result, there is no longer any error checking for successful shape file export.</li>
          <li>Includes option to modify ROS equation coefficients (tables 6, 7, and 8 in the 1992 FBP report) with the Fuel_Attributes keyword.</li>

          <h3>New in Pandora 2024.11</h3>
          <li>Grass fuel loading can be set using the Grass_FuelLoad keywork. The default is 0.35 kg/m².</li>
          <li>Fixed bug that misidentified default grass fuel codes when applying the specified grass curing. Note that the default grass curing is 60%.</li>

          <h3>New in Pandora 2024.08</h3>
          <li>Wind grids are now included in the Landscape_Constant option, so that Prometheus doesn’t have to reload the wind grids for every fire in the parameters file.</li>
          <li>Note that Pandora/Prometheus runs faster when wind grids are supplied. On the other hand, it runs much slower when %curing or fuel loading grids are supplied.</li>

          <h3>New in Pandora 2022.08</h3>
          <li>Now accepts greenup, %curing, %conifer, surface fuel load, and crown base height grids with these keywords: Greenup_GridFile, %Curing_GridFile, %Conifer_GridFile, Fuel_Load_GridFile, and CBH_GridFile. However, some of these grids cause Prometheus to run much more slowly.</li>

          <h3>New in Pandora 2021.12</h3>
          <li>Accepts wind speed and direction grids</li>
          <li>Option for faster processing when running multiple fires on the same landscape</li>
          <li>User can specify number of threads used for simulation</li>
          <li>Accepts input grids in TIF format. (Alas, output grids are still ASC.)</li>
          <li>Ignition locations can be provided in KML format (as well as SHP)</li>
          <li>Minimum fire size can be specified, such that no outputs are produced for smaller fires</li>
          <li>To facilitate identification of fires in the output shape file, ignitions are named according to their original file names (if they were files) and the scenario name is set to the name of the fire as specified in the Pandora parameters file</li>




        </div>
      )
    }
  ];

  return (
    <div>
      <Banner title="Pandora" imageSrc="/images/pandora_banner.jpg" />

      <div className="content">
        <h1>Software</h1>
        <TabContent tabs={tabs} />
      </div>
    </div>
  );
};

export default PandoraSoftware;