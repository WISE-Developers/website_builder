import Banner from '../components/Banner';
import TabContent from '../components/TabContent';
import '../styles/REDappSoftware.css';

const REDappSoftware = () => {
  const tabs = [
    {
      id: 'downloads',
      title: 'Downloads',
      isDefault: true,
      children: (
        <div>
          <h3>Current Version</h3>
          <p>REDapp V7.27.0 New Release (2025-08-18)!!!</p>

          <ul className="download">
            <li><a href="https://github.com/WISE-Developers/REDapp/releases/download/7.27.0/REDapp-7.27.0.msi" target="_blank" rel="noopener noreferrer">Windows 10+ Installer [MSI 177 MB]</a></li>
            <li><a href="https://github.com/WISE-Developers/REDapp/releases/download/7.27.0/REDapp-7_27_0_jar-with-dependencies.jar" target="_blank" rel="noopener noreferrer">Universal Portable no-install [JAR 126 MB]</a></li>
          </ul>

           <h3>Previous Version</h3>
          <p>REDapp V7.26.1 New Release (2025-06-02)!!!</p>

          <ul className="download">
            <li><a href="https://github.com/WISE-Developers/REDapp/releases/download/7.26.1/REDapp-7.26.1.exe" target="_blank" rel="noopener noreferrer">Windows 10+ Installer [EXE 178 MB]</a></li>
            <li><a href="https://github.com/WISE-Developers/REDapp/releases/download/7.26.1/REDapp-7.26.1.msi" target="_blank" rel="noopener noreferrer">Windows 10+ Installer [MSI 177 MB]</a></li>
            <li><a href="https://github.com/WISE-Developers/REDapp/releases/download/7.26.1/REDapp-jar-with-dependencies.jar" target="_blank" rel="noopener noreferrer">Universal Portable no-install [JAR 126 MB]</a></li>



          </ul>

         
        </div>
      )
    },
    {
      id: 'requirements',
      title: 'Requirements',
      children: (
        <div>

          <h2>System Requirements for REDapp V7.2x.x for Windows</h2>

          <div className="system-requirements">
            Minimum Java Version: Java is NOT required to install V7.25.2+<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (it installs the correct JAVA for you.)        <br />
            Minimum OS Required: Windows 10 or later.
          </div>



        </div>
      )
    },
    {
      id: 'release_notes',
      title: 'Release Notes',
      children: (
        <div>  <p>REDapp V7.27.0</p>





          <div className="field field-name-body field-type-text-with-summary field-label-hidden">
            <div className="field-items">
              <div className="field-item even" property="content:encoded">
                <div>&nbsp;</div>
                <div>
                  <h3>🚀 New Features or Enhancements in REDapp V7.27.0:</h3>
                  <p /><li>Full integration for importing SpotWX weather data into the Forecast tab via SpotWx API - Added a tool on the Forecast tab under Import Weather to automatically get weather data from SpotWx based on the ignition location.</li>
                  <p /><li>Added Spanish language support.</li>
                  <p /><li>The entire user interface is now resizable by dragging the corner or pressing the maximise button.</li>
          





                  <p>&nbsp;</p>
                  <h2>🐛 Bug Fixes in in REDapp V7.27.0:</h2>
                  <p /><li>Removed the weather tab</li>
                  <p /><li>renamed the statistics tab to Forecast<p></p>
                    <p></p></li><li>Further minor UX updates to the main screen - Updated the user interface to clean up the buttons in the lower-right corner<p></p>
                    <p></p></li><li>Further Improve the location system to use an online service if possible<p></p>
                  </li></div>

              </div>
            </div>
          </div>
          <p>&nbsp;</p>
          <hr />
          <p>REDapp V7.26.1</p>





          <div className="field field-name-body field-type-text-with-summary field-label-hidden">
            <div className="field-items">
              <div className="field-item even" property="content:encoded">
                <div>&nbsp;</div>
                <div>
                  <h3>🚀 New Features or Enhancements in REDapp V7.26.1:</h3>
                  <p /><li>Added reference to a support document for importing SpotWX weather data into the Forecast tab</li>
                  <p>&nbsp;</p>
                  <h2>🐛 Bug Fixes in in REDapp V7.26.1:</h2>
                  <p /><li>Removed the weather tab</li>
                  <p /><li>renamed the statistics tab to Forecast<p></p>
                    <p></p></li><li>minor UX updates to the main screen<p></p>
                    <p></p></li><li>Improve the location system to use an online service if possible<p></p>
                  </li></div>

              </div>
            </div>
          </div>
          <p>&nbsp;</p>
          <hr />

          <p>REDapp V7.25.2 for Windows</p>
          <div className="field field-name-body field-type-text-with-summary field-label-hidden">
            <div className="field-items">
              <div className="field-item even" property="content:encoded">
                <div>&nbsp;</div>
                <div>
                  <h3>🚀 New Features or Enhancements in REDapp V7.25.2 for Windows:</h3>
                  <p></p><li>This new windows installer will allow users to install the program with no java pre-requisites.<span className="w3-tag w3-padding w3-round-large w3-red w3-center"> If you have any issues with the installer,
                    run the installer the installer as an administrator.</span><p></p>
                  </li><li>It will install by default into \users\[user name]\appdata\local so it shouldn't require admin privileges to install it</li>
                  <p></p><li>Improved performance of the "Find location" function<p></p>
                    <p></p></li><li>Updated to a newer version of open streetmaps jmapviewer<p></p>
                    <p>&nbsp;</p>
                    <h2>🐛 Bug Fixes in in REDapp V7.25.2 for Windows:</h2>
                    <p></p></li><li>Many small technical improvements and updates to the repository<p></p>
                    <p></p></li><li>#51 Fixed Upstream Security Vunerability in WTIME dependancy<p></p>
                    <p></p></li><li>#48 Fixed Upstream Security Vunerability in Apache Commons Version - Critical Vulnerability<p></p>
                    <p></p></li><li>#44 Fixed Report a Bug Button goes to a 404 Error<p></p>
                    <p></p></li><li>#35 Fixed GUI layout issues <p></p>

                  </li></div>

              </div>
            </div>
          </div>







        </div>
      )
    }
  ];

  return (
    <div>
      <Banner title="REDapp" imageSrc="/images/redapp_banner.png" />

      <div className="content">
        <h1>Software</h1>
        <TabContent tabs={tabs} />
      </div>
    </div>
  );
};

export default REDappSoftware;