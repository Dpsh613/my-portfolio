// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  // Later, you might fetch project data from an array/API
  const projectData = [
    { id: 1, title: "Project 1", description: "Description of project 1." },
    { id: 2, title: "Project 2", description: "Description of project 2." },
    // Add more projects
  ];

  return (
    <section id="projects" className="p-8 bg-gray-50">
      {/* Added id and slightly different background */}
      <div className="container mx-auto">
        {" "}
        {/* Added container for centering */}
        <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example rendering dynamically - remember the 'key' prop! */}
          {projectData.map((project) => (
            <div
              key={project.id}
              className="p-6 shadow rounded-lg bg-white transform hover:scale-105 transition-transform duration-300"
            >
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-600">{project.description}</p>
              {/* Add links to project/repo if available */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
