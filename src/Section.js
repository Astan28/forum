import React from "react";
import { Link } from "react-router-dom";
import "./Sections.css";
const Section = ({ section }) => {
  return (
    <div className="section">
      <h3>
        {section.name}
        
      </h3>
      <button type="button" class="btn btn-dark">
          Edytuj
        </button>
        <button type="button" class="btn btn-dark">
          Usuń
        </button>
    </div>
  );
};

export default Section;
