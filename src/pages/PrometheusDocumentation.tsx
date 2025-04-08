import Banner from '../components/Banner';
import DocumentationTable from '../components/DocumentationTable';
import '../styles/PrometheusDocumentation.css';

const PrometheusDocumentation = () => {
  const documentationItems = [
    {
      imageSrc: '/images/info_report_NOR-X-417.jpg',
      title: 'Tymstra, C.; Bryce, R.W.; Wotton, B.M.; Taylor, S.W.; Armitage, O.B. 2010. Development and Structure of Prometheus: the Canadian Wildland Fire Growth Simulation Model. Nat. Resour. Can., Can. For. Serv., North. For. Cent., Edmonton, Alberta. Inf. Rep. NOR-X-417. 88 p.',
      linkUrl: 'https://spyd.com/fgm.ca/Prometheus_Information_Report_NOR-X-417_2010.pdf',
      linkText: 'PDF',
      altText: 'Information Report Cover'
    },
    {
      imageSrc: '/images/com_programmer_doc.jpg',
      title: 'COM Programmer Documentation. Generated 2014-09-08.',
      linkUrl: '../resources/com/PrometheusCOM/index.html',
      linkText: 'On-line',
      altText: 'COM Programmer Documentation'
    }
  ];

  return (
    <div>
      <Banner title="Prometheus" imageSrc="/images/prometheus_banner.jpg" />
      
      <div className="content">
        <h1>Documentation</h1>
        <DocumentationTable items={documentationItems} />
      </div>
    </div>
  );
};

export default PrometheusDocumentation;