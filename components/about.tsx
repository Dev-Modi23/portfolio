// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-3">
        After passing out my <b className="font-medium">School</b>, I
decided to pursue my interest in <b className="font-medium">technology and programming</b>.
I started learning about{" "}
<b className="font-medium">Machine Learning and Data Science</b>.{" "}
<i className="italic">My favorite part of programming</i> is solving
problems and building projects. I <u className="underline">love</u> turning
ideas into real-world applications through code. I am
also learning Machine Learning and AI tools. I am always looking to learn
new technologies and improve my skills. I am currently working towards a{" "}
<b className="font-medium">career in Machine Learning and Data Science</b>.
      </p>

      {/* Display another paragraph about the user's interests and hobbies. */}
      <p>
        <i className="italic">When I'm not coding</i>, I enjoy exploring new technologies, learning about AI, and working on personal projects.
        <b className="font-medium">I also like watching tech videos and reading about innovations in science and technology.</b>. 
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
