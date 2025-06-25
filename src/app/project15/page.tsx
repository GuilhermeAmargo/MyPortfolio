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
          Aplicativo Expo Comentários
        </h2>

        {/* Cards dos projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[#578FCA] p-6 rounded-xl shadow-lg">
          <ProjectCard
            title="Home"
            description={`Esta é a tela inicial do projeto desenvolvido com React Native e Expo. Ela apresenta um título centralizado e uma imagem aleatória da internet, servindo como uma introdução visual simples e moderna ao aplicativo.`}
            imageSrc="/images/Home.png"
          />
          <ProjectCard
            title="Main"
            description={`Esta tela exibe uma lista de comentários obtidos da API jsonplaceholder.typicode.com. Cada comentário é mostrado dentro de um card e pode ser salvo localmente com um toque, utilizando o AsyncStorage. A quantidade de comentários salvos é exibida dinamicamente no topo da tela. Com um layout escuro, rolagem vertical e interação por toque, a interface é funcional, organizada e pronta para testes com dados mockados.`}
            imageSrc="/images/Main.png"
          />
          <ProjectCard
            title="About"
            description={`Esta tela exibe informações básicas sobre o autor e o contexto do projeto. Contém o nome do aluno, curso, disciplina e a data de entrega, organizada em um cartão com estilo limpo e fundo escuro. Ideal para fins de apresentação acadêmica em projetos de desenvolvimento mobile.`}
            imageSrc="/images/About.png"
          />
        </div>

        {/* Link do repositório */}
        <div className="mt-8 text-center">
          <p className="text-[#E2E2B6] text-lg">
            Repositório no GitHub:{" "}
            <a
              href="https://github.com/GuilhermeAmargo/Prova-Mobile.git"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300 transition"
            >
              Prova-Mobile
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}