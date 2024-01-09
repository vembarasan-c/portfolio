import { motion, useScroll, useTransform } from 'framer-motion';
import Containers from './ui/Container.jsx';
import Title from './ui/Title.jsx';

function Project() {
  return (
    <div className=" scroll-mt-10" id="project">
      <Title title="Projects" />

      <Containers image="#" language="Java" link="#" name="App" />
    </div>
  );
}

// Pending 4 projects and dynamic rendering

export default Project;
