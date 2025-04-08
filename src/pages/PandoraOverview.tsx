import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import '../styles/PandoraOverview.css';

const PandoraOverview = () => {
  return (
    <div>
      <Banner title="Pandora" imageSrc="/images/pandora_banner.jpg" />
      
      <div className="content">
        <h1>Overview</h1>
        <div className="warning">
          <p>The COM (Common Object Model) is a deprecated Microsoft Windows technology. The <Link to="/wise">W.I.S.E.</Link> project is the modern, open-source successor to Prometheus tools including Pandora.</p>
        </div>
        
        <img className="right" src="/images/pandora_interface.png" alt="Pandora Interface" />

        <p>Pandora is a Windows application that gives users the ability to batch-run basic Prometheus simulations without using the Prometheus user interface. All the parameters for the simulations are specified in a single text file, including the locations of data input files such as fuels, terrain, and weather. Any number of simulations can be specified in the parameters text file. The input window, shown here, is optional and can be suppressed with a command line option.</p>

        <p>In Greek mythology, Pandora was the wife of Prometheus' brother, Epimetheus. Whereas Prometheus means "forethought", Epimetheus means "afterthought". Pandora, whose name means "all gifts", has a bad reputation because the gods gave her a box or jar as a dowry. Prometheus warned her not to open the box, but her curiosity got the better of her. When she opened the box, out came all the evil in the world. (This, however, is not how the Pandora program works.)</p>

        <p>The <a href="http://www.nrcan.gc.ca/forests" target="_blank" rel="noopener noreferrer">Canadian Forest Service</a> is the lead agency, custodian and legal intellectual property rights holder of Pandora.</p>
      </div>
    </div>
  );
};

export default PandoraOverview;