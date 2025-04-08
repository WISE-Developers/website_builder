import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import AppRoutes from './AppRoutes';

function App() {
  // Using HashRouter with a basename that's empty to ensure compatibility with GitHub Pages
  return (
    <Router basename="">
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