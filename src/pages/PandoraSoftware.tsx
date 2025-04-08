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
          <p>Pandora 2021.12 was released on April 2, 2022. Pandora parameter files from versions before 3.6 may not work with 2021.12 Check the help file for details.</p>
          
          <ul className="download">
            <li><a href="https://spyd.com/fgm.ca/pandora2021.12.zip">Download Pandora 2021.12</a></li>
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
          <h3>Changes in Pandora 2021.12</h3>
      
          <ul>
            <li>Accepts wind speed and direction grids</li>
            <li>Option for faster processing when running multiple fires on the same landscape</li>
            <li>User can specify number of threads used for simulation</li>
            <li>Accepts input grids in TIF format. (Alas, output grids are still ASC.)</li>
            <li>Ignition locations can be provided in KML format (as well as SHP)</li>
            <li>Minimum fire size can be specified, such that no outputs are produced for smaller fires</li>
            <li>To facilitate identification of fires in the output shape file, ignitions are named according to their original file names (if they were files) and the scenario name is set to the name of the fire as specified in the Pandora parameters file</li>
          </ul>
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