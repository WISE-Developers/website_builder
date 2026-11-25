import Banner from '../components/Banner';
import TabContent from '../components/TabContent';
import '../styles/NomadSoftware.css';

const NomadSoftware = () => {
  const tabs = [
    {
      id: 'downloads',
      title: 'Downloads',
      isDefault: true,
      children: (
        <div>
          <h3>Installed software that serves a web interface</h3>
          <p>Project Nomad is installed on a computer &mdash; a shared server or a single local machine &mdash; where it then serves a web application you use in any modern browser. It is not a cloud-only service: once installed, an instance can run <strong>online</strong> as a networked server for a team, or <strong>fully offline</strong> on a local machine or field laptop, with no internet connection required.</p>

          <h3>Install</h3>
          <p>Stand Alone Nomad installs with a single command using the deterministic installers, provided for Linux, macOS, and Windows. Two runtimes are supported:</p>
          <ul className="download">
            <li><strong>Docker</strong> (recommended) &mdash; runs the full stack in containers; the interface is served on a local port (for example <code>http://localhost:3901</code>).</li>
            <li><strong>Native (&ldquo;metal&rdquo;)</strong> &mdash; runs directly on the host with Node.js 20+ and GDAL; served on a local port (for example <code>http://localhost:4901</code>).</li>
          </ul>
          <p>On first setup the installer will download the required national fuel/terrain dataset &mdash; a large one-time download, on the order of <strong>~50&nbsp;GB</strong> &mdash; or you can point it at an existing dataset you already have. Plan for the download time and disk space accordingly.</p>

          <h3>Source Code</h3>
          <p>Nomad is open-source. The complete source code, installers, and deployment configuration are available on GitHub:</p>
          <ul>
            <li><a href="https://github.com/WISE-Developers/project_nomad" target="_blank" rel="noopener noreferrer">Project Nomad repository</a> &mdash; frontend, backend, installers, and deployment</li>
            <li><a href="https://github.com/CWFMF/firestarr-cpp" target="_blank" rel="noopener noreferrer">FireSTARR engine</a> &mdash; the fire-growth model Nomad drives</li>
          </ul>
        </div>
      )
    },
    {
      id: 'requirements',
      title: 'Requirements',
      children: (
        <div>
          <p>Project Nomad runs on Linux, macOS, and Windows. Requirements depend on which of the two install runtimes you choose.</p>

          <table className="software">
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Docker install</th>
                <th>Native (&ldquo;metal&rdquo;) install</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Operating System</td>
                <td colSpan={2}>Linux, macOS, or Windows (64-bit)</td>
              </tr>
              <tr>
                <td>Core prerequisite</td>
                <td>Docker Desktop or Docker Engine</td>
                <td>Node.js 20+ and GDAL libraries</td>
              </tr>
              <tr>
                <td>Database</td>
                <td colSpan={2}>Internal SQLite / SpatiaLite &mdash; bundled, no external database required</td>
              </tr>
              <tr>
                <td>Fuel / terrain dataset</td>
                <td colSpan={2}>National dataset required (~50&nbsp;GB) &mdash; downloaded by the installer, or supply your own. Budget 50&nbsp;GB+ of free disk.</td>
              </tr>
              <tr>
                <td>Client</td>
                <td colSpan={2}>A modern web browser</td>
              </tr>
            </tbody>
          </table>

          <h3>Deployment Modes</h3>
          <p>Nomad can be deployed as a self-contained stand-alone system, or embedded as a component in an existing agency platform.</p>
          <table className="software">
            <thead>
              <tr>
                <th>Mode</th>
                <th>Stand Alone Nomad (SAN)</th>
                <th>Agency Centric Nomad (ACN)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Best for</td>
                <td>A single agency or field deployment that wants a self-contained system</td>
                <td>Integration into an existing agency platform</td>
              </tr>
              <tr>
                <td>Authentication</td>
                <td>Configurable: none, simple username, or OAuth</td>
                <td>Delegated to the host application</td>
              </tr>
            </tbody>
          </table>

          <h3>Technology Stack</h3>
          <ul>
            <li>React + Vite + TypeScript frontend</li>
            <li>MapLibre GL JS interactive map</li>
            <li>Node.js / Express backend</li>
            <li>Internal SQLite / SpatiaLite &mdash; no external database required</li>
            <li>GDAL / PROJ for spatial processing</li>
            <li>FireSTARR fire-growth engine, executed at arm's length</li>
          </ul>
        </div>
      )
    },
    {
      id: 'release_notes',
      title: 'Release Notes',
      children: (
        <div>
          <h3>Releases</h3>
          <p>Project Nomad follows an active, continuous development model, with regular releases of new features, improvements, and fixes. For a quick read, the changelog summarises what changed in each version; the GitHub releases page has the full history and downloads.</p>
          <ul>
            <li><a href="https://github.com/WISE-Developers/project_nomad/blob/main/CHANGES.md" target="_blank" rel="noopener noreferrer">Changelog (CHANGES.md)</a> &mdash; a quick, readable summary of changes by version</li>
            <li><a href="https://github.com/WISE-Developers/project_nomad/releases" target="_blank" rel="noopener noreferrer">GitHub Releases</a> &mdash; full release history and downloads</li>
          </ul>
        </div>
      )
    },
    {
      id: 'license',
      title: 'License',
      children: (
        <div>
          <h3>Open Source (AGPLv3)</h3>
          <p>Project Nomad is free and open-source software, released under the GNU Affero General Public License, version 3 (AGPLv3).</p>
          <ul>
            <li>Nomad may be used, studied, deployed, and modified freely.</li>
            <li>Because Nomad is network-facing, the AGPLv3 asks that if you modify Nomad and serve it to users over a network, you make the modified source available to those users. Deploying Nomad unmodified is satisfied by pointing users to the public repository.</li>
            <li>The FireSTARR engine is a separate program that Nomad invokes at arm's length; it is installed from its own public repository.</li>
            <li>Agency-specific configuration (connection strings, credentials, deployment settings) is configuration data, not part of the licensed source, and does not need to be published.</li>
          </ul>
          <p>A full licensing analysis is maintained alongside the source code in the project repository.</p>
        </div>
      )
    }
  ];

  return (
    <div>
      <Banner title="Project Nomad" imageSrc="/images/nomad_banner.jpg" />

      <div className="content">
        <h1>Software</h1>
        <TabContent tabs={tabs} />
      </div>
    </div>
  );
};

export default NomadSoftware;
