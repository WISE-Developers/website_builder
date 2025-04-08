import Banner from '../components/Banner';
import '../styles/BurnP3Support.css';

const BurnP3Support = () => {
  return (
    <div>
      <Banner title="Burn-P3" imageSrc="/images/burnp3_banner.jpg" />
      
      <div className="content">
        <h1>Technical Support</h1>
        
        <div className="support-info">
          <p><b>Peter Englefield</b></p>
          <p>
            Physical Sciences Officer<br />
            Northern Forestry Centre<br />
            5320 - 122 Street<br />
            Edmonton, Alberta T6H 3S5
          </p>
          <p>
            Phone: 825-510-1224<br />
            Email: <a href="mailto:peter.englefield@canada.ca">peter.englefield@canada.ca</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BurnP3Support;