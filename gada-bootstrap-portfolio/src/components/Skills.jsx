import React from 'react';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Git'];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2>Skills</h2>
        <ul className="list-inline">
          {skills.map(skill => (
            <li key={skill} className="list-inline-item badge bg-secondary m-1 p-2">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
