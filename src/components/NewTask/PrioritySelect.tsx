import React from "react";
import type { PrioritySelectProps, Priority } from "../../type";

const PrioritySelect: React.FC<PrioritySelectProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Priority);
  };

  return (
    <div className="form-field">
      <label className="form-label">Priority</label>
      <select value={value} onChange={handleChange} className="form-select">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default PrioritySelect;
