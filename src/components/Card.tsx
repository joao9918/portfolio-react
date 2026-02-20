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
        "hover:-translate-y-2",
        "hover:border-blue-500/50",
        "hover:shadow-[0_20px_40px_rgba(0000.4)0_0_20px_rgba(591302460.2)]",
      )}
    >
      {/* Imagem com Zoom Suave */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: `url(/${image})` }}
      />

      {/* Overlay de Gradiente Dinâmico */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0b0f1a] via-[#0b0f1a]/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

      {/* Conteúdo com Glassmorphism */}
      <div className="relative p-8 flex flex-col justify-end h-full aspect-16/10 z-10">
        <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-sm text-gray-300 mb-8 line-clamp-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {description}
          </p>
        </div>

        {/* Botões Estilizados */}
        <div className="flex gap-4 opacity-0 translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
          <a
            href={githubUrl}
            target="_blank"
            className={clsx(
              "flex-1",
              "text-center",
              "py-2.5",
              "rounded-xl",
              "border",
              "border-white/20",
              "text-sm",
              "font-medium",
              "text-white",
              "backdrop-blur-md",
              "bg-white/5",
              "transition-all",
              "hover:bg-white/10",
              "hover:border-white/40",
            )}
          >
            GitHub
          </a>
          <a
            href={liveUrl}
            target="_blank"
            className={clsx(
              "flex-1",
              "text-center",
              "py-2.5",
              "rounded-xl",
              "text-sm",
              "font-bold",
              "text-white",
              "bg-linear-to-r",
              "from-blue-600",
              "to-purple-600",
              "transition-all",
              "hover:brightness-110",
              "hover:shadow-[0_0_15px_rgba(591302460.5)]",
            )}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
