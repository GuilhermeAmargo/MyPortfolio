import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#021526] to-[#042f5a]">
      <Header />

    <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
        <ProjectCard
          title="Pilha/Fila Java"
          description={`Este projeto apresenta a implementação das estruturas de dados Fila (FIFO) e Pilha (LIFO) em Java, com o objetivo de demonstrar seus funcionamentos básicos por meio de uma interface simples.

            ✅ Funcionalidades:
            Fila (Queue): Permite inserir elementos no final e remover do início, seguindo a lógica 'primeiro a entrar, primeiro a sair'.
            Pilha (Stack): Permite inserir e remover elementos do topo, seguindo a lógica 'último a entrar, primeiro a sair'.

            🧱 Componentes:
            Classe Fila: Possui métodos como adicionar, remove, first, isEmpty e size.
            Classe Pilha: Possui métodos como empilhar, desempilhar, top, isEmpty e size.
            Classe Main: Demonstra exemplos práticos de uso das estruturas, com inserção, remoção e visualização de elementos.

            🎯 Objetivo:
            Oferecer uma base didática para o entendimento e manipulação de estruturas fundamentais de dados, com código organizado e fácil de compreender.`}

          imageSrc="/images/PilhaFila.png"
          repoLink="https://github.com/GuilhermeAmargo/pilha_fila_java.git"
        />
    </main>

      <Footer />
    </div>
  );
}