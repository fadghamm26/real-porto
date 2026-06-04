import cvFile from '../assets/CV.pdf'
import aboutImg from '../assets/about.jpeg'

export default function About() {
  return (
    <section id="about-detail" className="w-full min-h-screen bg-gradient-to-b from-green-950 from-15% via-emerald-900 to-emerald-700 flex items-center scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-20 w-full">
        {/* Badges */}
        <div className="flex gap-3 mb-6">
          <span className="bg-gradient-to-r from-green-950 to-emerald-700 rounded-2xl px-5 py-2 font-jersey text-green-300 text-2xl">
            Frontend web
          </span>
          <span className="bg-gradient-to-r from-green-950 to-emerald-700 rounded-2xl px-5 py-2 font-jersey text-green-300 text-2xl">
            UI/UX designer
          </span>
        </div>

        <div className="flex justify-between items-center gap-12">
          {/* Left - Text */}
          <div className="flex-1">
            <h1 className="font-jersey text-green-300 text-7xl leading-tight">
              Muhammad Vito
            </h1>
            <h1 className="font-jersey text-white text-7xl leading-tight mb-4">
              Fadgham
            </h1>
            <p className="font-poppins text-green-300 text-lg leading-relaxed max-w-[700px] mb-6">
              Mahasiswa Teknologi Informasi, Fakultas Vokasi Universitas Brawijaya.
              <br />
              Dengan minat sebagai Frontend web dan UI/UX designer,
              <br />
              berfokus pada pembuatan website clean, responsif dan visual yang kuat
              <br />
              agar memberikan pengalaman yang membekas kepada user.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-6">
              <a href={cvFile} target="_blank" rel="noopener noreferrer" className="w-36 h-10 bg-emerald-800 border border-green-300 flex items-center justify-center font-poppins text-white text-base hover:bg-emerald-700 transition-colors">
                Download Cv
              </a>
              <a href="#projects" className="w-36 h-10 bg-emerald-900 border border-green-300 flex items-center justify-center font-poppins text-white text-base hover:bg-emerald-800 transition-colors">
                View Project
              </a>
            </div>

            {/* Stats */}
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

          {/* Right - Photo */}
          <div className="shrink-0">
            <img
              src={aboutImg}
              alt="Muhammad Vito Fadgham"
              className="w-80 h-[420px] object-cover rounded-2xl shadow-[5px_5px_10px_0px_rgba(139,213,185,1.00)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
