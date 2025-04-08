import Banner from '../components/Banner';
import DocumentationTable from '../components/DocumentationTable';
import '../styles/WISEDocumentation.css';

const WISEDocumentation = () => {
  const documentationItems = [
    {
      imageSrc: '/images/wise_documentation.png',
      title: 'W.I.S.E. API Documentation',
      linkUrl: 'https://wise-developers.github.io/wise/',
      linkText: 'Online Documentation',
      altText: 'W.I.S.E. Documentation'
    },
    {
      imageSrc: '/images/wise_github.png',
      title: 'W.I.S.E. GitHub Repository - Developer Resources and Code Documentation',
      linkUrl: 'https://github.com/WISE-Developers',
      linkText: 'GitHub Repository',
      altText: 'W.I.S.E. GitHub'
    },
    {
      imageSrc: '/images/wise_wiki.png',
      title: 'W.I.S.E. Wiki - User Guides, Tutorials, and Technical Documentation',
      linkUrl: 'https://github.com/WISE-Developers/WISE_Application/wiki',
      linkText: 'Wiki Documentation',
      altText: 'W.I.S.E. Wiki'
    }
  ];

  return (
    <div>
      <Banner title="W.I.S.E." imageSrc="/images/wise_banner.png" />
      
      <div className="content">
        <h1>Documentation</h1>
        
        <p>The W.I.S.E. project provides comprehensive documentation for users, developers, and system administrators. Below are the key resources available for understanding and working with W.I.S.E.</p>
        
        <DocumentationTable items={documentationItems} />
        
        <h2>API Documentation</h2>
        <p>The W.I.S.E. API documentation provides detailed information about endpoints, request parameters, response formats, and examples. It is designed to help developers integrate W.I.S.E. into their own applications and systems.</p>
        
        <h2>Developer Guides</h2>
        <p>The developer guides provide information about the internal architecture of W.I.S.E., how to build the code from source, and how to contribute to the project. These guides are available in the GitHub repository.</p>
        
        <h2>User Guides</h2>
        <p>The user guides provide information about how to use W.I.S.E. for fire growth simulation, including details about configuration parameters, input data formats, and output interpretation. These guides are available in the wiki.</p>
        
        <h2>Additional Resources</h2>
        <p>In addition to the documentation listed above, the W.I.S.E. project provides sample code, tutorials, and example configurations to help users get started quickly. These resources are available in the GitHub repository.</p>
      </div>
    </div>
  );
};

export default WISEDocumentation;