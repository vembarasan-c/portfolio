import Title from './ui/Title.jsx';

import { motion } from 'framer-motion';

import profileImage from './util/image/profile.jpg';

function Header() {
  return (
    <header id="about" className="   scroll-m-10">
      <Title title="About" />
      <div className=" my-6 justify-center sm:flex text-slate-400 ">
        <div className=" flex mx-3 sm:mx-10 space-x-2 justify-between sm:gap-x-20 sm:justify-evenly w-4/6 ">
          <div className="space-y-3 px-3 text-sm sm:p-5  md:text-md lg:text-lg ">
            <h1 className=" lg:text-2xl text-teal-400 ">Hi I'm Vembarasan</h1>
            <h1> Building scalable and robust web applications </h1>
            <p>
              I'm good at problem solving and communication <br />
              Self-taught developer
            </p>
          </div>
          <div className=" sm:flex  justify-center align-middle  md:-mt-3 lg:mt-6 ">
            <img
              className=" position: absolute w-24 h-24 object-cover md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-[50%]  border-cyan-700   border-[2px]  "
              src={profileImage}
              alt="Profile image"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
         <a href="https://drive.google.com/file/d/1eJOCWik76Hd4R5ESvdVcjwc9Lrb8q8ga/view?usp=sharing">
        <motion.button
          transition={{ type: 'spring', duration: 0.8 }}
          initial={{ scale: 1 }}
          whileTap={{ scale: [0.8, 1] }}
          className=" mr-12 px-14   py-[8px] lg:text-2xl text-lg  rounded-lg 
        bg-gradient-to-r from-cyan-800 from-50% via-steal-500 via-90% to-emerald-800 to-100%" > 
          Resume
        </motion.button>
          </a>
      </div>
    </header>
  );
}

export default Header;
