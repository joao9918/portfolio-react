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
        "transition-all",
        "duration-500",
        "hover:-translate-y-2",
        "hover:border-white/20",
      )}
    >
      {/* Imagem */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url(/${image})`,
        }}
      />

      {/* Overlay gradient mais elegante */}
      <div
        className={clsx(
          "absolute",
          "inset-0",
          "bg-linear-to-t",
          "from-black/80",
          "via-black/40",
          "to-transparent",
        )}
      />

      {/* Conteúdo */}
      <div className="backdrop-brightness-90 backdrop-opacity-100 group-hover:backdrop-brightness-100 transition relative p-6 flex flex-col justify-end h-full aspect-video">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

          <p className="text-sm none hidden sm:block text-white/70 mb-6">
            {description}
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href={githubUrl}
            target="_blank"
            className={clsx(
              "flex-1",
              "text-center",
              "py-2",
              "rounded-full",
              "border",
              "border-white/30",
              "text-sm",
              "text-white",
              "backdrop-blur-md",
              "bg-white/10",
              "transition-all",
              "duration-300",
              "hover:bg-white/20",
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
              "py-2",
              "rounded-full",
              "text-sm",
              "text-white",
              "bg-linear-to-r",
              "from-blue-500",
              "to-purple-600",
              "transition-all",
              "duration-300",
              "hover:brightness-90",
            )}
          >
            Site
          </a>
        </div>
      </div>
    </div>
  );
}
