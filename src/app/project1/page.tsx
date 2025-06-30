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
            title="Calculadora HTML/CSS/JS"
            description="Projeto desenvolvido durante a disciplina de Desenvolvimento Web no primeiro semestre da faculdade. O objetivo foi criar uma calculadora funcional utilizando HTML, CSS e JavaScript, aplicando os conceitos básicos de estruturação, estilização e interatividade em páginas web."
            projectLink="https://guilhermeamargo.github.io/Calculadora"
            repoLink="https://github.com/GuilhermeAmargo/Calculadora.git"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}