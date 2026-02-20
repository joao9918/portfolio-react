import clsx from "clsx";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
  id?: string;
  gridCols?: string;
};

export default function Container({
  title,
  children,
  id,
  gridCols,
}: ContainerProps) {
  return (
    <section id={id} className="relative py-24 px-6 md:px-12 lg:px-24 w-full">
      {/* Cabeçalho */}
      <div className="relative mb-16 w-full">
        <div className="flex items-center gap-4 mb-4">
          <span className="h-px w-12 bg-blue-500" />
          <span className="text-xs font-mono tracking-[0.4em] text-blue-500/80 uppercase">
            Portfolio
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white italic uppercase border-b border-white/5 pb-10">
          {title}
        </h2>
      </div>

      {/* Grid Ajustado: 1 col no mobile, 2 col no desktop */}
      <div
        className={clsx(
          "grid",
          "grid-cols-1",
          "gap-10",
          "lg:gap-20",
          "lg:px-24",
          gridCols ? gridCols : "md:grid-cols-2",
        )}
      >
        {children}
      </div>
    </section>
  );
}
