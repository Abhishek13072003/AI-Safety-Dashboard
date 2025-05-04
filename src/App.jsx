import React from 'react';
import Navbar from './components/Navbar.tsx';
import IncidentDashboard from './components/IncidentDashboard';
import './styles.css'; // optional for global styling

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div style={{ padding: '1.5rem' }}>
        <IncidentDashboard />
      </div>
    </div>
  );
}

export default App;
