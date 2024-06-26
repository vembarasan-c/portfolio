import Title from './ui/Title.jsx';
import icons from './util/icon.js';

import image from "../assets/media.jpg"

import { motion, useTransform, useScroll } from 'framer-motion';

function Skills() {
  const { scrollY } = useScroll();
  const scrollProject = useTransform(
    scrollY,
    [0, 200, 300, 500, 800, 1000, 1300, 1500],
    [0, 0.5, 1, 1, 0.9, 0, 0.6, 0]
  );

  const landing = useTransform(scrollY, [0, 100, 200, 400], [0, -20, 20, 20]);

  return (
    <>
      <Title title="Technologies" />
      <motion.section
        className="flex justify-center "
        style={{ y: landing, opacity: scrollProject }}
      >
        <div className="grid gap-10 my-4 align-middle justify-center grid-cols-3 lg:grid-cols-4  grid-rows-3  ">
          {icons.map((icon) => (
            <motion.p
              transition={{ type: 'spring', ease: 'easeIn', duration: 0.8 }}
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.18 }}
              className=" mx-2 my-2"
              key={icon.id}
            >
              <img
                key={icon.id}
                className=" px-2 py-2 rounded-md  bg-gray-800 "
                width="65px "
                height="65px"
                src={icon.icon}
                alt=""
              />
            </motion.p>
          ))}
        </div>




      </motion.section>


    </>
  );
}

export default Skills;
