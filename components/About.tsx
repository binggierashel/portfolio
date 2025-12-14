"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-20 px-6 bg-black">
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
              icon={faGraduationCap}
              className="text-indigo-400 text-2xl"
            />
          </span>
          My Journey
        </h2>

        {/* TIMELINE */}
        <div className="space-y-8 border-l border-white/10 pl-6">
          {/* SMK */}
          <div>
            <span className="text-sm text-indigo-400 font-medium">
              2021 — 2024
            </span>
            <h3 className="text-xl font-semibold mt-1">
              SMKN 1 Kemang Bogor
            </h3>
            <p className="text-slate-400 mt-2 leading-relaxed">
              I completed my vocational education in{" "}
              <span className="text-white">
                Computer and Network Engineering
              </span>
              . During this period, I focused on learning computer networking,
              system administration, and web development. I was honored to
              receive the achievement of{" "}
              <span className="text-white">
                Best Student in the Computer and Network Engineering Department
              </span>
              .
            </p>
          </div>

          {/* UNIVERSITY */}
          <div>
            <span className="text-sm text-indigo-400 font-medium">
              2024 — Present
            </span>
            <h3 className="text-xl font-semibold mt-1">
              IPB University
            </h3>
            <p className="text-slate-400 mt-2 leading-relaxed">
              I am currently pursuing my studies at{" "}
              <span className="text-white">IPB University</span> in the{" "}
              <span className="text-white">
                Computer Engineering Technology
              </span>{" "}
              program. I continue to develop my skills in computer engineering,
              programming, and modern technologies to build innovative and
              impactful digital solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
