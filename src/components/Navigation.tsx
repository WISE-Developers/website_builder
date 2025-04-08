import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseOver = (menuId: string) => {
    setActiveMenu(menuId);
  };

  const handleMouseOut = () => {
    setActiveMenu(null);
  };

  return (

    <div id="dropdownMenu">

      <ul className="menu" id="menu">
        
          <Link to="/">Home</Link>
          <Link to="/project_team">Team</Link>

       
        <li
          onMouseOver={() => handleMouseOver('prometheus')}
          onMouseOut={handleMouseOut}
          className={activeMenu === 'prometheus' ? 'menuhover' : ''}
        >
          <Link to="/prometheus_overview">Prometheus</Link>
          <ul style={{ display: activeMenu === 'prometheus' ? 'block' : 'none' }}>
            <li><Link to="/prometheus_overview">Overview</Link></li>
            <li><Link to="/prometheus_documentation">Documentation</Link></li>
            <li><Link to="/prometheus_software">Software</Link></li>
            <li><Link to="/prometheus_support">Support</Link></li>
            <li><Link to="/prometheus_eol">EOL</Link></li>
          </ul>
        </li>


        <li
          onMouseOver={() => handleMouseOver('wise')}
          onMouseOut={handleMouseOut}
          className={activeMenu === 'wise' ? 'menuhover' : ''}
        >
        <Link to="/wise_overview">W.I.S.E.</Link>
          <ul style={{ display: activeMenu === 'wise' ? 'block' : 'none' }}>
            <li><Link to="/wise_overview">Overview</Link></li>
            <li><Link to="/wise_documentation">Documentation</Link></li>
            <li><Link to="/wise_software">Software</Link></li>
            <li><Link to="/wise_support">Support</Link></li>
          </ul>
        </li>


        <li
          onMouseOver={() => handleMouseOver('redapp')}
          onMouseOut={handleMouseOut}
          className={activeMenu === 'redapp' ? 'menuhover' : ''}
        >
        <Link to="/redapp_overview">REDapp</Link>
          <ul style={{ display: activeMenu === 'redapp' ? 'block' : 'none' }}>
            <li><Link to="/redapp_overview">Overview</Link></li>
            <li><Link to="/redapp_documentation">Documentation</Link></li>
            <li><Link to="/redapp_software">Software</Link></li>
            <li><Link to="/redapp_support">Support</Link></li>
          </ul>
        </li>




        <li
          onMouseOver={() => handleMouseOver('burnp3')}
          onMouseOut={handleMouseOut}
          className={activeMenu === 'burnp3' ? 'menuhover' : ''}
        >
          <Link to="/burnp3_overview">Burn-P3</Link>
          <ul style={{ display: activeMenu === 'burnp3' ? 'block' : 'none' }}>
            <li><Link to="/burnp3_overview">Overview</Link></li>
            <li><Link to="/burnp3_documentation">Documentation</Link></li>
            <li><Link to="/burnp3_software">Software</Link></li>
            <li><Link to="/burnp3_support">Support</Link></li>
          </ul>
        </li>
        <li
          onMouseOver={() => handleMouseOver('burnp3plus')}
          onMouseOut={handleMouseOut}
          className={activeMenu === 'burnp3plus' ? 'menuhover' : ''}
        >
          <Link to="/burnp3plus_overview">BurnP3+</Link>
          <ul style={{ display: activeMenu === 'burnp3plus' ? 'block' : 'none' }}>
            <li><Link to="/burnp3plus_overview">Overview</Link></li>
            <li><Link to="/burnp3plus_documentation">Documentation</Link></li>
            <li><Link to="/burnp3plus_software">Software</Link></li>
            <li><Link to="/burnp3plus_support">Support</Link></li>
          </ul>
        </li>
        <li
          onMouseOver={() => handleMouseOver('pandora')}
          onMouseOut={handleMouseOut}
          className={activeMenu === 'pandora' ? 'menuhover' : ''}
        >
          <Link to="/pandora_overview">Pandora</Link>
          <ul style={{ display: activeMenu === 'pandora' ? 'block' : 'none' }}>
            <li><Link to="/pandora_overview">Overview</Link></li>
            <li><Link to="/pandora_documentation">Documentation</Link></li>
            <li><Link to="/pandora_software">Software</Link></li>
            <li><Link to="/pandora_support">Support</Link></li>
          </ul>
        </li>
        <li><Link to="/fban_tools">FBAN Tools</Link></li>
      </ul>
    </div>

  );
};

export default Navigation;