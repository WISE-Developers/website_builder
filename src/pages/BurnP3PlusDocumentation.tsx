import Banner from '../components/Banner';
import DocumentationTable from '../components/DocumentationTable';
import '../styles/BurnP3PlusDocumentation.css';

const BurnP3PlusDocumentation = () => {
  const documentationItems = [
    {
      imageSrc: '/images/burnP3Plus-sticker.png',
      title: 'BurnP3+ SyncroSim Package',
      linkUrl: 'https://burnp3.github.io/BurnP3Plus/',
      linkText: 'Visit Website',
      altText: 'BurnP3+ Sticker'
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
      <Banner title="BurnP3+" imageSrc="/images/burnp3_banner.jpg" />
      
      <div className="content">
        <h1>Documentation</h1>
        <DocumentationTable items={documentationItems} />
      </div>
    </div>
  );
};

export default BurnP3PlusDocumentation;