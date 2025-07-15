import React from "react";

const Legend: React.FC = () => (
  <div className="legend-container">
    <div className="legend-items">
      <span className="legend-item"><span className="legend-dot priority-low" /> Low</span>
      <span className="legend-item"><span className="legend-dot priority-medium" /> Medium</span>
      <span className="legend-item"><span className="legend-dot priority-high" /> High</span>
    </div>
  </div>
);

export default Legend;
