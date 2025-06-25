import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#021526] to-[#042f5a]">
      <Header />

      <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-10">
        {/* Título principal */}
        <h2 className="text-3xl font-bold text-center text-[#6EACDA] mb-10">
          Expo App Fatos        
        </h2>

        {/* Cards dos projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[#578FCA] p-6 rounded-xl shadow-lg">
          <ProjectCard
            title="Tela A"
            description={`Esta página exibe uma imagem aleatória da internet com um título centralizado. O layout é simples e elegante, com fundo escuro, imagem em destaque e um estilo moderno e limpo. Ideal para demonstrações visuais ou componentes de galeria.`}
            imageSrc="/images/TelaA.png"
          />
          <ProjectCard
            title="Tela B"
            description={`Esta página exibe o nome completo e o e-mail do desenvolvedor de forma centralizada em um layout simples e elegante. Com fundo escuro e destaque para o título em verde, ela serve como uma seção de identificação ou contato dentro do aplicativo.`}
            imageSrc="/images/TelaB.png"
          />
          <ProjectCard
            title="Tela C"
            description={`Esta página apresenta fatos curiosos aleatórios em inglês, obtidos dinamicamente por meio de uma API. Ao acessar a tela ou tocar no botão "Novo fato", um novo fato é carregado e exibido. Com layout simples, fundo escuro e destaque no conteúdo, a experiência é leve, divertida e educativa.`}
            imageSrc="/images/TelaC.png"
          />
        </div>

        {/* Link do repositório */}
        <div className="mt-8 text-center">
          <p className="text-[#E2E2B6] text-lg">
            Repositório no GitHub:{" "}
            <a
              href="https://github.com/GuilhermeAmargo/Expo-Facts-App.git"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300 transition"
            >
              Expo-Facts-App
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}