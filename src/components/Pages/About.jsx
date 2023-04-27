import React, { useEffect, useState } from "react";

export default function About() {
  let [skills, setSkills] = useState([]);
  let skillsFilters = ["Frontend", "Backend", "Others"];
  let [selectFilter, setSelectFilter] = useState("Frontend");

  let frontEnd = [
    "js",
    "html",
    "css",
    "react",
    "redux",
    "materialui",
    "nextjs",
    "webflow",
  ];
  let backend = ["nodejs", "mongodb", "expressjs", "postgres", "firebase"];

  let others = ["netlify", "vscode", "postman"];

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
    <div className="about" id="About">
      <h2>About me</h2>
      <div className="about-main">
        <div className="left">
          <img src="profile_photo.png" alt="" />
        </div>
        <div className="right">
          <p className="name">Moin Shaikh</p>
          <p>
            I'm a MERN Stack developer, who loves to learn and creatively solve
            problems, Ambitious and excited to work on new projects and other
            challenging opportunities, I have experience with technologies such
            as HTML, CSS, JavaScript, React.js, Tailwind CSS, Redux, Express.js,
            Node.js, Firebase, MongoDB, PostgreSQL, etc.
          </p>
        </div>
      </div>
      <h2>Tech Stacks</h2>

      <div className="skills-container">
        
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
          {skills.map((skill) => (
            <div className="skill-div">
              <img
                src={`/icons/${skill}.${skill === "js" ? "gif" : "png"}`}
                alt=""
              />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
