import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#021526] to-[#042f5a]">
      <Header />

    <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
        <ProjectCard
          title="MVC Cafeteria"
          description={` Este projeto é um sistema de gerenciamento de uma cafeteria, desenvolvido utilizando o padrão de arquitetura MVC (Model-View-Controller). O objetivo principal é fornecer uma interface amigável para gerenciar produtos e pedidos de forma eficiente e organizada

            `}
          imageSrc="/images/MVC.png"
          repoLink="https://github.com/GuilhermeAmargo/Cafeteria-MVC.git"
        />
    </main>

      <Footer />
    </div>
  );
}