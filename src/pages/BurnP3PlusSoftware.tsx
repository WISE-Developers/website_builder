import Banner from '../components/Banner';
import TabContent from '../components/TabContent';
import '../styles/BurnP3PlusSoftware.css';

const BurnP3PlusSoftware = () => {
  const tabs = [
    {
      id: 'downloads',
      title: 'Downloads',
      isDefault: true,
      children: (
        <div>
          <h3><a href="https://github.com/BurnP3/BurnP3Plus/releases/latest">Current Version BurnP3+</a></h3>
          <h3><a href="https://github.com/BurnP3/BurnP3PlusPrometheus/releases/latest">Current Version BurnP3+ Prometheus</a></h3>
          <h3><a href="https://github.com/BurnP3/BurnP3PlusCell2Fire/releases/latest">Current Version BurnP3+ Cell2Fire</a></h3>

          <ul className="download">
            <li><a href="https://syncrosim.com/desktop/">Download SyncroSim</a></li>
          </ul>
          <ul className="download">
            <li><a href="https://cran.r-project.org/bin/windows/base/">Download R (Windows)</a></li>
          </ul>
          
          <h3>Known Issues</h3>
          <p>Current issues can be found on <a href="https://github.com/BurnP3/BurnP3Plus/issues">GitHub</a></p>

          <h3>Important Installation Instructions</h3>
          <ul>
            <li>Install <a href="https://syncrosim.com/desktop/">SyncroSim</a>. SyncroSim is the main tool that coordinates fire growth modelling for BurnP3+.</li>
            <li>Install <a href="/prometheus_software">Prometheus 2021.12.03</a><br/>Prometheus is a requirement of the tool.</li>
          </ul>
          
          <h4>If you use the Conda option in SyncroSim, you do not need to do the following steps.</h4>
          <ul>
            <li>Install <a href="https://cran.r-project.org/bin/windows/base/">R</a><br/>R is the underpinning of the BurnP3+ methodology. SyncroSim leverages RSyncroSim to perform the modelling within the SyncroSim software.</li>
          </ul>

          <h3>Sample Data Set</h3>
          <p>Click the following link to download test files used in the BurnP3+ tutorial. These test files also serve as good examples when creating your own BurnP3+ data set. The BurnP3+ library in SyncroSim has a built in sample data set!</p>
          <ul>
            <li><a href="https://burnp3.github.io/BurnP3Plus/getting_started.html">Getting Started</a></li>
          </ul>
        </div>
      )
    },
    {
      id: 'requirements',
      title: 'Requirements',
      children: (
        <div>
          <p>Your computer must meet or exceed the following system requirements in order to install and use BurnP3+.</p>

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
          <h3>Changes in BurnP3+</h3>
    
          <h4>New Features</h4>
          
          <ul>
            <li><a href="https://github.com/BurnP3/BurnP3Plus/releases/latest">Latest Release</a></li>
          </ul>

          <h4>Bug Fixes</h4>
          <ul>
            <li><a href="https://github.com/BurnP3/BurnP3Plus/releases/">Changes to date</a></li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div>
      <Banner title="BurnP3+" imageSrc="/images/burnp3_banner.jpg" />
      
      <div className="content">
        <h1>Software</h1>
        <TabContent tabs={tabs} />
      </div>
    </div>
  );
};

export default BurnP3PlusSoftware;