"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black flex items-center py-20"
    >
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT – PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="flex flex-col items-center gap-5">
              {/* PHOTO */}
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/image/profile.jpeg"
                  alt="Binggie Rashel Prasetyo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/username"
                  target="_blank"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-white transition hover:scale-110"
                >
                  <FontAwesomeIcon icon={faGithub} size="2xl" />
                </a>

                <a
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="text-blue-500 hover:text-blue-400 transition hover:scale-110"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
                </a>

                <a
                  href="https://instagram.com/username"
                  target="_blank"
                  aria-label="Instagram"
                  className="text-pink-500 hover:text-pink-400 transition hover:scale-110"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2xl" />
                </a>
                <a
                  href="https://facebook.com/username"
                  target="_blank"
                  aria-label="Facebook"
                  className="text-blue-500 hover:text-blue-400 transition hover:scale-110"
                >
                  <FontAwesomeIcon icon={faFacebookF} size="2xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-3">
              Hi, i'm {" "}
              <span className="text-white">
                Binggie <br /> Rashel Prasetyo
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-neutral-400 mb-6">
              Computer Engineering
            </h2>

            <p className="text-gray-400 max-w-md mb-8 mx-auto md:mx-0">
              i'm binggie, a passionate student majoring in Computer Engineering at IPB University. I love exploring technology and creating web applications.
            </p>

            {/* CTA (optional) */}
            <a
              href="#contact"
              className="inline-block px-6 py-3 border border-white/20 rounded-xl hover:border-indigo-400 transition"
            >
              Contact Me
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
