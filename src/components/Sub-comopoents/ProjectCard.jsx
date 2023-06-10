import React from "react";

export default function ProjectCard({
  title,
  description,
  link,
  image,
  tech_stack,
}) {
  return (
    <div className="project-card">
      <img src={image} alt="" className="preview-img" />
      <div className="project-info">
        <h3 style={{fontWeight:"400"}}>
          {title}{" "}
          <a href={link} target="_blank">
            <img src="/icons/expand.png" alt="" />
          </a>
        </h3>
        <p className="description">{description}</p>
        <div>
          <h4 style={{fontWeight:"400"}}>Tech Stacks</h4>
          <div className="tech-stack">
            {tech_stack.map((stack, indx) => (
              <p key={indx + stack}>{stack}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
