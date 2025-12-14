"use client";

import { motion } from "framer-motion";
import { Mail, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto py-20 px-6 bg-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* TITLE */}
        <h2 className="flex items-center justify-center gap-4 text-4xl md:text-5xl font-semibold mb-6">
          <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20">
            <Send className="text-indigo-400" />
          </span>
          Contact
        </h2>

        <p className="text-slate-400 text-center mb-10">
          Feel free to reach out to me through the form below.
        </p>

        {/* GOOGLE FORM */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSestoNAugH-ghCHPgc4Y0wwY7TTKA-tboduQ7WFNc3Sd8UThw/viewform?embedded=true" 
            width="100%"
            height="520"
            className="w-full"
          >
            Loading…
          </iframe>
        </div>


        {/* FOOTER */}
        <p className="text-slate-600 text-sm text-center mt-12">
          © {new Date().getFullYear()} Binggie
        </p>
      </motion.div>
    </section>
  );
}
