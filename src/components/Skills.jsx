import OrbitImages from './reactbits/OrbitImages'
import ScrollReveal from './reactbits/ScrollReveal'

const skills = [
  { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/93c5fd' },
  { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/93c5fd' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/93c5fd' },
  { name: 'Arduino', icon: 'https://cdn.simpleicons.org/arduino/93c5fd' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/93c5fd' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/93c5fd' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/93c5fd' },
  { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/93c5fd' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/93c5fd' },
  { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css/93c5fd' },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-gradient-to-b from-blue-950 to-gray-950 pt-16 pb-24 scroll-mt-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-20">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-poppins text-blue-300 text-4xl font-semibold">Skills</h2>
        </ScrollReveal>

        <div className="flex justify-center max-w-[1200px] mx-auto h-[400px] overflow-hidden">
          <OrbitImages
            images={skills.map(s => s.icon)}
            shape="ellipse"
            radiusX={500}
            radiusY={150}
            itemSize={72}
            duration={30}
            rotation={-5}
            responsive={true}
            baseWidth={1200}
            altPrefix="Skill icon"
            centerContent={
              <div className="text-center">
                <p className="font-jersey text-blue-300/50 text-3xl">My Skills</p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
