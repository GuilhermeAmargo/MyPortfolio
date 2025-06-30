import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#021526] to-[#042f5a]">
      <Header />

      <main className="flex-grow w-full max-w-6xl mx-auto px-6 py-12">
        {/* Título principal */}
        <h2 className="text-4xl font-extrabold text-center text-[#A8C0FF] mb-12 drop-shadow-md">
          Expo AsyncStorage, Câmera, Timer e Map
        </h2>

        {/* Cards dos projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-gradient-to-tr from-[#3b5998] via-[#6d82b4] to-[#8aa0d6] p-8 rounded-2xl shadow-lg">
          <ProjectCard
            title="Todo"
            description={`Essa página é uma aplicação de lista de tarefas (To-Do List) desenvolvida em React Native. Ela permite ao usuário adicionar, visualizar, marcar como concluídas e remover tarefas. As tarefas são armazenadas localmente usando o AsyncStorage, garantindo que as informações sejam preservadas mesmo após fechar o app. A interface é simples e funcional, com um campo de entrada, botão de adicionar, e uma lista interativa onde o usuário pode gerenciar suas atividades diárias.`}
            imageSrc="/images/ToDo.jpg"
          />
          <ProjectCard
            title="Câmera"
            description={`Esta é uma página criada com Expo que permite ao usuário tirar fotos com a câmera do dispositivo ou selecionar imagens da galeria. As imagens escolhidas são exibidas em uma grade na tela. O aplicativo solicita as permissões necessárias (câmera e galeria) ao iniciar e armazena as imagens localmente na sessão atual, exibindo-as dinamicamente com uma interface simples e funcional.`}
            imageSrc="/images/camera.jpg"
          />
          <ProjectCard
            title="Timer"
            description={`Esta página é um aplicativo de timer feito com Expo, que oferece dois modos de funcionamento: cronômetro (contagem progressiva) e contagem regressiva. O usuário pode alternar entre os modos, iniciar, pausar e resetar o tempo, além de definir horas, minutos e segundos no modo regressivo. O tempo é exibido com uma animação pulsante enquanto o cronômetro está ativo. A interface é intuitiva e responsiva, com uso de Animated, TextInput, e alertas para feedback ao usuário.`}
            imageSrc="/images/timer.jpg"
          />
          <ProjectCard
            title="Mapa"
            description={`Esta página é um aplicativo de localização em tempo real desenvolvido com Expo, que utiliza o GPS do dispositivo para exibir a posição atual do usuário em um mapa interativo. O app solicita permissão de acesso à localização e, uma vez concedida, atualiza a posição continuamente, exibindo um marcador com as coordenadas. O usuário também pode centralizar o mapa na sua localização atual com um botão flutuante. As coordenadas de latitude e longitude são exibidas na parte superior da tela. A interface é limpa, funcional e responsiva.`}
            imageSrc="/images/map.jpg"
          />
        </div>

        {/* Link do repositório */}
        <div className="mt-10 text-center">
          <p className="text-[#E2E2B6] text-lg">
            Repositório no GitHub:{" "}
            <a
              href="https://github.com/GuilhermeAmargo/Expo-App.git"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-300 hover:text-blue-400 transition-colors duration-300"
            >
              Expo-App
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}