import Banner from '../components/Banner';
import DocumentationTable from '../components/DocumentationTable';
import '../styles/REDappDocumentation.css';

const REDappDocumentation = () => {
  const documentationItems = [
    {
      imageSrc: '/images/redapp_manual_img_sm.png',
      title: 'The REDapp User Guide 6.2 (2019)',
      linkUrl: 'https://fgmfiles.spyd.com/REDapp_6.2_User_Guide_1.pdf',
      linkText: 'PDF',
      altText: 'REDapp User Guide 6.2 PDF'
    },
    {
      imageSrc: '/images/redapp_manual_img_sm.png',
      title: 'SpotWX Import Help',
      linkUrl: '/assets/REDapp_spotwx_import_help.pdf',
      linkText: 'PDF',
      altText: 'SpotWX Import Help PDF'
    }
  ];

  return (
    <div>
      <Banner title="REDapp" imageSrc="/images/redapp_banner.png" />
      <div className="content">
        <h1>Documentation</h1>



        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/153925722?h=c9f975ea8f&amp;badge=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            title="REDapp Webinar Dec 1, 2015 (Wildland Fire Behaviour Specialist Course)"
            data-ready="true"
          ></iframe>
        </div>

        <DocumentationTable items={documentationItems} />


      </div>
    </div>
  );
};

export default REDappDocumentation;