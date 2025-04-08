import Banner from '../components/Banner';
import TabContent from '../components/TabContent';
import '../styles/WISESoftware.css';

const WISESoftware = () => {
  const tabs = [
    {
      id: 'downloads',
      title: 'Downloads',
      isDefault: true,
      children: (
        <div>
          <h3>Current Version</h3>
          <p>W.I.S.E. is available as open-source software through GitHub. The latest versions of all components can be found in the GitHub repositories.</p>

          <ul className="download">
            <li><a href="https://github.com/WISE-Developers/WISE_Application/releases" target="_blank" rel="noopener noreferrer">Download W.I.S.E. Application</a></li>
          </ul>
          
          <h3>Source Code</h3>
          <p>The complete source code for W.I.S.E. is available in the following GitHub repositories:</p>
          
          <ul>
            <li><a href="https://github.com/WISE-Developers/WISE_Application" target="_blank" rel="noopener noreferrer">W.I.S.E. Application</a> - The main application for fire growth modeling</li>
            <li><a href="https://github.com/WISE-Developers/WISE_JS_API" target="_blank" rel="noopener noreferrer">W.I.S.E. JS API</a> - JavaScript API for integrating with web applications</li>
            <li><a href="https://github.com/WISE-Developers/WISE_Grid_Module" target="_blank" rel="noopener noreferrer">W.I.S.E. Grid Module</a> - Module for working with geospatial grid data</li>
            <li><a href="https://github.com/WISE-Developers/WISE_FBP_Module" target="_blank" rel="noopener noreferrer">W.I.S.E. FBP Module</a> - Implementation of the Canadian Forest Fire Behavior Prediction System</li>
            <li><a href="https://github.com/WISE-Developers/WISE_FWI_Module" target="_blank" rel="noopener noreferrer">W.I.S.E. FWI Module</a> - Implementation of the Canadian Forest Fire Weather Index System</li>
          </ul>
          
          <h3>Docker Images</h3>
          <p>W.I.S.E. is also available as Docker images for easy deployment:</p>
          
          <ul className="download">
            <li><a href="https://hub.docker.com/r/wisedevelopers/wise-api" target="_blank" rel="noopener noreferrer">W.I.S.E. Docker Images</a></li>
          </ul>
          
          <h3>Development Environment</h3>
          <p>Instructions for setting up a development environment for W.I.S.E. are available in the GitHub repositories. The main requirements include:</p>
          
          <ul>
            <li>C++ development environment (Visual Studio 2019 on Windows, GCC on Linux)</li>
            <li>Node.js and npm for the JavaScript API</li>
            <li>CMake for building the C++ components</li>
          </ul>
          
          <h3>Sample Data</h3>
          <p>Sample data for testing and demonstrating W.I.S.E. is available in the GitHub repositories.</p>
        </div>
      )
    },
    {
      id: 'requirements',
      title: 'Requirements',
      children: (
        <div>
          <p>W.I.S.E. is designed to run on a variety of platforms. The following are the minimum system requirements:</p>

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
                <td>Operating System</td>
                <td>Windows 10 (64-bit)<br/>Linux (Ubuntu 18.04 or later)<br/>macOS (10.15 or later)</td>
                <td>Windows 11 (64-bit)<br/>Linux (Ubuntu 22.04)<br/>macOS (13 or later)</td>
              </tr>
              <tr>
                <td>Processor</td>
                <td>4 cores</td>
                <td>8+ cores</td>
              </tr>
              <tr>
                <td>Memory</td>
                <td>8 GB RAM</td>
                <td>16+ GB RAM</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>1 GB available space</td>
                <td>10+ GB available space</td>
              </tr>
              <tr>
                <td>Dependencies (Server)</td>
                <td colSpan={2}>
                  <ul>
                    <li>Node.js 14.x or later</li>
                    <li>GDAL 3.x</li>
                    <li>Protocol Buffers</li>
                    <li>Boost C++ Libraries</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Dependencies (Client)</td>
                <td colSpan={2}>
                  <ul>
                    <li>Modern web browser with WebSocket support</li>
                    <li>JavaScript ES6 support</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <h3>Containerized Deployment</h3>
          <p>For containerized deployments (Docker), the following is recommended:</p>
          <ul>
            <li>Docker Engine 19.03 or later</li>
            <li>Docker Compose 1.25.0 or later</li>
            <li>2 GB of RAM allocated to Docker</li>
          </ul>
          
          <h3>API Access</h3>
          <p>For applications accessing W.I.S.E. through the API:</p>
          <ul>
            <li>HTTP/HTTPS connectivity to the W.I.S.E. server</li>
            <li>Authentication credentials (if required by your deployment)</li>
          </ul>
        </div>
      )
    },
    {
      id: 'release_notes',
      title: 'Release Notes',
      children: (
        <div>
          <h3>Recent Releases</h3>
    
          <p>W.I.S.E. follows a continuous development model, with regular releases of new features, improvements, and bug fixes. For the most up-to-date release notes, please refer to the GitHub repository releases page:</p>
          
          <ul>
            <li><a href="https://github.com/WISE-Developers/WISE_Application/releases" target="_blank" rel="noopener noreferrer">W.I.S.E. Application Releases</a></li>
          </ul>
          
          <h3>Key Features in Recent Releases</h3>
          
          <h4>Performance Improvements</h4>
          <ul>
            <li>Optimized fire growth algorithm for large simulations</li>
            <li>Improved memory management for long-running simulations</li>
            <li>Enhanced multi-threading support for better utilization of available CPU cores</li>
          </ul>
          
          <h4>API Enhancements</h4>
          <ul>
            <li>New endpoints for batch simulation processing</li>
            <li>Improved error handling and reporting</li>
            <li>Enhanced documentation with more examples</li>
          </ul>
          
          <h4>Interoperability</h4>
          <ul>
            <li>Improved support for various geospatial data formats</li>
            <li>Enhanced compatibility with existing fire management systems</li>
            <li>Better integration with weather data sources</li>
          </ul>
          
          <h4>User Experience</h4>
          <ul>
            <li>New visualization options for simulation results</li>
            <li>Improved logging and monitoring capabilities</li>
            <li>Enhanced error messages and troubleshooting support</li>
          </ul>
          
          <h3>Planned Features</h3>
          <p>The W.I.S.E. development team is working on several exciting features for upcoming releases:</p>
          
          <ul>
            <li>Enhanced support for custom fuel models</li>
            <li>Integration with real-time weather data sources</li>
            <li>Improved uncertainty analysis capabilities</li>
            <li>Support for additional fire behavior models</li>
          </ul>
          
          <p>For more information on the development roadmap and to contribute to the project, please visit the <a href="https://github.com/WISE-Developers/WISE_Application/issues" target="_blank" rel="noopener noreferrer">GitHub Issues page</a>.</p>
        </div>
      )
    }
  ];

  return (
    <div>
      <Banner title="W.I.S.E." imageSrc="/images/wise_banner.png" />
      
      <div className="content">
        <h1>Software</h1>
        <TabContent tabs={tabs} />
      </div>
    </div>
  );
};

export default WISESoftware;