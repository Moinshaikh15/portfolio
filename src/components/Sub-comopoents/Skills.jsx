import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";


export default function Skills() {
  let [skills, setSkills] = useState([]);
  let skillsFilters = ["Frontend", "Backend", "Others"];
  let [selectFilter, setSelectFilter] = useState("Frontend");
 
  let frontEnd = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "ReactJS",
    "Redux",
    "MaterialUI",
    "NextJS",
    "Webflow",
    "Tailwind"
  ];
  let backend = ["NodeJS", "MongoDB", "ExpressJS", "Postgres", "Firebase"];

  let others = ["Netlify", "VsCode", "Postman", "Vercel"];

  let filterProjects = (filterQuery) => {
    if (filterQuery === "Frontend") {
      setSkills(frontEnd);
    } else if (filterQuery === "Backend") {
      setSkills(backend);
    } else {
      setSkills(others);
    }
  };
  useEffect(() => {
    filterProjects(selectFilter);
  }, []);
  return (
    <div className="skills-main">
      <h2>Tech Stacks</h2>

      <div className="skills-filters">
        {skillsFilters.map((filter, indx) => (
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

      <div className="skills-container">
        {skills.map((skill, indx) => (
          <SkillCard key={skill + indx} skill={skill} />
        ))}
      </div>
    </div>
  );
}
