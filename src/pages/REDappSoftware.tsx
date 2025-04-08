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
          <p>REDapp V7.25.2 New Windows Release (2025-01-27)!!!</p>

          <ul className="download">
            <li><a href="https://github.com/WISE-Developers/REDapp/releases/download/7.25.2/REDapp-7.25.2.exe" target="_blank" rel="noopener noreferrer">Windows [EXE 178 MB]</a></li>
          </ul>
          
          <h3>Previous Version</h3>
            <p>REDapp V7.2022.3-0 Log4J Safe (2022-03-13)</p>

            <ul className="download">
            <li><a href="https://spyd.com/fgm.ca/REDapp-2022.3.0.zip" target="_blank" rel="noopener noreferrer">Portable no-install [ZIP 115 MB]</a></li>
            <li><a href="https://spyd.com/fgm.ca/REDapp-All-20220313.jar" target="_blank" rel="noopener noreferrer">Universal Installer [JAR 117 MB]</a></li>
            <li><a href="https://spyd.com/fgm.ca/REDapp-Windows-20220313.exe" target="_blank" rel="noopener noreferrer">Windows [EXE 114 MB]</a></li>
          </ul>
        </div>
      )
    },
    {
      id: 'requirements',
      title: 'Requirements',
      children: (
        <div>
          
          <h2>System Requirements for REDapp V7.25.2 for Windows</h2>

        <div className="system-requirements">
        Minimum Java Version: Java is NOT required to install V7.25.2<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (it installs the correct JAVA for you.)        <br/>
        Minimum OS Required: Windows 10 or later.
        </div>

           <h2>System Requirements for REDapp V7.2022.3-0</h2>

           <div className="system-requirements">
            Minimum Java Version: Java SE 8 (Oracle preferred). Update 151 or better.<br/>
            <br/>
            Minimum OS Required:<br/>
            Windows 7 or later.<br/>
            Intel-based Mac OS X 10.8.3 (Mountain Lion) or later.<br/>
            Oracle Linux 5.5+, 6.x (32-bit), 6.x (64-bit).<br/>
            Red Hat Enterprise Linux 5.5+, 6.x (32-bit), 6.x (64-bit).<br/>
            Ubuntu Linux 12.04 LTS or later.<br/>
            Suse Linux Enterprise Server 10 SP2, 11.x.<br/>
          </div>
          
        </div>
      )
    },
    {
      id: 'release_notes',
      title: 'Release Notes',
      children: (
        <div>


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