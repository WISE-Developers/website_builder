import Banner from '../components/Banner';
import '../styles/NomadSupport.css';

const NomadSupport = () => {
  return (
    <div>
      <Banner title="Project Nomad" imageSrc="/images/nomad_banner.jpg" />

      <div className="content">
        <h1>Technical Support</h1>

        <div className="support-container">
          <p>
            Contact the project via{' '}
            <a
              href="https://github.com/WISE-Developers/Project_issues/issues/new?assignees=spydmobile%2Cnealmcloughlin%2CBadgerOnABike&labels=Communication+Required&template=project_contact_form.yml&title=%5BContact%5D+Re%3A+Nomad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="invertedColor" width="20px" src="/images/240px-Octicons-mark-github.svg.png" alt="GitHub" />
              GitHub
            </a>
          </p>

          <p>Project Nomad is an open-source project developed within the Canadian Wildland Fire Modelling Framework. Support today is handled through the project's GitHub repositories.</p>

          <h2>Report a Bug or Request a Feature</h2>
          <p>Bug reports, feature requests, and questions about Nomad are handled through the GitHub issue tracker:</p>
          <ul>
            <li><a href="https://github.com/WISE-Developers/project_nomad/issues" target="_blank" rel="noopener noreferrer">Project Nomad Issues</a></li>
          </ul>

          <h2>Fire Engine Issues</h2>
          <p>The FireSTARR fire-growth engine is maintained in its own repository. Problems specific to the model engine &mdash; rather than the Nomad interface &mdash; belong there:</p>
          <ul>
            <li><a href="https://github.com/CWFMF/firestarr-cpp/issues" target="_blank" rel="noopener noreferrer">FireSTARR Issues</a></li>
          </ul>

          <h2>Community</h2>
          <p>Nomad is part of the broader Fire Growth Modelling community. For general discussion across the family of tools, see the community Discord:</p>
          <div className="discord-container">
            <a href='https://discord.gg/HTfn6MGyCb' target="_blank" rel="noopener noreferrer">
              <img id="discord-logo" src="/images/Discord-Logo.png" height="50px" alt="Discord logo" />
            </a>
          </div>

          <h2>Contributing</h2>
          <p>Nomad is open-source and contributions are welcome. To get involved, start with the project repository on GitHub, review the open issues, and follow the contribution guidance there.</p>
        </div>
      </div>
    </div>
  );
};

export default NomadSupport;
