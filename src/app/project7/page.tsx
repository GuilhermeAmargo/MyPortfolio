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
            title="Sistema de Gestão de Cafeteria"
            description={`O sistema gerencia pedidos feitos por clientes, permitindo adicionar diferentes tipos de itens, como bebidas, cafés e sobremesas. Ele calcula o total do pedido com base nos preços individuais de cada item.

Principais Classes e Relações:

• Pedido:
- Representa um pedido feito por um cliente.
- Contém um número identificador, nome do cliente, lista de itens e o total do pedido.
- Possui métodos para adicionar/remover itens e calcular o valor total do pedido.

• Item:
- Classe base abstrata para os produtos que podem compor um pedido.
- Contém nome e preço.
- Possui um método para calcular o preço.

• Bebida:
- Classe abstrata que herda de Item.
- Adiciona a propriedade Tamanho.
- Serve como base para diferentes tipos de bebidas, como Café.

• Café:
- Especialização da classe Bebida.
- Adiciona o atributo TipoGrao para representar o tipo de grão de café.

• Sobremesa:
- Herda diretamente de Item.
- Representa sobremesas, com o atributo Sabor.
`}
            imageSrc="/images/CafeManager.png"
            repoLink="https://github.com/GuilhermeAmargo/Projeto_Cafeteria.git"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}