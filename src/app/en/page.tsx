import clsx from "clsx";

export default function Pt() {
  return (
    <main className="bg-[#0b0f1a] text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Glow Effect */}
        <div
          className={clsx(
            "absolute",
            "w-150",
            "h-150",
            "bg-gradient-radial",
            "from-blue-500/50",
            "via-purple-500/40",
            "to-transparent",
            "blur-[120px]",
            "top-1/2",
            "left-1/2",
            "-translate-x-1/2",
            "-translate-y-1/2",
            "animate-pulse",
          )}
        ></div>

        <h1 className="relative z-10 font-bold text-[clamp(2.5rem,6vw,4rem)]">
          I&apos;m a Full-Stack Developer
        </h1>

        <p className="relative z-10 mt-4 font-light opacity-80">
          I build modern applications with a focus on performance and
          experience.
        </p>

        <div className="relative z-10 mt-8 flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 rounded-full font-medium transition hover:-translate-y-1 bg-linear-to-r from-blue-500 to-purple-600">
            About Me
          </button>

          <button className="px-6 py-3 rounded-full font-medium border border-white/20 transition hover:-translate-y-1">
            Contact
          </button>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl mb-12 text-center">My Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card */}
          <div
            className={clsx(
              "bg-white/5",
              "backdrop-blur-xl",
              "border",
              "border-white/10",
              "rounded-2xl",
              "p-6",
              "flex",
              "flex-col",
              "justify-between",
              "transition",
              "hover:-translate-y-2",
              "hover:border-white/20",
            )}
          >
            <div>
              <h3 className="mb-4 text-lg font-semibold">E-Commerce Store</h3>
              <p className="text-sm opacity-70 mb-6">
                Virtual Store complete with carrinho, payment and administrator
                panel.
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <a
                href="#"
                className="flex-1 text-center py-2 rounded-full border border-white/20 text-sm transition hover:-translate-y-1"
              >
                GitHub
              </a>

              <a
                href="#"
                className="flex-1 text-center py-2 rounded-full text-sm bg-linear-to-r from-blue-500 to-purple-600 transition hover:-translate-y-1"
              >
                Site
              </a>
            </div>
          </div>

          {/* Card */}
          <div
            className={clsx(
              "bg-white/5",
              "backdrop-blur-xl",
              "border",
              "border-white/10",
              "rounded-2xl",
              "p-6",
              "flex",
              "flex-col",
              "justify-between",
              "transition",
              "hover:-translate-y-2",
              "hover:border-white/20",
            )}
          >
            <div>
              <h3 className="mb-4 text-lg font-semibold">Task Manager</h3>
              <p className="text-sm opacity-70 mb-6">
                Aplicação de gerenciamento de tarefas com autenticação JWT.
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <a
                href="#"
                className="flex-1 text-center py-2 rounded-full border border-white/20 text-sm transition hover:-translate-y-1"
              >
                GitHub
              </a>

              <a
                href="#"
                className="flex-1 text-center py-2 rounded-full text-sm bg-linear-to-r from-blue-500 to-purple-600 transition hover:-translate-y-1"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Card */}
          <div
            className={clsx(
              "bg-white/5",
              "backdrop-blur-xl",
              "border",
              "border-white/10",
              "rounded-2xl",
              "p-6",
              "flex",
              "flex-col",
              "justify-between",
              "transition",
              "hover:-translate-y-2",
              "hover:border-white/20",
            )}
          >
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Analytics Dashboard
              </h3>
              <p className="text-sm opacity-70 mb-6">
                Painel com gráficos dinâmicos e consumo de API REST.
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <a
                href="#"
                className="flex-1 text-center py-2 rounded-full border border-white/20 text-sm transition hover:-translate-y-1"
              >
                GitHub
              </a>

              <a
                href="#"
                className="flex-1 text-center py-2 rounded-full text-sm bg-linear-to-r from-blue-500 to-purple-600 transition hover:-translate-y-1"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
