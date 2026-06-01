import profileImg from '../assets/pito.png'

export default function Hero() {
  return (
    <section id="about" className="w-full min-ht-[862px] bg-[radial-gradient(ellipse_at_center,_#052e16_0%,_#000_100%)] relative flex items-center pt-15 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto w-full px-[75px] flex justify-between items-center">
        {/* Left - Text */}
        <div className="max-w-[694px]">
          <p className="font-jersey text-white text-6xl mb-10 animate-slide-up animate-delay-1">
            Halo, <br />
            saya Muhammad Vito Fadgham
          </p>
          <p className="font-noto text-green-300 text-2xl leading-[70.4px] animate-slide-up animate-delay-2">
            &ldquo;Seorang mahasiswa yang bersemangat dalam pengembangan web, desain UI/UX, dan teknologi untuk menciptakan solusi digital yang bermanfaat.&rdquo;
          </p>
          <button className="mt-8 bg-green-950 border border-green-300 px-8 py-2 font-poppins text-green-300 text-xl hover:bg-green-900 transition-colors animate-slide-up animate-delay-3">
            <a href="#projects" className="text-green-300 hover:text-green-100">
              Lihat Projects
            </a>
          </button>
        </div>

        {/* Right - Photo */}
        <div className="w-96 h-[657px] flex items-center justify-center overflow-hidden animate-slide-right">
          <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
