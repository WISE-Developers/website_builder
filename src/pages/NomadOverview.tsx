import Banner from '../components/Banner';
//import { Link } from 'react-router-dom';
import '../styles/NomadOverview.css';

const NomadOverview = () => {
  return (
    <div>
      <Banner title="Project Nomad" imageSrc="/images/nomad_banner.jpg" />

      <div className="content">
        <h1>Overview</h1>

        <img className="right" src="/images/nomad_logo.jpg" alt="Project Nomad Logo" />

        <p>Project Nomad is an open-source, web-based fire modelling application for Canadian wildfire management. It gives wildfire professionals a modern, map-driven interface to run fire behaviour simulations directly in a browser &mdash; predicting where a wildfire is likely to spread and how intense it may be, either as a single predicted progression or as a probability of burn across the landscape.</p>

        <p>Analysis that once required specialized desktop software, deep technical setup, and a dedicated workstation is reduced to a guided workflow: draw an ignition on the map, set a time window, choose a model and mode, provide weather, and review the modelled outcome on a map. Nomad's goal is to make credible fire modelling more accessible to the people making decisions on the fire line.</p>

        <p>Nomad is developed within the Canadian Wildland Fire Modelling Framework (CWFMF) ecosystem and is released under the open-source AGPLv3 license.</p>

        <h2>Key Features</h2>
        <ul>
          <li>Installed on a server or a local machine, then used in any modern browser &mdash; online, or fully offline in the field</li>
          <li>Guided model-setup wizard: location, time range, model, and weather in a few steps</li>
          <li>Two FireSTARR modelling modes &mdash; deterministic (a single predicted fire progression) and probabilistic (Monte Carlo burn-probability)</li>
          <li>Interactive drawing tools for point, line, and polygon ignitions</li>
          <li>Burn-probability surfaces, fire-perimeter contours, and hour-by-hour animation</li>
          <li>Export of results as GeoTIFF, GeoJSON, KML, or Shapefile</li>
          <li>Flexible deployment: self-hosted stand-alone, or integrated into an agency system</li>
        </ul>

        <h2>Model Engine</h2>
        <p>Nomad drives the <strong>FireSTARR</strong> fire-growth engine, developed within the CWFMF. FireSTARR can be run in two modes, chosen per run:</p>
        <ul>
          <li><strong>Deterministic</strong> &mdash; a single simulation from one weather stream, producing a specific predicted fire progression: fire perimeters over time and arrival time (when the fire reaches each location). Well suited to a best-estimate forecast of a particular fire.</li>
          <li><strong>Probabilistic</strong> &mdash; many simulations across multiple weather scenarios (Monte Carlo), producing a burn-probability surface that shows how likely each area is to burn and captures the uncertainty in the forecast.</li>
        </ul>
        <p>Nomad executes the engine at arm's length and focuses on the parts fire staff interact with: setting up a run, choosing the mode, watching it progress, and interpreting the results on a map.</p>

        <h2>Core Workflows</h2>
        <p><strong>Model setup.</strong> A step-by-step wizard collects the ignition location, the time window, the model and mode, and the weather inputs, then submits the run and streams progress back to the browser.</p>

        <p><strong>Model review.</strong> Completed runs are displayed on an interactive map &mdash; burn-probability maps, perimeter contours, and time-stepped animation &mdash; so analysts can quickly read the modelled outcome.</p>

        <p><strong>Model export.</strong> Results can be exported in common geospatial formats for use in other systems, shared, or archived.</p>

        <h2>Deployment Modes</h2>
        <ul>
          <li><strong>Stand Alone Nomad (SAN):</strong> a self-contained, self-hosted deployment with no external service dependencies &mdash; suitable for a single agency or a field deployment.</li>
          <li><strong>Agency Centric Nomad (ACN):</strong> Nomad integrated as a component within an existing agency system, deferring authentication to the host application.</li>
        </ul>
      </div>
    </div>
  );
};

export default NomadOverview;
