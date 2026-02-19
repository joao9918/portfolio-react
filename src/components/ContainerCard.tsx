type ContainerCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function ContainerCard({ title, children }: ContainerCardProps) {
  return (
    <section className="py-24 px-4 lg:px-28 max-w-full mx-auto">
      <h2 className="text-3xl mb-12 py-4 border-b">{title}</h2>
      <div className="grid gap-8 lg:grid-cols-2">{children}</div>
    </section>
  );
}
