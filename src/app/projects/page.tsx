// src/pages/index.tsx
'use client';

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Header from "@/components/Header";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  // Lista de projetos com conteúdo diferente
  const projects = [
    {
      id: 1,
      title: 'Calculadora',
      description: 'Projeto de calculadora HTML, CSS e JavaScript.',
      imageUrl: '/images/Calculadora.png',
      link: '/project1', // Link para a página do Projeto 1
    },
    {
      id: 2,
      title: 'Calculadora INSS/IR',
      description: 'Calculadora de INSS e IR (HTML, CSS e JavaScript).',
      imageUrl: '/images/CalculadoraINSS.png',
      link: '/project2', // Link para a página do Projeto 2
    },
    {
      id: 3,
      title: 'Pilha/Fila Java',
      description: 'Este projeto em Java implementa duas estruturas de dados fundamentais: Fila e Pilha.',
      imageUrl: '/images/PilhaFila.png',
      link: '/project3', // Link para a página do Projeto 3
    },
    {
      id: 4,
      title: 'JOptionPane',
      description: 'Programa Java com interface gráfica que permite ao usuário escolher uma opção em uma janela de diálogo.',
      imageUrl: '/images/JOptionPane.png',
      link: '/project4', // Link para a página do Projeto 4
    },
    {
      id: 5,
      title: 'Screen Saver',
      description: 'Aplicação JavaFX que anima um retângulo colorido quicando nas bordas da janela.',
      imageUrl: '/images/ScreenSaver.png',
      link: '/project5', // Link para a página do Projeto 5
    },
    {
      id: 6,
      title: 'Draw Screen',
      description: 'Este projeto em Java implementa um protetor de tela (screensaver) com formas geométricas animadas utilizando Swing e AWT.',
      imageUrl: '/images/Draw Screen.png',
      link: '/project6', // Link para a página do Projeto 6
    },
    {
      id: 7,
      title: 'Sistema de Gestão de Cafeteria',
      description: 'Sistema desenvolvido para gerenciar pedidos, estoque e vendas em cafeterias, otimizando operações e auxiliando no controle financeiro.',
      imageUrl: '/images/CafeManager.png',
      link: '/project7', // Link para a página do Projeto 7
    },
    {
      id: 8,
      title: 'MVC Cafeteria',
      description: '',
      imageUrl: '/images/test4.jpg',
      link: '/project4', // Link para a página do Projeto 8
    },
    {
      id: 9,
      title: 'Projeto 9',
      description: '',
      imageUrl: '/images/test4.jpg',
      link: '/project4', // Link para a página do Projeto 9
    },
    {
      id: 10,
      title: 'Projeto 10',
      description: '',
      imageUrl: '/images/test4.jpg',
      link: '/project4', // Link para a página do Projeto 10
    },
    {
      id: 11,
      title: 'Projeto 11',
      description: '',
      imageUrl: '/images/test4.jpg',
      link: '/project4', // Link para a página do Projeto 11
    },
    {
      id: 12,
      title: 'Projeto 12',
      description: '',
      imageUrl: '/images/test4.jpg',
      link: '/project4', // Link para a página do Projeto 12
    },
    {
      id: 13,
      title: 'Projeto 13',
      description: '',
      imageUrl: '/images/test4.jpg',
      link: '/project4', // Link para a página do Projeto 13
    },
    {
      id: 14,
      title: 'projeto 14',
      description: '',
      imageUrl: '/images/test4.jpg',
      link: '/project4', // Link para a página do Projeto 14
    },
    {
      id: 15,
      title: 'Projeto 15',
      description: '',
      imageUrl: '/images/test4.jpg',
      link: '/project4', // Link para a página do Projeto 15
    },
    {
      id: 16,
      title: 'Projeto 16',
      description: '',
      imageUrl: '/images/test4.jpg',
      link: '/project4', // Link para a página do Projeto 16
    },
    {
      id: 17,
      title: 'Projeto 17',
      description: '',
      imageUrl: '/images/test4.jpg',
      link: '/project4', // Link para a página do Projeto 17
    },
    {
      id: 18,
      title: 'Projeto 18',
      description: '',
      imageUrl: '/images/test4.jpg',
      link: '/project4', // Link para a página do Projeto 18
    },
  ];

  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#021526] to-[#042f5a]">
      <Header />

      <main className="flex-grow w-full max-w-7xl mx-auto px-6">
        {/* Título e introdução com animação */}
        <div className="py-16 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#6EACDA] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            💻 Projetos
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Aqui estão alguns dos meus projetos mais recentes com foco em desenvolvimento front-end, automação e dados.
          </motion.p>
        </div>

        {/* Carrossel de Cards estilizado */}
        <div className="pb-20">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500 }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  className="h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    title={project.title} 
                    description={project.description} 
                    imageUrl={project.imageUrl} 
                    link={project.link}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>

      <Footer />
    </div>
  );
}