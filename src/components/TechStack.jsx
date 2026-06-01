const techStack = [
  'JavaScript', 'CSS3', 'HTML5', 'Tailwind', 'MySQL',
  'React', 'Arduino', 'Figma', 'PHP', 'Laravel'
];

export default function TechStack() {
  // Duplicate for seamless loop
  const items = [...techStack, ...techStack];

  return (
    <section className="w-full h-40 bg-green-900 border-y border-green-300 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {items.map((tech, i) => (
            <div key={i} className="bg-gray-950 border border-green-300 px-8 py-4 min-w-[208px] flex items-center justify-center">
              <span className="font-jersey text-green-300 text-4xl">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
