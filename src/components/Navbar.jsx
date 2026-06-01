import cvFile from '../assets/CV.pdf'

export default function Navbar() {
  return (
    <nav className="w-full h-20 bg-green-950 border-b border-emerald-900 fixed top-0 left-0 z-50 flex items-center justify-between px-12">
      <div className="font-jersey text-green-300 text-3xl">Fadghamm.</div>
      <div className="flex items-center gap-8">
        <a href="#about" className="font-jersey text-green-300 text-2xl hover:text-green-100 transition-colors">About</a>
        <a href="#projects" className="font-jersey text-green-300 text-2xl hover:text-green-100 transition-colors">Projects</a>
        <a href="#certificates" className="font-jersey text-green-300 text-2xl hover:text-green-100 transition-colors">Certificates</a>
        <a href="#skills" className="font-jersey text-green-300 text-2xl hover:text-green-100 transition-colors">Skills</a>
        <a href={cvFile} target="_blank" rel="noopener noreferrer" className="bg-green-950 border border-green-300 px-6 py-1.5 font-jersey text-green-300 text-2xl hover:bg-green-900 transition-colors inline-block">
          Download Cv
        </a>
      </div>
    </nav>
  );
}
