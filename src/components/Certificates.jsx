import { useState } from 'react'
import deboraImg from '../assets/debora.png'

const certificates = [
  { name: 'nama sertif', img: deboraImg },
  { name: 'nama sertif', img: deboraImg },
  { name: 'nama sertif', img: deboraImg },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="w-full bg-green-950 border-y border-green-300 py-42 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-20">
        <h2 className="font-poppins text-green-300 text-4xl font-bold mb-16">Certificates</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {certificates.map((cert, i) => (
            <div key={i} className="w-96 bg-green-950 border border-green-300 flex flex-col">
              <img src={cert.img} alt={cert.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex items-center justify-between">
                <p className="font-poppins text-green-300 text-1xl">{cert.name}</p>
                <button
                  onClick={() => setSelected(cert)}
                  className="font-poppins text-green-300 text-lg underline hover:text-green-100 transition-colors"
                >
                  lihat
                </button>
              </div>
            </div>
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
              className="absolute -top-3 -right-3  rounded-full w-8 h-8 flex items-center justify-center hover:bg-green-900 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="#86efac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <img src={selected.img} alt={selected.name} className="w-full h-auto" />
            
          </div>
        </div>
      )}
    </section>
  );
}
