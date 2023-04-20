import React, { useEffect, useState } from "react";
import data from "../../data.json";
import ProjectCard from "../Sub-comopoents/ProjectCard";
export default function Projects() {
  let [projects, setProjects] = useState([]);
  let projectFilters = ["MERN Stack", "Front-End", "Games"];
  let [selectFilter, setSelectFilter] = useState("MERN Stack");

  let filterProjects = (filterQuery) => {
    let filteredData = data.projects.filter(
      (el) => el.category === filterQuery
    );
    setProjects(filteredData);
  };
  useEffect(() => {
    setProjects(data.projects);
  }, []);
  return (
    <div className="projects-container">
      <h1>Projects</h1>

      <div className="Project-filters">
        {projectFilters.map((filter) => (
          <div
            style={{
              backgroundColor: selectFilter === filter ? "#02b48f" : "",
              color: selectFilter === filter ? "white" : ""
            }}
            onClick={() => {
              setSelectFilter(filter);
              filterProjects(filter);
            }}
          >
            <p>{filter}</p>
          </div>
        ))}
      </div>

      <div className="projects">
        {projects.map((project, indx) => {
          return <ProjectCard {...project} key={indx + project.title} />;
        })}
      </div>
    </div>
  );
}