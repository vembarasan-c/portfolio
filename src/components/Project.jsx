import Containers from './ui/Container.jsx';
import Title from './ui/Title.jsx';

import projects from './util/projects.js';

function Project() {
  return (
    <div className=" scroll-mt-10" id="project">
      <Title title="Projects" />

      {projects.map((project) => (
        <Containers
          key={project.id}
          image={project.image}
          language={project.technologiesUsed}
          link={project.link}
          name={project.projectName}
        />
      ))}
    </div>
  );
}

// Pending 4 projects and dynamic rendering

export default Project;
