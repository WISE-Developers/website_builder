import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import AppRoutes from './AppRoutes';
//import './styles/index.css';
//import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="header-nav-container">
          <Header />
          <Navigation />
        </div>
        <div className="content-wrapper">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;