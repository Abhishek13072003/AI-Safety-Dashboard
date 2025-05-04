import React, { useState } from 'react';
import IncidentItem from './IncidentItem';
import IncidentForm from './IncidentForm';

const initialData = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  }
];

function IncidentDashboard() {
  const [incidents, setIncidents] = useState(initialData);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const handleAddIncident = (newIncident) => {
    setIncidents(prev => [newIncident, ...prev]);
  };

  const filteredIncidents = incidents
    .filter(incident => filter === "All" || incident.severity === filter)
    .sort((a, b) => {
      if (sortOrder === "Newest") {
        return new Date(b.reported_at) - new Date(a.reported_at);
      } else {
        return new Date(a.reported_at) - new Date(b.reported_at);
      }
    });

  return (
    <div className="dashboard">
      <div className="controls">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>

      <IncidentForm onAdd={handleAddIncident} />

      <div className="incident-list">
        {filteredIncidents.map(incident => (
          <IncidentItem key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
}

export default IncidentDashboard;
