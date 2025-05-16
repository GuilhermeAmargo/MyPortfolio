// src/components/Card.tsx
import React from 'react';
import Link from 'next/link'; // Importar Link do Next.js para navegação entre páginas

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string; // Nova propriedade para o link
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <Link href={link}> {/* Tornar o Card clicável e redirecionar para o link */}
        <div className="relative">
          {/* Imagem de fundo */}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Camada de cor preta semitransparente */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-white mt-2">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;