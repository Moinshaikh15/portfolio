import React, { useEffect, useState } from "react";
import data from "../../data.json";
import ProjectCard from "../Sub-comopoents/ProjectCard";
export default function Projects() {
  let [projects, setProjects] = useState([]);
  let projectFilters = ["MERN", "Front-End", "Games"];
  let [selectFilter, setSelectFilter] = useState("MERN");

  let filterProjects = (filterQuery) => {
    let filteredData = data.projects.filter((el) =>
      el.categories.includes(filterQuery)
    );
    setProjects(filteredData);
  };
  useEffect(() => {
    filterProjects(selectFilter);
  }, []);
  return (
    <div className="projects-container" id="Projects">
      <h2>Projects</h2>

      <div className="Project-filters">
        {projectFilters.map((filter, indx) => (
          <div
            style={{
              backgroundColor: selectFilter === filter ? "rgb(109 40 217)" : "",
              color: selectFilter === filter ? "white" : "",
            }}
            onClick={() => {
              setSelectFilter(filter);
              filterProjects(filter);
            }}
            key={filter + indx}
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
