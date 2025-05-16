interface ProjectCardProps {
  title: string;
  description: string;
  projectLink?: string;
  repoLink: string;
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
      {/* Projeto funcional via iframe ou imagem */}
      <div className="flex justify-center items-center rounded-lg shadow-lg bg-gray-800">
        {projectLink ? (
          <iframe
            src={projectLink}
            title={`Projeto funcional - ${title}`}
            className="w-full h-[790px] rounded-md"
            allowFullScreen
            loading="lazy"
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={`Imagem do projeto ${title}`}
            className="w-full h-[790px] object-cover rounded-md"
          />
        ) : (
          <p className="text-white p-10">Projeto funcional não disponível.</p>
        )}
      </div>

      {/* Texto explicativo */}
      <div className="flex flex-col text-gray-200 bg-[#03346E] p-4 rounded-lg shadow-lg h-auto">
        <h2 className="text-2xl font-bold text-[#6EACDA] mb-4">{title}</h2>
        <p className="whitespace-pre-line text-white">{description}</p>

        {projectLink && (
          <p className="text-[#E2E2B6] mt-2">
            Link do projeto:{" "}
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </p>
        )}

        <p className="text-[#E2E2B6]">
          Link do repositório:{" "}
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            Github {title}
          </a>
        </p>
      </div>
    </div>
  );
}
