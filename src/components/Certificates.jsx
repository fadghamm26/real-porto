const certificates = [
  { name: 'nama sertif', img: 'https://placehold.co/372x188' },
  { name: 'nama sertif', img: 'https://placehold.co/372x188' },
  { name: 'nama sertif', img: 'https://placehold.co/372x188' },
];

export default function Certificates() {
  return (
    <section id="certificates" className="w-full bg-green-950 border-y border-green-300 py-20">
      <div className="max-w-[1440px] mx-auto px-20">
        <h2 className="font-poppins text-green-300 text-6xl font-bold mb-16">Certificates</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {certificates.map((cert, i) => (
            <div key={i} className="w-96 bg-green-950 border border-green-300 flex flex-col">
              <img src={cert.img} alt={cert.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="font-poppins text-white text-3xl">{cert.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
