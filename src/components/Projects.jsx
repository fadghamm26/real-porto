import { useState } from 'react'
import deboraImg from '../assets/debora.png'
import floodImg from '../assets/flood.svg'
import lifesyncImg from '../assets/lifesync.svg'

const projects = [
  {
    title: 'Debora Craft',
    desc: 'Website E-commerch yang menjual bucket bunga hand made dan aksesoris lainnya.',
    img: deboraImg,
    github: 'https://github.com/fadghamm26/debora_craft',
  },
  {
    title: 'Flood monitoring system',
    desc: 'Website untuk monitoring ketinggian air sungai, yang dimana memakai Iot System.',
    img: floodImg,
    github: '#',
  },
  {
    title: 'LifeSync',
    desc: 'Website kesehatan untuk tracking kesehatan kita.',
    img: lifesyncImg,
    github: '#',
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length)
  const next = () => setCurrent((c) => (c + 1) % projects.length)

  const getCardStyle = (index) => {
    const diff = (index - current + projects.length) % projects.length

    if (diff === 0) {
      // Front card
      return 'z-30 scale-100 opacity-100 translate-x-0'
    } else if (diff === 1 || diff === -(projects.length - 1)) {
      // Right card
      return 'z-20 scale-75 opacity-50 translate-x-[280px]'
    } else {
      // Left card
      return 'z-20 scale-75 opacity-50 -translate-x-[280px]'
    }
  }

  return (
    <section id="projects" className="w-full bg-gray-950 border-y border-green-300 py-20">
      <div className="max-w-[1440px] mx-auto px-20">
        <h2 className="font-poppins text-green-300 text-4xl font-bold text-center mb-16">Projects</h2>

        <div className="flex items-center justify-center gap-8">
          {/* Left Button */}
          <button
            onClick={prev}
            className="bg-gray-950 border border-green-300 rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-950 transition-colors shrink-0 relative z-40"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="#86efac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Cards Container */}
          <div className="relative w-[538px] h-[488px] overflow-visible">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`absolute top-0 left-0 w-full bg-gray-950 border border-green-300 p-6 flex flex-col transition-all duration-500 ease-in-out ${getCardStyle(i)}`}
              >
                <img src={project.img} alt={project.title} className="w-full h-64 object-cover border border-green-300 mb-4" />
                <h3 className="font-poppins text-green-300 text-2xl tracking-wide mb-2">{project.title}</h3>
                <p className="font-poppins text-green-300 text-base leading-8 tracking-tight mb-4 flex-1">{project.desc}</p>
                <div className="flex justify-end">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-950 border border-green-300 rounded-2xl px-4 py-1 flex items-center gap-2 hover:bg-green-950 transition-colors">
                    <span className="font-poppins text-green-300 text-base leading-8 tracking-tight">Git Hub</span>
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="#86efac"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={next}
            className="bg-gray-950 border border-green-300 rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-950 transition-colors shrink-0 relative z-40"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M9 5l7 7-7 7" stroke="#86efac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
