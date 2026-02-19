"use client";
import Card from "@/components/Card";
import ContainerCard from "@/components/ContainerCard";
import Section from "@/components/Section";

export default function En() {
  return (
    <main className="bg-[#0b0f1a] text-white overflow-x-hidden">
      {/* HERO */}
      <Section />

      {/* PROJECTS */}
      <ContainerCard title="My Projects">
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
          image="stranger-things.png"
          githubUrl="#"
          liveUrl="#"
        />
      </ContainerCard>
    </main>
  );
}
