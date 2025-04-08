import Banner from '../components/Banner';
import '../styles/PandoraDocumentation.css';

const PandoraDocumentation = () => {
  return (
    <div>
      <Banner title="Pandora" imageSrc="/images/pandora_banner.jpg" />
      
      <div className="content">
        <h1>Documentation</h1>
        
        <img className="right" src="/images/pandora_help_2023.png" alt="Pandora Help Documentation" />
        <p>Help documentation is included with the Pandora Windows application.</p>
        <p>The help file is in <b>.chm</b> format. In some cases, Windows will not display the contents unless the following steps are taken:
          <ol>
            <li>In File Explorer, right click on the file (pandora.chm) and click "Properties"</li>
            <li>Under the "General" tab, at the bottom, click on the "Unblock" checkbox.</li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default PandoraDocumentation;