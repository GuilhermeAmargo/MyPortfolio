'use client';

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Linkedin, Mail, Github } from "lucide-react";
import { SiGooglecloud, SiCredly } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#021526] to-[#042f5a]">
      <Header />

      <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#6EACDA] mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          📬 Contato
        </motion.h2>

        <motion.p
          className="text-lg text-gray-200 max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Fique à vontade para entrar em contato comigo por e-mail ou pelas redes abaixo.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.a
            href="mailto:guilhermecamargosilva211@gmail.com"
            className="bg-[#092c4c] hover:bg-[#0f3e6b] p-6 rounded-lg shadow-md transition-all duration-300 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="text-3xl mb-2 text-[#6EACDA]" />
            <p className="text-lg font-semibold">E-mail</p>
            <p className="text-sm text-gray-300 break-words">guilhermecamargosilva211@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://github.com/GuilhermeAmargo"
            target="_blank"
            className="bg-[#092c4c] hover:bg-[#0f3e6b] p-6 rounded-lg shadow-md transition-all duration-300 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Github className="text-3xl mb-2 text-[#6EACDA]" />
            <p className="text-lg font-semibold">GitHub</p>
            <p className="text-sm text-gray-300 break-words">github.com/GuilhermeAmargo</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/guilherme-camargo-silva-5586b3292"
            target="_blank"
            className="bg-[#092c4c] hover:bg-[#0f3e6b] p-6 rounded-lg shadow-md transition-all duration-300 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            >

            <Linkedin className="text-3xl mb-2 text-[#6EACDA]" />
            <p className="text-lg font-semibold">LinkedIn</p>
            <p className="text-sm text-gray-300 break-words">linkedin.com/in/guilherme-camargo-silva</p>
          </motion.a>

          <motion.a
            href="https://www.cloudskillsboost.google/public_profiles/e80c3df5-0e77-42f2-b349-34033d731bd8"
            target="_blank"
            className="bg-[#092c4c] hover:bg-[#0f3e6b] p-6 rounded-lg shadow-md transition-all duration-300 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            >

            <SiGooglecloud className="text-3xl mb-2 text-[#6EACDA]" />
            <p className="text-lg font-semibold">Google Cloud</p>
            <p className="text-sm text-gray-300 break-words">cloudskillsboost.google/public_profiles</p>
          </motion.a>

          <motion.a
            href="https://www.credly.com/users/guilherme-camargo-silva"
            target="_blank"
            className="bg-[#092c4c] hover:bg-[#0f3e6b] p-6 rounded-lg shadow-md transition-all duration-300 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            >

            <SiCredly className="text-3xl mb-2 text-[#6EACDA]" />
            <p className="text-lg font-semibold">Credly</p>
            <p className="text-sm text-gray-300 break-words">credly.com/users/guilherme-camargo-silva</p>
          </motion.a>
        </div>
      </main>

      <Footer />
    </div>
  );
}