import { useEffect, useRef, useState } from 'react'
import cvFile from '../assets/CV.pdf'
import aboutImg from '../assets/about.jpeg'
import BlurText from './reactbits/BlurText'

export default function About() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false)
          setTimeout(() => setInView(true), 50)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about-detail" className="w-full min-h-screen bg-gradient-to-b from-blue-950 via-sky-900 to-sky-800 flex items-center scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-20 w-full">
        {/* Badges */}
        <div className="flex gap-3 mb-6">
          <span className="bg-gradient-to-r from-blue-950 to-sky-700 rounded-2xl px-5 py-2 font-jersey text-blue-300 text-2xl">
            Frontend web
          </span>
          <span className="bg-gradient-to-r from-blue-950 to-sky-700 rounded-2xl px-5 py-2 font-jersey text-blue-300 text-2xl">
            UI/UX designer
          </span>
        </div>

        <div className="flex justify-between items-center gap-12">
            <div className="flex-1">
            <div className="h-[200px]">
              {inView && (
                <>
                  <BlurText
                    key="vito"
                    text="Muhammad Vito"
                    delay={100}
                    animateBy="letters"
                    direction="top"
                    className="font-jersey text-blue-300 text-7xl leading-tight"
                  />
                  <BlurText
                    key="fadgham"
                    text="Fadgham"
                    delay={350}
                    animateBy="letters"
                    direction="top"
                    className="font-jersey text-white text-7xl leading-tight mb-4"
                  />
                </>
              )}
            </div>

            <p className="font-poppins text-blue-300 text-lg leading-relaxed max-w-[700px] mb-6">
              Mahasiswa Teknologi Informasi, Fakultas Vokasi Universitas Brawijaya.
              <br />
              Dengan minat sebagai Frontend web dan UI/UX designer,
              <br />
              berfokus pada pembuatan website clean, responsif dan visual yang kuat
              <br />
              agar memberikan pengalaman yang membekas kepada user.
            </p>

            <div className="flex gap-4 mb-6">
              <a href={cvFile} target="_blank" rel="noopener noreferrer" className="w-36 h-10 bg-sky-800 border border-blue-300 flex items-center justify-center font-poppins text-white text-base hover:bg-sky-700 transition-colors">
                Download Cv
              </a>
              <a href="#projects" className="w-36 h-10 bg-sky-900 border border-blue-300 flex items-center justify-center font-poppins text-white text-base hover:bg-sky-800 transition-colors">
                View Project
              </a>
            </div>

            <div className="flex gap-6">
              <div className="w-44 h-28 bg-gray-950 rounded-[10px] flex flex-col items-center justify-center">
                <span className="font-jersey text-white text-6xl">3+</span>
                <span className="font-jersey text-white text-2xl">Project</span>
              </div>
              <div className="w-44 h-28 bg-gray-950 rounded-[10px] flex flex-col items-center justify-center">
                <span className="font-jersey text-white text-6xl">3+</span>
                <span className="font-jersey text-white text-2xl">Certificate</span>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <img
              src={aboutImg}
              alt="Muhammad Vito Fadgham"
              className="w-80 h-[420px] object-cover rounded-2xl shadow-[5px_5px_10px_0px_rgba(147,197,253,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
