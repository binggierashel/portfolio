"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faLaravel,
  faPhp,
  faNodeJs,
  faDocker,
  faLinux,
  faGithub,

} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const techStack = [
  { name: "HTML", icon: faHtml5, color: "text-orange-500" },
  { name: "CSS", icon: faCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
  { name: "React", icon: faReact, color: "text-cyan-400" },
  { name: "Laravel", icon: faLaravel, color: "text-red-500" },
  { name: "PHP", icon: faPhp, color: "text-indigo-400" },
  { name: "Nodejs", icon: faNodeJs, color: "text-green-500" },
  { name: "Docker", icon: faDocker, color: "text-blue-400" },
  { name: "Linux", icon: faLinux, color: "text-gray-400" },
    { name: "GitHub", icon: faGithub, color: "text-gray-300" },
];

export default function TechArsenal() {
  return (
    <section id="tech" className="max-w-4xl mx-auto py-20 px-6 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* TITLE */}
        <h2 className="flex items-center gap-4 text-4xl md:text-5xl font-semibold mb-10">
          <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20">
            <FontAwesomeIcon
              icon={faCode}
              className="text-indigo-400 text-2xl"
            />
          </span>
          Tech Arsenal
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="
                group flex flex-col items-center justify-center
                p-5 rounded-2xl
                bg-white/5 border border-white/10
                hover:border-indigo-400/40
                hover:bg-white/10
                transition
              "
            >
              <FontAwesomeIcon
                icon={tech.icon}
                className={`text-4xl mb-3 ${tech.color}`}
              />
              <span className="text-sm text-slate-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
