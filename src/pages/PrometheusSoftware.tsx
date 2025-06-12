import Banner from '../components/Banner';
import TabContent from '../components/TabContent';
import Image from '../components/Image';
import '../styles/PrometheusSoftware.css';

const PrometheusSoftware = () => {
  const tabs = [
    {
      id: 'downloads',
      title: 'Downloads',
      isDefault: true,
      children: (
        <div>
          <h3>Final EOL Version</h3>
          {/* <p>Prometheus 2021.12.03 <span className="w3-tag w3-padding w3-round-large w3-red w3-center">Log4J Safe</span> for 64-bit Windows operating systems was released December 23, 2021.</p> */}
          <p>Prometheus 2023.06.01 <span className="w3-tag w3-padding w3-round-large w3-red w3-center">EOL</span> for 64-bit Windows operating systems was built June 1, 2023.</p>
          <ul className="download">
            <li><a className="download" href="https://spyd.com/fgm.ca/Prometheus_2023.06.01_EOL.exe">Download Prometheus EOL</a></li>
          </ul>

          <h3>Important Installation Instructions</h3>
          
          <ul>
            <li>Install all software prerequisites on a 64-bit Windows computer that meets or exceeds minimum system requirements and perform a system restart.</li>
            <li>Log on to your computer as a system administrator.</li>
            <li>Uninstall any previous version of the Prometheus application from your computer.</li>
            <li>Close all open applications and run <b>Prometheus_2023.06.01_EOL.exe</b> <span className="file">[EXE - 67 MB]</span>. A Setup Wizard will guide you through the installation.</li>
          </ul>

          <h3>Known Issues</h3>

          <ul>
            <li> Additional gotchas & workarounds coming soon from Brett</li>
            <li>Some folks are getting an Intel Error and are unable to find the download - Intel removed it from their site.</li>
            <li>Uninstall any previous version of the Intel C++ runtime from your computer as this tool will not overwrite newer versions.</li>
            <br/><br/>
            <Image src="/images/intel_error.png" alt="Intel Error" />
            <br/><br/>
            <p>You can grab the fix from here on our site:</p>
            <ul className="download">
              <li><a className="download" href="https://spyd.com/fgm.ca/libs/w_dpcpp_cpp_runtime_p_2021.3.0.3372.exe">Download Intel C++ runtime 2021.3.0.3372</a></li>
            </ul>
            
            <li>Some references to old versions are found in the help.</li>
          </ul>

          <h3>Sample Data Set</h3>

          <p>Click the following link to download a sample data set for the 2001 Dogrib fire. The data set contains a README document, model input files, and an example fire growth model project.</p>
          <ul>
            <li><a href="https://spyd.com/fgm.ca/Dogrib_v624.zip">Dogrib_v624</a> <span className="file"> [ZIP - 5.77 MB]</span></li>
          </ul>
        </div>
      )
    },
    {
      id: 'requirements',
      title: 'Requirements',
      children: (
        <div>
          <p>Your computer must meet or exceed the following system requirements in order to install and use the Prometheus application and COM.</p>

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
                <td>64-bit Windows 10/11 or<br/>Windows Server 2008 R2</td>
              </tr>
              <tr>
                <td>Microsoft Software</td>
                <td>.NET Framework 4.6<br/>and<br/>Visual C++ 2017 Redistributable (x64)</td>
                <td>.NET Framework 4.7<br/>and<br/>Visual C++ 2017 Redistributable (x64)</td>
              </tr>
              <tr>
                <td>Java</td>
                <td>OpenJDK for Windows (x64)<br/>(Update 21) <a href="https://aka.ms/download-jdk/microsoft-jdk-21.0.5-windows-x64.msi">21.0.5</a></td>
                <td></td>
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
          <h3>Changes in Prometheus EOL</h3>
    
          <h4>No New Features</h4>
          
          <h4>Bug Fixes</h4>
          <ul>
            <li>Fixed the import FGMJ (WISE model) Functions</li>             
            <ol>The FGMJ outputs of WISE and products like FireCast that leverage WISE were unable to be read by the Prometheus. A bug fix was issued in 2023.06.01 to ensure that WISE generated FGMJ files could be read by Prometheus.</ol>
          </ul>

          <h4> Known Issues and Work Arounds (If Available)</h4>
        <ul>
          <li>Fires intersecting resulting in the fire that is intersected stopping growth.</li>
            <ol>
              <li>Fix this by splitting the multiple polygon ignition into individual ignitions and run the scenarios independently</li>
              <li>This does require the modeller to then dissolve by date time but runs faster overall.</li>
            </ol>
            <li> The component window is so full that right clicking brings up a view format menu.</li>
            <ol>When this happens, make the Prometheus window smaller keeping it to the top half the monitor and then expected behaviour will occur.</ol>
          <li>Unable to read a weather file that has weather in it.</li>
            <ol>Make sure you have weather starting at midnight.</ol>
          <li>KML output makes Prometheus not responsive</li>
            <ol>It is working, it may just take a long time.</ol>
        </ul>
        </div>
      )
    },
    {
      id: 'license_agreement',
      title: 'License Agreement',
      children: (
        <div>
          <h3>Prometheus: the Canadian Wildland Fire Growth Simulation Model</h3>

          <p>Version 2023.06.01 EOL, Copyright © 2000 - 2023 The W.I.S.E. Development Team</p>

          <p>Release date: June 1, 2023</p>

          <p>Prometheus is a wildland fire growth simulation model first released in 2002 with support from fire management agencies, research institutes, and industry partners across Canada. A project steering committee was responsible for coordinating early development of the Prometheus application. Alberta Forestry, Parks and Tourism is now the lead agency and custodian with financial and in-kind support from the Canadian Forest Service, Government of Northwest Territories, Government of Ontario, and Scion Research. The Prometheus application and Prometheus COM are freeware software.</p>
        </div>
      )
    }
  ];

  return (
    <div>
      <Banner title="Prometheus EOL" imageSrc="/images/prometheus_banner.jpg" />
      
      <div className="content">
        <h1>Software</h1>
        <TabContent tabs={tabs} />
      </div>
    </div>
  );
};

export default PrometheusSoftware;