interface ProjectCardProps {
  title: string;
  description: string;
  projectLink?: string;
  repoLink?: string; // Agora é opcional
  imageSrc?: string;
}

export default function ProjectCard({
  title,
  description,
  projectLink,
  repoLink,
  imageSrc,
}: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Área da imagem ou iframe */}
      <div className="flex justify-center items-center rounded-lg shadow-lg bg-gray-800">
        {projectLink ? (
          <iframe
            src={projectLink}
            title={`Projeto funcional - ${title}`}
            className="w-full h-198 rounded-md"
            allowFullScreen
            loading="lazy"
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={`Imagem do projeto ${title}`}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <p className="text-white p-10">Projeto funcional não disponível.</p>
        )}
      </div>

      {/* Área do conteúdo textual */}
      <div className="flex flex-col justify-between text-gray-200 bg-[#03346E] p-6 rounded-lg shadow-lg h-auto">
        <div>
          <h2 className="text-2xl font-bold text-[#6EACDA] mb-4">{title}</h2>
          <p className="whitespace-pre-line text-white">{description}</p>
        </div>

        <div className="mt-6">
          {projectLink && (
            <p className="text-[#E2E2B6] mb-2">
              Link do projeto:{" "}
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300 transition"
              >
                {title}
              </a>
            </p>
          )}
          {repoLink && (
            <p className="text-[#E2E2B6]">
              Link do repositório:{" "}
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300 transition"
              >
                Github {title}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}