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
            title="Tutorial Expo"
            description={`🧩 Projeto: Sticker Smash – Editor de Imagens com Emojis

O Sticker Smash é um aplicativo interativo desenvolvido com React Native e Expo, que permite aos usuários escolher uma imagem da galeria, adicionar stickers (emojis personalizados) sobre ela, e salvar a imagem editada no dispositivo ou no navegador.

🚀 Funcionalidades principais:
📷 Seleção de imagem da galeria do dispositivo usando expo-image-picker.
🎨 Sobreposição de emojis com um catálogo customizado.
😊 Modal interativo com EmojiList.
♻️ Reset da imagem.
💾 Captura e salvamento da imagem editada com view-shot e dom-to-image.

📦 Tecnologias utilizadas:
- React Native / Expo
- expo-image-picker
- expo-media-library
- react-native-view-shot
- dom-to-image
- react-native-gesture-handler
- Componentes customizados (ImageViewer, EmojiSticker, etc.)

💡 Objetivo:
Aplicativo lúdico para editar imagens com adesivos, ideal para aprendizado prático de manipulação de mídia, permissões e hooks em React Native.`}
            imageSrc="/images/ExpoTutorial.png"
            repoLink="https://github.com/GuilhermeAmargo/Tutorial-Expo.git"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}