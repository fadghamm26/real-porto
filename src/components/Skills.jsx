import ScrollReveal from './reactbits/ScrollReveal'

const skills = [
  ['Laravel', 'PHP', 'Figma', 'Arduino'],
  ['Tailwind', 'MySQL', 'React', 'HTML5'],
  ['JavaScript', 'CSS3'],
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-gradient-to-b from-green-950 to-gray-950 py-24 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-20">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-poppins text-green-300 text-6xl font-semibold">SKILLS</h2>
        </ScrollReveal>
        <div className="flex flex-col items-center gap-6">
          {skills.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-6 justify-center flex-wrap">
              {row.map((skill, skillIdx) => (
                <ScrollReveal
                  key={skill}
                  delay={skillIdx * 0.1 + rowIdx * 0.15}
                  className="w-52 h-20 bg-gray-950 border border-green-300 flex items-center justify-center"
                >
                  <span className="font-jersey text-green-300 text-4xl">{skill}</span>
                </ScrollReveal>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
