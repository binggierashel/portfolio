"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

interface Project {
  title: string;
  desc: string;
  image: string;
  github?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "CRUD Laravel",
      desc: "CRUD application built with Laravel and MySQL.",
      image: "/image/project1.png",
      github: "https://fuumasite.github.io/form-validation/",
    },
    {
      title: "SarPras",
      desc: "facilities and infrastructure reporting system.",
      image: "/image/project2.jpeg",
      github: "https://github.com/satrio-netdevops/Sistem-Pelaporan-SarPras-SV-IPB",
    },
    {
      title: "Next.js Portfolio",
      desc: "Personal portfolio website built with Next.js.",
      image: "/image/project3.png",
      github: "https://binggie.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto py-20 px-6 bg-black"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 text-4xl md:text-5xl font-semibold mb-12"
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20">
          <FontAwesomeIcon
            icon={faFolderOpen}
            className="text-indigo-400 text-2xl"
          />
        </span>
        Projects
      </motion.h2>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="
              group rounded-2xl overflow-hidden
              bg-white/5 border border-white/10
              hover:border-indigo-400/40
              transition
            "
          >
            {/* IMAGE */}
            <div className="relative w-full h-40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">
                  {project.title}
                </h3>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-slate-400 hover:text-white transition"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                )}
              </div>

              <p className="text-slate-400 text-sm">
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
