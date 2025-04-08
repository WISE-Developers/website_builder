import Banner from '../components/Banner';
import '../styles/PrometheusEOL.css';

const PrometheusEOL = () => {
  return (
    <div>
      <Banner title="Prometheus EOL" imageSrc="/images/prometheus_banner.jpg" />
      
      <div className="content">
        <h1>End Of Life (EOL)</h1>
        
        <img className="right" src="/images/logo_prometheus.png" alt="Prometheus Logo" />

        <div className="warning">
          <p>Prometheus was first released in 2002 and In 2022 we will be releasing the final build of Prometheus aka EOL (End of Life). 
          It represents the last 20 years of evolution of our windows based, monolithic desktop fire modeling application.</p>
          <p>Over the years, we have often dreamed of a more powerful fire modelling framework that would support automation, be open sourced, be collaboratively developed, and would tick off all the boxes of a tool meant to model fires operationally and in the enterprise.</p>
          <p>The idea of this "Next Generation" Prometheus Service was first discussed at the Prometheus training course at the Hinton Training Center in 2007 but did not gain any real traction.</p>
          <p>In 2010 at the first <a href="https://wildlandfirecanada.com/" target="_blank" rel="noopener noreferrer">Wildfire Canada Conference</a> in Kitchener, Ontario, A poster presentation on such a framework was presented, and the wildfire community heard of it for the first time.</p>
          <p>In 2015 the first prototype of the new service, formerly called Prometheus Software as a Service (PSaaS), now known as the Wildfire Intelligence and Simulation Engine(W.I.S.E.) was built by the NWT. W.I.S.E. is now the logical successor to Promethues COM.</p>
          <p>Prometheus and the COM will no longer be Built moving forward. Community support will continue officially for 1 year after the EOL release.</p>
        </div>
      </div>
    </div>
  );
};

export default PrometheusEOL;