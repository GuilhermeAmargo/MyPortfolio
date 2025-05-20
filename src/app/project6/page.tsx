import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#021526] to-[#042f5a]">
      <Header />

    <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
        <ProjectCard
          title="Draw Screen"
          description={`Este projeto consiste em um protetor de tela animado desenvolvido em Java, que exibe formas geométricas em movimento contínuo pela tela. O conceito se baseia na orientação a objetos, utilizando classes abstratas, herança e polimorfismo para representar as formas e suas interações. A animação é gerenciada por uma thread dedicada e utiliza a técnica de BufferStrategy para otimizar o desempenho gráfico.`}
          imageSrc="/images/Draw Screen.png"
          repoLink="https://github.com/GuilhermeAmargo/DrawScreen.git"
        />
    </main>

      <Footer />
    </div>
  );
}