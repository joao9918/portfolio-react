import AboutMe from "@/components/AboutMe";
import AnimatedCard from "@/components/AnimatedCard";
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
        <AnimatedCard x={-500} start="top 60%" end="top 60%">
          <Card
            title="Chronos Pomodoro"
            description={dict.projects.pomodoro}
            image="chronos-pomodoro.png"
            githubUrl="https://github.com/joao9918/chronos-pomodoro"
            liveUrl="https://chronos-pomodoro-project.vercel.app/"
          />
        </AnimatedCard>
        <AnimatedCard y={200} start="top 60%" end="top 60%">
          <Card
            title="Stranger Things"
            description={dict.projects.stranger}
            image="stranger-things.png"
            githubUrl="https://github.com/joao9918/project-stranger-things"
            liveUrl="https://stranger-things-beige.vercel.app/"
          />
        </AnimatedCard>
        <AnimatedCard y={200} start="top 40%" end="top 60%">
          <Card
            title="Notes Tracker"
            description={dict.projects.notes}
            image="notes-tracker.png"
            githubUrl="https://github.com/joao9918/notes-tracker"
            liveUrl="https://notes-tracker-phi.vercel.app/"
          />
        </AnimatedCard>
        <AnimatedCard x={-2000} start="top 60%" end="top 60%">
          <Card
            title="BMW"
            description={dict.projects.bmw}
            image="project-bmw.png"
            githubUrl="#"
            liveUrl="#"
          />
        </AnimatedCard>
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

      <Footer dict={dict.footer} />
    </main>
  );
}
