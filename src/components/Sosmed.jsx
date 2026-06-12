import ScrollReveal from './reactbits/ScrollReveal'
import gitIcon from '../assets/git.svg'
import gmailIcon from '../assets/gmail.svg'
import instaIcon from '../assets/instagran.svg'
import linkedinIcon from '../assets/linkedin.svg'

const sosmed = [
  { name: 'Fadghamm', platform: 'GitHub', icon: gitIcon, link: 'https://github.com/fadghamm26' },
  { name: 'fadghamm26', platform: 'Instagram', icon: instaIcon, link: 'https://www.instagram.com/fadghamm/' },
  { name: 'Muhammad vito fadgham', platform: 'LinkedIn', icon: linkedinIcon, link: 'https://www.linkedin.com/in/muhammad-vito-fadgham/' },
  { name: 'fadghamm26@gmail.com', platform: 'Email', icon: gmailIcon, link: 'mailto:fadghamm26@gmail.com' },
];

export default function Sosmed() {
  return (
    <section id="sosmed" className="w-full relative pt-24 pb-48 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/80 to-black/90" />
      <div className="max-w-[1440px] mx-auto px-20 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-jersey text-white text-6xl">My Social Media</h2>
        </ScrollReveal>

        <div className="flex flex-col items-center gap-6">
          {sosmed.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150} className="w-full max-w-2xl">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 bg-gray-950 border border-blue-300/30 rounded-2xl px-8 py-5 hover:bg-blue-950/50 transition-colors group"
              >
                <img src={item.icon} alt={item.platform} className="w-10 h-10" />
                <div>
                  <p className="font-jersey text-white text-2xl group-hover:text-blue-300 transition-colors">{item.name}</p>
                  <p className="font-poppins text-blue-300/60 text-sm">{item.platform}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
