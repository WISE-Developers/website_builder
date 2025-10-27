import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import TabContent from '../components/TabContent';
import Image from '../components/Image';
import '../styles/BurnP3Software.css';

const BurnP3Software = () => {
  const tabs = [
    {
      id: 'downloads',
      title: 'Downloads',
      isDefault: true,
      children: (
        <div>
          <h3>Current Version</h3>
          <p>Burn-P3 2021.08.00 <span className="w3-tag w3-padding w3-round-large w3-red w3-center">Log4J Safe</span> for 64-bit Windows operating systems was released Aug 2021.</p>

          <ul className="download">
            <li><a href="https://spyd.com/fgm.ca/BurnP3_2021.08.00_English.msi">Download Burn-P3 2021.08.00</a></li>
          </ul>
          
          <h3>Known Issues</h3>
          <div className="warning">
            <div className="w3-container w3-center">
              <Image src="/images/Burn_P3_Warning.jpeg" alt="Burn-P3 Warning" />
            </div>
            <br/><br/>
            <p>Please Note: You will experience this warning until we update the version check. Nothing to
            worry about, Burn-P3 will function with version 12.03 of Prometheus, we are actively working
            on updating the version checker. For now, press okay and continue using the model as you
            normally would.</p>
          </div>

          <h3>Important Installation Instructions</h3>
          
          <ul>
            <li>Install <a href="/prometheus_software">Prometheus 2021.12.03</a> (BurnP3 version
            must match the Prometheus Version or you will get an annoying messages on startup - but
            it will still work) and all associated software prerequisites on a 64-bit Windows
            computer that meets or exceeds minimum system requirements and perform a system restart.</li>
            <li>Log on to your computer as a system administrator.</li>
            <li>Uninstall any previous version of the Burn-P3 application from your computer.</li>
            <li>Close all open applications and run <b>BurnP3_2021.08.00_English.msi</b> <span
            className="file">[MSI - 5.34 MB]</span>. A Setup Wizard will guide you through the
            installation.</li>
          </ul>

          <h3>Sample Data Set</h3>

          <p>Click the following link to download test files used in the Burn-P3 tutorial. These test
          files also serve as good examples when creating your own Burn-P3 data set.</p>

          <ul>
            <li><a href="https://spyd.com/fgm.ca/test_files_englishV4_7.zip">test_files_englishV4_7</a>
            <span className="file"> [ZIP - 38.2 MB]</span></li>
          </ul>
        </div>
      )
    },
    {
      id: 'requirements',
      title: 'Requirements',
      children: (
        <div>
          <p>Your computer must meet or exceed the following system requirements in order to install and use Burn-P3.</p>

          <table className="software">
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Minimum</th>
                <th>Recommended</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operating System*</td>
                <td>64-bit Windows 7 or<br/>Windows Server 2008</td>
                <td>64-bit Windows 10 or<br/>Windows Server 2008 R2</td>
              </tr>
              <tr>
                <td>Prometheus Software</td>
                <td>Version 2021.12.03</td>
                <td>Version 2021.12.03</td>
              </tr>
              <tr>
                <td>Microsoft Software</td>
                <td>.NET Framework 4.6<br/>and<br/>Visual C++ 2017 Redistributable (x64)</td>
                <td>.NET Framework 4.7<br/>and<br/>Visual C++ 2017 Redistributable (x64)</td>
              </tr>
              <tr>
                <td>Oracle Software</td>
                <td>Java 8.0 for Windows (x64)<br/>(Update 151)</td>
                <td>Java 8.0 for Windows (x64)<br/>(Update 191)</td>
              </tr>
              <tr>
                <td>Intel&#174; Software</td>
                <td>2019 C++ Redistributable Library for Windows (x64)<br/>(Initial Release: 19.0.117)</td>
                <td>2019 C++ Redistributable Library for Windows (x64)<br/>(Update 1: 19.1.144)</td>
              </tr>
              <tr>
                <td>Processors</td>
                <td>4 cores</td>
                <td>4 hyper-threading cores</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>6 GB</td>
                <td>12 GB</td>
              </tr>
              <tr>
                <td>Hard Drive</td>
                <td>5 GB</td>
                <td>500 GB</td>
              </tr>
              <tr>
                <td>Screen Resolution</td>
                <td>1280 x 720</td>
                <td>1600 x 1024</td>
              </tr>
            </tbody>
          </table>

          <p><i>*32-bit operating systems are not supported.</i></p>
        </div>
      )
    },
    {
      id: 'release_notes',
      title: 'Release Notes',
      children: (
        <div>
          <h3>Changes in Burn-P3 2021.08.00</h3>
    
          <h4>New Features</h4>
          
          <ul>
            <li>Coming soon...</li>
          </ul>

          <h4>Bug Fixes</h4>
          <ul>
            <li>Coming soon...</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div>
      <Banner title="Burn-P3 (Legacy)" imageSrc="/images/burnp3_banner.jpg" />
      
      <div className="content">
        <h1>Software</h1>
        <TabContent tabs={tabs} />
        <div className="warning">
            <p>The <Link to="/burnp3plus">BurnP3+</Link> project is the modern, open-source successor to Burn-P3.</p>
          </div>
      </div>
    </div>
  );
};

export default BurnP3Software;