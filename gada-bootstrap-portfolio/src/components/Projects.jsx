import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2>Projects</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Fake Currency Detection</h5>
                <p className="card-text">A machine learning project for identifying fake notes.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">The website you’re viewing right now — built using React & Bootstrap.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
