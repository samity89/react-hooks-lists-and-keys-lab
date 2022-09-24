import React from "react";

function ProjectItem({ name, about, technologies }) {
  const usedTechnology = technologies.map((technology) => {
    return <span key={technology}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {usedTechnology}
      </div>
    </div>
  );
}

export default ProjectItem;
