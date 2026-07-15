import Banner from '../components/Banner';
import DocumentationTable from '../components/DocumentationTable';
import '../styles/NomadDocumentation.css';

const NomadDocumentation = () => {
  const documentationItems = [
    {
      imageSrc: '/images/nomad_logo.jpg',
      title: 'Project Nomad GitHub Repository — Source, Architecture, and Deployment Docs',
      linkUrl: 'https://github.com/WISE-Developers/project_nomad',
      linkText: 'GitHub Repository',
      altText: 'Project Nomad GitHub'
    },
    {
      imageSrc: '/images/nomad_logo.jpg',
      title: 'FireSTARR Engine — Fire-Growth Model Driven by Nomad',
      linkUrl: 'https://github.com/CWFMF/firestarr-cpp',
      linkText: 'FireSTARR Repository',
      altText: 'FireSTARR GitHub'
    }
  ];

  return (
    <div>
      <Banner title="Project Nomad" imageSrc="/images/nomad_banner.jpg" />

      <div className="content">
        <h1>Documentation</h1>

        <p>Project Nomad's documentation currently lives alongside the source code and is oriented toward developers and operators. A dedicated end-user manual and hosted documentation portal are still in progress; in the meantime, the resources below are the best starting points.</p>

        <DocumentationTable items={documentationItems} />

        <h2>Architecture &amp; Deployment</h2>
        <p>The repository documents Nomad's system architecture, its two deployment modes (Stand Alone and Agency Centric), authentication options, and the technology stack. These are the primary references for anyone standing up or integrating an instance.</p>

        <h2>FireSTARR Setup</h2>
        <p>The engine documentation covers FireSTARR setup, containerized execution, and the weather input format Nomad uses to drive a run.</p>

        <h2>In Progress</h2>
        <p>End-user guides &mdash; walkthroughs of the model-setup wizard, interpreting burn-probability output, and exporting results &mdash; are being developed and will be published here as they become available. For questions in the meantime, see the <a href="#/nomad_support">Support</a> page.</p>
      </div>
    </div>
  );
};

export default NomadDocumentation;
