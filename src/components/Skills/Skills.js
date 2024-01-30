import React from "react";
import "./Skills.css"; // Import your CSS file for styling

function Skills() {
  const skills = [
    "python",
    "React",
    "HTML",
    "CSS",
    "machine learning",
    // Add more skills as needed
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
