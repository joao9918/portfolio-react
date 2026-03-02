import clsx from "clsx";

type CardProps = {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
};

export default function Card({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
}: CardProps) {
  return (
    <div
      className={clsx(
        "group",
        "relative",
        "rounded-3xl",
        "overflow-hidden",
        "border",
        "border-white/10",
        "bg-[#161b22]",
        "transition-all",
        "duration-500",
        "md:hover:-translate-y-2", // Hover apenas no desktop
        "md:hover:border-blue-500/50",
        "aspect-16/10", // Mantém a proporção fixa
      )}
    >
      {/* Imagem de Fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 md:group-hover:scale-105"
        style={{ backgroundImage: `url(/${image})` }}
      />

      {/* Overlay: No mobile é mais escuro para garantir leitura; no desktop clareia */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0b0f1a] via-[#0b0f1a]/60 to-transparent md:opacity-80 md:group-hover:opacity-90" />

      {/* Conteúdo */}
      <div className="relative p-6 md:p-8 flex flex-col justify-end h-full z-10">
        {/* Título e Descrição */}
        <div className="md:translate-y-4 md:transition-transform md:duration-500 md:group-hover:translate-y-0">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
            {title}
          </h3>

          <p
            className={clsx(
              "max-md:hidden text-sm text-gray-300 mb-6 md:mb-8 line-clamp-2 transition-opacity duration-500",
              "opacity-100 md:opacity-0 md:group-hover:opacity-100", // Sempre visível no mobile
            )}
          >
            {description}
          </p>
        </div>

        {/* Botões */}
        <div
          className={clsx(
            "flex gap-3 md:gap-4 transition-all duration-500 delay-100",
            "opacity-100 translate-y-0", // Sempre visível no mobile
            "md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0", // Efeito apenas no desktop
          )}
        >
          <a
            href={githubUrl}
            target="_blank"
            className="flex-1 text-center py-2 md:py-2.5 rounded-xl border border-white/20 text-xs md:text-sm font-medium text-white backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all"
          >
            GitHub
          </a>
          <a
            href={liveUrl}
            target="_blank"
            className="flex-1 text-center py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-bold text-white bg-linear-to-r from-blue-600 to-purple-600 hover:brightness-110 transition-all"
          >
            Site
          </a>
        </div>
      </div>
    </div>
  );
}
