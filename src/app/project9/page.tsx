import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#021526] to-[#042f5a]">
      <Header />

      <main className="flex-grow w-full max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
        <ProjectCard
          title="Tutorial Expo"
          description={`🧩 Projeto: Sticker Smash – Editor de Imagens com Emojis

O Sticker Smash é um aplicativo interativo desenvolvido com React Native e Expo, que permite aos usuários escolher uma imagem da galeria, adicionar stickers (emojis personalizados) sobre ela, e salvar a imagem editada no dispositivo ou no navegador. É um projeto divertido e didático, ideal para aprender manipulação de imagens, uso de modais e gerenciamento de permissões no ambiente mobile e web.

🚀 Funcionalidades principais:
📷 Seleção de imagem da galeria do dispositivo usando expo-image-picker.
🎨 Visualização e sobreposição de stickers (emojis) sobre a imagem escolhida.
😊 Catálogo de emojis com seleção em modal customizado (EmojiPicker + EmojiList).
♻️ Reset das edições a qualquer momento.
💾 Captura da imagem editada usando react-native-view-shot (mobile) ou dom-to-image (web).
📥 Salvamento local da imagem final com expo-media-library (mobile) ou download automático (web).

📦 Tecnologias e bibliotecas utilizadas:
- React Native / Expo: base do app multiplataforma
- expo-image-picker: para acessar imagens da galeria
- expo-media-library: para salvar imagens localmente
- react-native-view-shot: captura de tela (mobile)
- dom-to-image: captura da imagem como JPEG no navegador
- react-native-gesture-handler: suporte a gestos
- Componentes customizados (ImageViewer, EmojiSticker, CircleButton, etc.)

💡 Objetivo do projeto:
Este projeto foi idealizado como uma ferramenta lúdica de edição leve de imagens, permitindo ao usuário brincar com suas fotos adicionando adesivos. Também serve como um ótimo exercício prático para aprendizado de manipulação de mídia em apps móveis, uso de hooks (useState, useRef), permissões e renderização condicional com React Native.
`}
          imageSrc="/images/ExpoTutorial.png"
          repoLink="https://github.com/GuilhermeAmargo/Tutorial-Expo.git"
        />
      </main>

      <Footer />
    </div>
  );
}