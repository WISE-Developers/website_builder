import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import '../styles/REDappOverview.css';

const REDappOverview = () => {
    return (
        <div>
            <Banner title="REDapp" imageSrc="/images/redapp_banner.png" />

            <div className="content">
                <h1>Overview</h1>

                <img className="right" src="/images/redapplogo_129x129.png" alt="REDapp Logo" />

                <p>
                    REDapp is a fire management decision support tool developed with financial support from the Canadian Interagency Forest Fire Centre (CIFFC), and financial as well as in-kind support from fire management agencies across Canada. The founding members of the CIFFC REDapp development team represent the Government of BC, Government of the Saskatchewan, Government of the Northwest Territories and The Canadian Forest Service.
                </p>


                <p><Link to="/redapp_documentation">Learn more...</Link></p>
            </div>
        </div>
    );
};

export default REDappOverview;