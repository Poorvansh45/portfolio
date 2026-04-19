import { motion } from "framer-motion";
import Link from "next/link";

import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* name */}
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-accent mb-4"
          >
            Poorvansh Nandwar
          </motion.h2>

          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mb-6"
          >
            AI & Data Science Engineer
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12"
          >
            B.Tech in Artificial Intelligence & Data Science. Passionate about building 
            intelligent systems using Machine Learning, NLP, and Deep Learning.
          </motion.p>

          {/* buttons */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start"
          >
            <Link
              href="/work"
              className="group relative px-8 py-3 bg-accent text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-accent/80"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="group relative px-8 py-3 border border-white/50 text-white rounded-full overflow-hidden transition-all duration-300 hover:border-accent hover:text-accent"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Me <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
