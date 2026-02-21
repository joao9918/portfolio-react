import AboutMe from "@/components/AboutMe";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Page() {
  return (
    <main className="bg-[#0b0f1a] text-white overflow-x-hidden">
      {/* HERO */}
      <Section />

      {/* PROJECTS */}
      <Container title="My Projects">
        <Card
          title="Chronos Pomodoro"
          description="Virtual Store complete with carrinho, payment and administrator panel."
          image="chronos-pomodoro.png"
          githubUrl="https://github.com/joao9918/chronos-pomodoro"
          liveUrl="https://chronos-pomodoro-project.vercel.app/"
        />
        <Card
          title="Notes Tracker"
          description="Aplicação de gerenciamento de tarefas com autenticação JWT."
          image="notes-tracker.png"
          githubUrl="https://github.com/joao9918/notes-tracker"
          liveUrl="https://notes-tracker-phi.vercel.app/"
        />
        <Card
          title="Stranger Things"
          description="Painel com gráficos dinâmicos e consumo de API REST."
          image="stranger-things.png"
          githubUrl="#"
          liveUrl="#"
        />
        <Card
          title="BMW"
          description="Painel com gráficos dinâmicos e consumo de API REST."
          image="project-bmw.png"
          githubUrl="#"
          liveUrl="#"
        />
      </Container>

      <Container title="About Me" id="about-me" gridCols={"md:grid-cols-1"}>
        <AboutMe />
      </Container>
      <svg
        viewBox="0 0 1441 293"
        className="w-full h-auto hidden lg:block relative top-1"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shape principal */}
        <path
          fill="url(#a)"
          d="M285 84C216 2 157-18 0 15l1 277h1440v-48c-108-87-182-93-330-51-112 21-190 12-363-52-94-39-149-21-248 38-76 28-121 20-215-95"
        />

        {/* Linha esquerda */}
        <path d="M1 20 L1 292" stroke="#8b2ef5" strokeWidth="2" />

        <defs>
          <linearGradient
            id="a"
            x1="0"
            x2="1441"
            y1="146"
            y2="140"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8b2ef5" />
            <stop offset="1" stopColor="#0b0f1a" />
          </linearGradient>
        </defs>
      </svg>

      <Footer />
    </main>
  );
}
