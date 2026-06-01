import profileImg from '../assets/pito.png'

export default function Hero() {
  return (
    <section id="about" className="w-full min-h-[862px] bg-[radial-gradient(ellipse_at_center,_#052e16_0%,_#000_100%)] relative flex items-center pt-20">
      <div className="max-w-[1440px] mx-auto w-full px-[75px] flex justify-between items-center">
        {/* Left - Text */}
        <div className="max-w-[694px]">
          <p className="font-noto text-green-300 text-4xl leading-[70.4px]">
            &ldquo;Seorang mahasiswa yang bersemangat dalam pengembangan web, desain UI/UX, dan teknologi IoT untuk menciptakan solusi digital yang bermanfaat.&rdquo;
          </p>
          <button className="mt-8 bg-green-950 border border-green-300 px-8 py-2 font-poppins text-green-300 text-xl hover:bg-green-900 transition-colors">
            View Project
          </button>
        </div>

        {/* Right - Photo */}
        <div className="w-96 h-[657px] flex items-center justify-center overflow-hidden">
          <img src={profileImg} alt="Profile" className="w-full h-full object-cover" /> 
        </div>
      </div>
    </section>
  );
}
