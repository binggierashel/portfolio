"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GithubContributions() {
  return (
    <section id="github" className="max-w-4xl mx-auto py-24 px-6 bg-black">
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
              icon={faGithub}
              className="text-indigo-400 text-2xl"
            />
          </span>
          GitHub Contributions
        </h2>

        {/* CALENDAR */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 overflow-x-auto">
          <GitHubCalendar
            username="binggierashel"
            blockSize={14}
            blockMargin={4}
            fontSize={14}
            colorScheme="dark"
          />
        </div>
      </motion.div>
    </section>
  );
}
