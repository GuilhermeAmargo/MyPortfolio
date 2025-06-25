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
          Expo UI        
        </h2>

        {/* Cards dos projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[#578FCA] p-6 rounded-xl shadow-lg">
          <ProjectCard
            title="Layout básico"
            description={`Essa página é uma tela inicial feita com React Native e Expo. Ela mostra um fundo verde com dois textos centralizados: um título escrito "Meu primeiro app Expo" e um subtítulo "Construindo interfaces no React Native". É uma interface simples, usada para treinar a criação de telas no app.`}
            imageSrc="/images/Tela1.png"
          />
          <ProjectCard
            title="Cartão de perfil"
            description={`Essa página é uma tela simples feita com React Native e Expo que mostra um cartão de perfil centralizado. O cartão tem um fundo branco com sombra, uma imagem redonda (gerada aleatoriamente de um site), um nome fictício e uma descrição de um desenvolvedor front-end com suas principais tecnologias. O fundo da tela é verde, igual ao exemplo anterior.`}
            imageSrc="/images/Tela2.png"
          />
          <ProjectCard
            title="Botão estilizado"
            description={`Essa página é uma tela simples em React Native que exibe um botão clicável centralizado. O fundo é verde, e o botão azul muda sua opacidade enquanto é pressionado, dando um efeito visual de clique. O texto do botão é "Clique aqui" em branco e negrito.`}
            imageSrc="/images/Tela3.png"
          />
          <ProjectCard
            title="Lista de produtos"
            description={`Essa página em Expo mostra uma lista vertical de produtos tecnológicos usando o componente FlatList do React Native. Cada produto aparece em um cartão azul com bordas arredondadas, contendo o nome do produto, uma imagem local e o preço em destaque. A lista é rolável, com itens centralizados e espaçados, tudo isso sobre um fundo cinza claro.`}
            imageSrc="/images/Tela4.png"
          />
          <ProjectCard
            title="Tela de login"
            description={`Essa página em Expo é uma tela de login simples feita com React Native. Ela contém:

            - Um título "Login" centralizado.

            - Dois campos de texto para o usuário digitar e-mail e senha (com o campo de senha ocultando os caracteres).

            - Um botão clicável azul com o texto "Clique aqui", que muda de opacidade ao ser pressionado.

            - Um texto link "Esqueci minha senha" abaixo do botão.

            A tela tem fundo cinza claro, campos e botões estilizados com cantos arredondados, e todos os elementos estão centralizados vertical e horizontalmente.`}
            imageSrc="/images/Tela5.png"
          />
          <ProjectCard
            title="Layout Scrollable"
            description={`Essa página em Expo cria uma tela com um título "Explorando o universo" e uma lista rolável de fatos sobre o universo. Cada fato está dentro de um cartão branco com sombra, contendo um texto explicativo e uma imagem ilustrativa (usando URLs de placeholder). A lista usa ScrollView para permitir a rolagem vertical, e os cartões possuem bordas arredondadas e espaçamento para melhor visualização. O fundo da tela é cinza claro e todo o conteúdo é centralizado e bem espaçado.`}
            imageSrc="/images/Tela6.png"
          />
          <ProjectCard
            title="Menu de aplicativos"
            description={`Essa página em Expo exibe uma grade de ícones representando aplicativos usando React Native. Ela mostra um título "Meus aplicativos" e, abaixo, uma lista com 3 colunas de botões redondos azuis, cada um com um ícone e nome do app. Ao tocar em qualquer ícone, aparece um alerta informando qual app foi selecionado. A tela tem fundo cinza claro, e os itens estão centralizados e bem espaçados para fácil visualização.`}
            imageSrc="/images/Tela7.png"
          />
          <ProjectCard
            title="Tela de perfil"
            description={`Essa página em Expo exibe um perfil de usuário com layout moderno, utilizando React Native. Ela contém:

            - Imagem de capa no topo.

            - Foto de perfil circular sobreposta à capa.

            - Nome do usuário e uma breve bio (“Apaixonado por tecnologia e café ☕️”).

            - Três seções com estatísticas: Meus Posts, Seguidores e Seguindo.

            O conteúdo está dentro de um ScrollView, permitindo rolagem, com layout limpo, centralizado e visualmente agradável. Ideal como tela de perfil em redes sociais ou apps pessoais.`}
            imageSrc="/images/Tela8.png"
          />
          <ProjectCard
            title="Tela de Feed"
            description={`Essa página em Expo simula um feed de rede social feito com React Native. Ela exibe vários posts em um ScrollView vertical, cada um contendo:

            - A foto de perfil e o nome do usuário.

            - Uma imagem da publicação.

            - Um texto descritivo com o conteúdo do post.

            O layout é limpo e moderno, com cartões brancos arredondados, espaçamento entre os elementos e imagens responsivas. O fundo da tela é cinza claro e o título “Feed” aparece no topo centralizado. Ideal como base para construir interfaces de redes sociais, diários visuais ou apps de compartilhamento.`}
            imageSrc="/images/Tela9.png"
          />
          <ProjectCard
            title="Tela de configurações"
            description={`Essa página em Expo apresenta uma tela de Configurações estilizada com React Native. Ela usa ícones da biblioteca @expo/vector-icons/Ionicons para representar cada item do menu. Os itens são exibidos em uma lista rolável (ScrollView), dentro de cartões brancos com bordas arredondadas.

            Cada item contém:

            - Um ícone representando a função (como notificações, privacidade, segurança etc.);

            - Um texto descritivo com o nome da configuração.

            O fundo da tela é cinza claro e o título “Configurações” aparece centralizado no topo. A interface é limpa, intuitiva e ideal para menus de apps pessoais ou sociais.`}
            imageSrc="/images/Tela10.png"
          />
        </div>

        {/* Link do repositório */}
        <div className="mt-8 text-center">
          <p className="text-[#E2E2B6] text-lg">
            Repositório no GitHub:{" "}
            <a
              href="https://github.com/GuilhermeAmargo/UI-Exercises.git"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300 transition"
            >
              UI-Exercises
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}