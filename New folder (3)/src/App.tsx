import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RulesPage from './pages/RulesPage';
import StorePage from './pages/StorePage';
import StaffPage from './pages/StaffPage';
import VotePage from './pages/VotePage';
import FaqPage from './pages/FaqPage';


function App() {
  return (
    <div className="min-h-screen bg-cream font-pixelify overflow-x-hidden text-navy">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </div>
  );
}

export default App;