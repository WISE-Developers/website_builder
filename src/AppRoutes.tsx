import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrometheusOverview from './pages/PrometheusOverview';
import PrometheusDocumentation from './pages/PrometheusDocumentation';
import PrometheusSoftware from './pages/PrometheusSoftware';
import PrometheusSupport from './pages/PrometheusSupport';
import PrometheusEOL from './pages/PrometheusEOL';
import WISEOverview from './pages/WISEOverview';
import WISEDocumentation from './pages/WISEDocumentation';
import WISESoftware from './pages/WISESoftware';
import WISESupport from './pages/WISESupport';
import REDappOverview from './pages/REDappOverview';
import REDappDocumentation from './pages/REDappDocumentation';
import REDappSoftware from './pages/REDappSoftware';
import REDappSupport from './pages/REDappSupport';

import BurnP3Overview from './pages/BurnP3Overview';
import BurnP3Documentation from './pages/BurnP3Documentation';
import BurnP3Software from './pages/BurnP3Software';
import BurnP3Support from './pages/BurnP3Support';
import BurnP3PlusOverview from './pages/BurnP3PlusOverview';
import BurnP3PlusDocumentation from './pages/BurnP3PlusDocumentation';
import BurnP3PlusSoftware from './pages/BurnP3PlusSoftware';
import BurnP3PlusSupport from './pages/BurnP3PlusSupport';
import PandoraOverview from './pages/PandoraOverview';
import PandoraDocumentation from './pages/PandoraDocumentation';
import PandoraSoftware from './pages/PandoraSoftware';
import PandoraSupport from './pages/PandoraSupport';
import ProjectTeam from './pages/ProjectTeam';
import CodeOfConduct from './pages/CodeOfConduct';
import FBANTools from './pages/FBANTools';
import NotFound from './pages/NotFound';
import SpotWXImportHelp from './pages/SpotWXImportHelp';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Prometheus routes */}
      
      <Route path="/prometheus_overview" element={<PrometheusOverview />} />
      <Route path="/prometheus_documentation" element={<PrometheusDocumentation />} />
      <Route path="/prometheus_software" element={<PrometheusSoftware />} />
      <Route path="/prometheus_support" element={<PrometheusSupport />} />
      <Route path="/prometheus_eol" element={<PrometheusEOL />} />
      
      {/* WISE routes */}
      
      <Route path="/wise_overview" element={<WISEOverview />} />
      <Route path="/wise_documentation" element={<WISEDocumentation />} />
      <Route path="/wise_software" element={<WISESoftware />} />
      <Route path="/wise_support" element={<WISESupport />} />
      
    {/* REDapp routes */}
      <Route path="/redapp_overview" element={<REDappOverview />} />
      <Route path="/redapp_documentation" element={<REDappDocumentation />} />
      <Route path="/redapp_software" element={<REDappSoftware />} />
      <Route path="/redapp_support" element={<REDappSupport />} />
      


      {/* BurnP3 routes */}
      
      <Route path="/burnp3_overview" element={<BurnP3Overview />} />
      <Route path="/burnp3_documentation" element={<BurnP3Documentation />} />
      <Route path="/burnp3_software" element={<BurnP3Software />} />
      <Route path="/burnp3_support" element={<BurnP3Support />} />
      
      {/* BurnP3+ routes */}
      <Route path="/burnp3plus_overview" element={<BurnP3PlusOverview />} />
      <Route path="/burnp3plus_documentation" element={<BurnP3PlusDocumentation />} />
      <Route path="/burnp3plus_software" element={<BurnP3PlusSoftware />} />
      <Route path="/burnp3plus_support" element={<BurnP3PlusSupport />} />
      
      {/* Pandora routes */}      
      <Route path="/pandora_overview" element={<PandoraOverview />} />
      <Route path="/pandora_documentation" element={<PandoraDocumentation />} />
      <Route path="/pandora_software" element={<PandoraSoftware />} />
      <Route path="/pandora_support" element={<PandoraSupport />} />
      
      {/* Other pages */}
      <Route path="/project_team" element={<ProjectTeam />} />
      <Route path="/conduct" element={<CodeOfConduct />} />
      <Route path="/fban_tools" element={<FBANTools />} />
      <Route path="/spotwx_import_help" element={<SpotWXImportHelp />} />
      
      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;