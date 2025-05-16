import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#021526] to-[#042f5a]">
      <Header />

    <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
        <ProjectCard
          title="JOptionPane"
          description={`Este programa em Java utiliza a biblioteca Swing para exibir uma interface gráfica simples onde o usuário pode selecionar uma opção entre três disponíveis em uma caixa de diálogo. Após a seleção, a escolha é exibida em uma nova janela de mensagem.`}
          imageSrc="/images/JOptionPane.png"
          repoLink="https://github.com/GuilhermeAmargo/JOptionPane.git"
        />
    </main>

      <Footer />
    </div>
  );
}