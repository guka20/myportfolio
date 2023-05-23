import React from "react";
type ProjectItemProp = {
  name: string;
  github: string;
  website: string;
};
export const ProjectItem = ({ name, github, website }: ProjectItemProp) => {
  return (
    <div className="project_item">
      <div className="image" />
      <div className="name">
        <span>{name}</span>
      </div>
      <hr />
      <div className="directions">
        <a href={github} target="_blank" rel="noreferrer">
          <span>Code</span>
        </a>
        <a href={website} target="_blank" rel="noreferrer">
          <span>Demo</span>
        </a>
      </div>
    </div>
  );
};
