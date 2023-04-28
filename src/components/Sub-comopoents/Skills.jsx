import React, { useEffect, useState } from "react";

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
  ];
  let backend = ["NodeJS", "MongoDB", "ExpressJS", "Postgres", "Firebase"];

  let others = ["Netlify", "VsCode", "Postman"];

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
          <div key={skill + indx} title={skill}>
            <div className="skill-div">
              <img
                src={`/icons/${skill.toLowerCase()}.${
                  skill === "JavaScript" ? "gif" : "png"
                }`}
                alt=""
              />
            </div>
            <p style={{ textAlign: "center" }}>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="skills-container">
        <h2>Tech Stacks</h2>
        <div className="skills-filters">
          {skillsFilters.map((filter, indx) => (
            <div
              style={{
                backgroundColor: selectFilter === filter ? "#02b48f" : "",
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

        <div className="skills">
          {skills.map((skill, indx) => (
            <div className="skill-div" key={skill + indx}>
              <img
                src={`/icons/${skill}.${skill === "js" ? "gif" : "png"}`}
                alt=""
              />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div> */
}
