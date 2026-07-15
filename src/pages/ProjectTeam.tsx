import Banner from '../components/Banner';
import '../styles/ProjectTeam.css';

interface TeamMemberProps {
  name: string;
  role: string;
  expertise: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, expertise, imageSrc }) => {
  return (
    <div className="w3-card-4 w3-brown w3-round-large team-card">
      <img alt={`${name} avatar`} src={imageSrc} className="w3-round-large" />
      <div className="w3-container">
        <h4><strong>{name}</strong></h4>
        <p>{role}</p>
        <p>{expertise}</p>
      </div>
    </div>
  );
};

const ProjectTeam = () => {
  const teamMembers = [
    {
      name: "Neal McLoughlin [BC]",
      role: "Superintendent, Predictive Services Unit, BC Wildfire Service",
      expertise: "Prometheus, Fire Modelling, Governance, Govt of BC",
      imageSrc: "/images/team/neal_mcloughlin.jpeg"
    },
    {
      name: "Franco Nogarin [NT]",
      role: "Territorial Forest Planning Officer, Developer and Modeller, Govt of NWT, Fire Operations",
      expertise: "Nomad, W.I.S.E., Open Source, Full Stack Dev, Internet, Webhosting, Govt of NT",
      imageSrc: "/images/team/franco_nogarin.jpeg"
    },
    {
      name: "Brett Moore [CFS]",
      role: "Fire Response Manager, Canadian Forest Service",
      expertise: "Nomad, FireSTARR, Prometheus, W.I.S.E., REDApp, Burn-P3",
      imageSrc: "/images/team/brett_moore.jpeg"
    },
    {
      name: "Robert (Rob) Kruus [SK]",
      role: "Fire Science Modeller - Government of Saskatchewan",
      expertise: "FireSTARR, Prometheus, Modelling, Technology, Govt of SK",
      imageSrc: "/images/team/rob_kruus.jpeg"
    },
    {
      name: "Nicolas Livanos [BC]",
      role: "Organisational Developer & Executive Advisor, BC Wildfire Service",
      expertise: "Agile, Scrum, Project Management, Decision Support and Spatial Fire Management",
      imageSrc: "/images/team/nicolas_livanos.jpeg"
    },
    {
      name: "Dylan Baker [CIFFC]",
      role: "Developer, Canadian Interagency Forest Fire Centre",
      expertise: "REDApp, CIFFC",
      imageSrc: "/images/team/dylan_baker.jpeg"
    },
    {
      name: "Manny Diaz [CIFFC]",
      role: "Information Technology Architect & Stewardship Lead, Canadian Interagency Forest Fire Centre",
      expertise: "IT, CIFFC",
      imageSrc: "/images/team/manny_diaz.jpeg"
    },
    {
      name: "Kyle Steele [CIFFC]",
      role: "Professional Web Developer - WebWizards.ca",
      expertise: "REDApp",
      imageSrc: "/images/team/kyle_steele.jpeg"
    }
  ];

  return (
    <div>
      <Banner title="The Team" imageSrc="/images/main_banner.jpg" />
      
      <div className="content">
        <h1 id="development-team">National Fire Modelling Dev Team</h1>

        <div className="featured">
          <div className="w3-content" id="team">
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  expertise={member.expertise}
                  imageSrc={member.imageSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTeam;