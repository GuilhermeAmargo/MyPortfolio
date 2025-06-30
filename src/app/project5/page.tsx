import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#021526] to-[#042f5a]">
      <Header />

      <main className="flex-grow w-full max-w-6xl mx-auto px-6 py-12">

        <div className="bg-white/5 rounded-3xl shadow-xl p-6 sm:p-10 backdrop-blur-lg border border-white/10">
          <ProjectCard
            title="Screen Saver"
            description={`Esta aplicação JavaFX cria uma janela gráfica onde um retângulo azul se move continuamente na diagonal. Ao atingir qualquer borda da janela, ele quica (inverte a direção do movimento) e muda para uma cor aleatória. A movimentação é feita com a classe AnimationTimer, que atualiza a posição do retângulo em tempo real, simulando uma animação fluida. Essa aplicação demonstra conceitos de animação, colisão e manipulação de elementos gráficos em JavaFX.`}
            imageSrc="/images/ScreenSaver.png"
            repoLink="https://github.com/GuilhermeAmargo/Screen.git"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}