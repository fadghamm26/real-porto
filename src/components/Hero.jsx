import profileImg from '../assets/pito.png'
import ScrollReveal from './reactbits/ScrollReveal'

export default function Hero() {
  return (
    <section id="about" className="w-full min-ht-[862px] bg-gradient-to-b from-black via-green-950 to-green-950 relative flex items-center pt-15 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto w-full px-[75px] flex justify-between items-center">
        {/* Left - Text */}
        <div className="max-w-[694px]">
          <ScrollReveal delay={200} direction="up">
            <p className="font-noto text-green-300 text-2xl leading-[70.4px]">
              &ldquo;Seorang mahasiswa yang bersemangat dalam pengembangan web, desain UI/UX, dan teknologi untuk menciptakan solusi digital yang bermanfaat.&rdquo;
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400} direction="up">
            <button className="mt-8 bg-green-950 border border-green-300 px-8 py-2 font-poppins text-green-300 text-xl hover:bg-green-900 transition-colors">
              <a href="#projects" className="text-green-300 hover:text-green-100">
                Lihat Projects
              </a>
            </button>
          </ScrollReveal>
        </div>

        {/* Right - Photo */}
        <ScrollReveal delay={300} direction="right" className="w-96 h-[657px] flex items-center justify-center overflow-hidden">
          <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
        </ScrollReveal>
      </div>
    </section>
  );
}
