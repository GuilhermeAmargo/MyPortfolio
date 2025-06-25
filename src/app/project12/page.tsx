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
          Quiz Pokémon        
        </h2>

        {/* Cards dos projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[#578FCA] p-6 rounded-xl shadow-lg">
          <ProjectCard
            title="Quiz Pokémon"
            description={`Este aplicativo apresenta um jogo divertido onde o usuário deve adivinhar qual é o Pokémon exibido na imagem. Utilizando a PokéAPI, o app busca um Pokémon aleatório e exibe sua imagem junto de quatro opções de nome (uma correta e três erradas). Com um design nostálgico e fontes personalizadas inspiradas nos jogos clássicos, o app oferece uma experiência envolvente para fãs da franquia.`}
            imageSrc="/images/Quiz.png"
          />
          <ProjectCard
            title="Tela Sobre"
            description={`Esta é a tela Sobre do aplicativo Pokémon Quiz, onde o usuário encontra informações sobre o app, como seu nome, uma breve descrição da proposta ("Explorando o universo dos jogos"), a versão atual e o nome do desenvolvedor. Com visual personalizado, ícones ilustrativos e fontes temáticas, essa tela reforça a identidade do projeto e oferece uma apresentação elegante e nostálgica.`}
            imageSrc="/images/Sobre.png"
          />
        </div>

        {/* Link do repositório */}
        <div className="mt-8 text-center">
          <p className="text-[#E2E2B6] text-lg">
            Repositório no GitHub:{" "}
            <a
              href="https://github.com/GuilhermeAmargo/Quiz-Pokemon.git"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300 transition"
            >
              Quiz-Pokemon
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}