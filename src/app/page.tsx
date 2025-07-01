'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#021526] to-[#042f5a] overflow-x-hidden">
      <Header />

      <main className="flex-grow overflow-x-hidden">
        {/* Banner animado */}
        <motion.div
          className="flex justify-center pt-10 px-2 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://readme-typing-svg.demolab.com?font=Inconsolata&weight=500&size=50&duration=4000&pause=4000&color=6EACDA&center=true&vCenter=true&multiline=true&repeat=true&random=false&width=1300&height=140&lines=%F0%9F%91%8B+Ol%C3%A1!+Seja+bem-vindo(a)!"
            alt="Typing Banner"
            className="w-full max-w-screen-xl h-auto"
          />
        </motion.div>

        {/* Imagem principal */}
        <motion.div
          className="flex flex-col items-center justify-start px-4 pt-4 pb-10 sm:px-6"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/test.jpg"
            alt="Banner"
            width={800}
            height={300}
            className="rounded-lg shadow-2xl w-full max-w-4xl h-auto"
          />
        </motion.div>

        {/* Introdução */}
        <div className="flex flex-col sm:flex-row items-center justify-center px-4 sm:px-6 py-14 gap-10 bg-[#03346E] shadow-inner text-center sm:text-left">
          <Image
            src="/images/profile.jpg"
            alt="Imagem de introdução"
            width={280}
            height={280}
            className="rounded-full shadow-xl border-4 border-[#6EACDA]"
          />
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#6EACDA]">Introdução</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Este é um portfólio onde você encontrará informações sobre meus projetos,
              experiências e habilidades. Sinta-se à vontade para explorar.
            </p>
            <a
              href="/Currículo.pdf"
              download
              className="mt-6 inline-block px-6 py-3 bg-[#6EACDA] hover:bg-[#4f8a9f] text-white font-bold rounded-lg shadow-md transition-all duration-300"
            >
              <Download className="inline mr-2" />
              Baixar CV
            </a>
          </div>
        </div>

        {/* Formação e Experiência */}
        <section className="text-center px-4 sm:px-6 py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#6EACDA]">🎓 Formação e 💼 Experiência</h2>
          <p className="text-base sm:text-lg mb-2">
            Atualmente cursando <strong>Análise e Desenvolvimento de Sistemas</strong> na Faculdade SENAI Gaspar Ricardo Júnior.
          </p>
          <p className="text-base sm:text-lg">
            Estagiário na <strong>2RP NET</strong>.
          </p>
        </section>

        {/* Habilidades */}
        <section className="text-center px-4 sm:px-6 py-14 bg-[#042a53]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#6EACDA]">🌟 Habilidades em Desenvolvimento</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6 sm:gap-8 justify-center items-center">
            {[
              'java', 'python', 'arduino', 'postgresql', 'html5', 'css3',
              'javascript', 'googlecloud', 'csharp', 'react', 'typescript',
              'tailwindcss', 'amazonwebservices', 'jupyter'
            ].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="transition-all"
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}/${tech}-original${tech === 'amazonwebservices' || tech === 'jupyter' ? '-wordmark' : ''}.svg`}
                  alt={tech}
                  width={70}
                  height={70}
                  className="mx-auto"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Estatísticas GitHub */}
        <section className="text-center py-14 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#6EACDA]">📊 Estatísticas do GitHub</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <img
              loading="lazy"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=GuilhermeAmargo&layout=compact&langs_count=7&theme=dracula&v=1"
              alt="Top Languages"
              className="rounded-md shadow-lg max-w-full"
            />
            <img
              loading="lazy"
              src="https://github-readme-stats.vercel.app/api?username=GuilhermeAmargo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true&v=1"
              alt="GitHub Stats"
              className="rounded-md shadow-lg max-w-full"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
