import { useState } from 'react'
import ScrollReveal from './reactbits/ScrollReveal'
import deboraImg from '../assets/debora.png'

const certificates = [
  { name: 'nama sertif', img: deboraImg },
  { name: 'nama sertif', img: deboraImg },
  { name: 'nama sertif', img: deboraImg },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="w-full bg-gradient-to-b from-gray-950 to-blue-950 pt-24 pb-48 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-20">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-poppins text-blue-300 text-4xl font-bold">Certificates</h2>
        </ScrollReveal>

        <div className="flex justify-center gap-8 flex-wrap">
          {certificates.map((cert, i) => (
            <ScrollReveal
              key={i}
              delay={i * 200}
              once={false}
              className="w-80 bg-blue-950 border border-blue-300 flex flex-col"
            >
              <img src={cert.img} alt={cert.name} className="w-full h-40 object-cover" />
              <div className="p-4 flex items-center justify-between">
                <p className="font-poppins text-blue-300 text-lg">{cert.name}</p>
                <button
                  onClick={() => setSelected(cert)}
                  className="font-poppins text-blue-300 text-base underline hover:text-blue-100 transition-colors"
                >
                  lihat
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative p-4 max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-3 -right-3 rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-900 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <img src={selected.img} alt={selected.name} className="w-full h-auto" />
          </div>
        </div>
      )}
    </section>
  );
}
