import React, { useState } from 'react';

function IncidentItem({ incident }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="incident-item">
      <div className="incident-header">
        <h3>{incident.title}</h3>
        <p>Severity: {incident.severity}</p>
        <p>Reported: {new Date(incident.reported_at).toLocaleDateString()}</p>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      {showDetails && <p className="incident-description">{incident.description}</p>}
    </div>
  );
}

export default IncidentItem;
