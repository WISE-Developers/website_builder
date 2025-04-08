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
      role: "Project Team Lead & Prometheus Lead",
      expertise: "SME: Prometheus, Fire Modelling, Governance, Govt of BC",
      imageSrc: "/images/team/neal_mcloughlin.jpeg"
    },
    {
      name: "Franco Nogarin [NT]",
      role: "Design, Vision, Project Development Coordinator & W.I.S.E. Lead",
      expertise: "SME: W.I.S.E., Open Source, Full Stack Dev, Internet, Webhosting, Govt of NT",
      imageSrc: "/images/team/franco_nogarin.jpeg"
    },
    {
      name: "Brett Moore [CFS]",
      role: "Development Team Lead, Design & Testing",
      expertise: "SME: Prometheus, W.I.S.E., REDApp, Burn-P3",
      imageSrc: "/images/team/brett_moore.jpeg"
    },
    {
      name: "Robert (Rob) Kruus [SK]",
      role: "Team Consultant - Fire Science Modeller - Govt of SK",
      expertise: "SME: Prometheus, Modelling, Technology, Govt of SK",
      imageSrc: "/images/team/rob_kruus.jpeg"
    }
  ];

  return (
    <div>
      <Banner title="The Team" imageSrc="/images/main_banner.jpg" />
      
      <div className="content">
        <h1 id="development-team">WISE Exec Team</h1>
        <h4 id="team-members">Team Members: If you don't like your photo, provide a better one ;-)</h4>
        
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