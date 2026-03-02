import AboutMe from "@/components/AboutMe";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { getDictionary } from "@/dictionaries/get-dictionaries";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // Verifica se é pt ou en
  const resolvedParams = await params;
  const lang = resolvedParams.lang === "en" ? "en" : "pt";

  //Carrega o dicionário
  const dict = await getDictionary(lang);

  return (
    <main className="bg-[#0b0f1a] text-white overflow-x-hidden">
      {/* HERO SECTION*/}
      <Section dict={dict.section} />

      {/* PROJECTS SECTION */}
      <Container title={dict.projects.title} id="projects">
        <Card
          title="Chronos Pomodoro"
          description={dict.projects.pomodoro}
          image="chronos-pomodoro.png"
          githubUrl="https://github.com/joao9918/chronos-pomodoro"
          liveUrl="https://chronos-pomodoro-project.vercel.app/"
        />
        <Card
          title="Stranger Things"
          description={dict.projects.stranger}
          image="stranger-things.png"
          githubUrl="https://github.com/joao9918/project-stranger-things"
          liveUrl="https://stranger-things-beige.vercel.app/"
        />
        <Card
          title="Notes Tracker"
          description={dict.projects.notes}
          image="notes-tracker.png"
          githubUrl="https://github.com/joao9918/notes-tracker"
          liveUrl="https://notes-tracker-phi.vercel.app/"
        />
        <Card
          title="BMW"
          description={dict.projects.bmw}
          image="project-bmw.png"
          githubUrl="#"
          liveUrl="#"
        />
      </Container>

      {/* ABOUT ME */}
      <Container
        title={dict.about.title}
        id="about-me"
        gridCols={"md:grid-cols-1"}
      >
        <AboutMe dict={dict.about} />
      </Container>

      {/* SVG DECORATIVO */}
      <svg
        viewBox="0 0 1441 293"
        className="w-full h-auto hidden lg:block relative top-1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#a)"
          d="M285 84C216 2 157-18 0 15l1 277h1440v-48c-108-87-182-93-330-51-112 21-190 12-363-52-94-39-149-21-248 38-76 28-121 20-215-95"
        />
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

      <Footer dict={dict.footer} />
    </main>
  );
}
