import { computeHeadingLevel } from "@testing-library/dom";
import {useState} from 'react'
import Section from "./Section";
import "./Sections.css";
import AddSection from "./AddSection"

const Sections = ({ sections }) => {

  const [showAddSection, setShowAddSection] = useState(false)
  return (
    <div className="sections">
      <div className="title">
        <h1>Lista sekcji</h1>
        <button type="button" class="btn btn-dark" onClick={() => setShowAddSection(!showAddSection)}>
          {showAddSection ? 'Zwiń' : 'Dodaj nową sekcję'}
        </button>
      </div>
      {showAddSection &&
        <AddSection />
      }
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </div>
  );
};

export default Sections;
