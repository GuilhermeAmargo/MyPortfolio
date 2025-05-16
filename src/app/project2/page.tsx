import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#021526] to-[#042f5a]">
      <Header />

    <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
        <ProjectCard
          title="Calculadora de INSS e IR"
          description="Projeto desenvolvido durante a disciplina de Desenvolvimento Web no primeiro semestre da faculdade. Consiste em uma calculadora de INSS e Imposto de Renda (IR), criada com HTML, CSS e JavaScript. O objetivo foi aplicar os conceitos fundamentais de estruturação, estilização e interatividade para calcular automaticamente os descontos previdenciários e tributários com base no salário informado pelo usuário."          projectLink="https://guilhermeamargo.github.io/INSS/"
          repoLink="https://github.com/GuilhermeAmargo/INSS.git"
        />
    </main>

      <Footer />
    </div>
  );
}