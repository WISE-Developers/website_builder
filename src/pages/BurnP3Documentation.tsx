import Banner from '../components/Banner';
import DocumentationTable from '../components/DocumentationTable';
import '../styles/BurnP3Documentation.css';

const BurnP3Documentation = () => {
  const documentationItems = [
    {
      imageSrc: '/images/user_manual_version_4.7.jpg',
      title: 'Natural Resources Canada. 2017. Burn-P3 Version 4.7 User\'s manual. 59 p.',
      linkUrl: 'https://spyd.com/fgm.ca/UMen_BurnP3_V4_7.pdf',
      linkText: 'PDF',
      altText: 'User Manual Cover'
    },
    {
      imageSrc: '/images/info_report_nor-x-405.jpg',
      title: 'Parisien, M.A.; Kafka, V.G.; Hirsch, K.G.; Todd, J.B.; Lavoie, S.G.; Maczek, P.D. 2005. Mapping wildfire susceptibility with the BURN-P3 simulation model. Nat. Resour. Can., Can. For. Serv., North. For. Cent., Edmonton, Alberta. Inf. Rep. NOR-X-405. 36 p.',
      linkUrl: 'http://cfs.nrcan.gc.ca/publications?id=25627',
      linkText: 'http://cfs.nrcan.gc.ca/publications?id=25627',
      altText: 'Information Report Cover'
    }
  ];

  return (
    <div>
      <Banner title="Burn-P3" imageSrc="/images/burnp3_banner.jpg" />
      
      <div className="content">
        <h1>Documentation</h1>
        <DocumentationTable items={documentationItems} />
      </div>
    </div>
  );
};

export default BurnP3Documentation;