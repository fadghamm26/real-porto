const skills = [
  ['Laravel', 'PHP', 'Figma', 'Arduino'],
  ['Tailwind', 'MySQL', 'React', 'HTML5'],
  ['JavaScript', 'CSS3'],
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-gray-950 border-y border-green-300 py-24">
      <div className="max-w-[1440px] mx-auto px-20">
        <h2 className="font-poppins text-green-300 text-6xl font-semibold text-center mb-16">SKILLS</h2>
        <div className="flex flex-col items-center gap-6">
          {skills.map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-6 justify-center flex-wrap">
              {row.map((skill) => (
                <div key={skill} className="w-52 h-20 bg-gray-950 border border-green-300 flex items-center justify-center">
                  <span className="font-jersey text-green-300 text-4xl">{skill}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
