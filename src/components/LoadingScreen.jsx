import catImg from '../assets/cat.png'

export default function LoadingScreen() {
  return (
    <div className="w-full h-screen bg-blue-950 flex flex-col items-center justify-center gap-10 overflow-hidden">
      <h1 className="font-jersey text-blue-300 text-6xl tracking-wide">
        FADGHAMM. | PORTOFOLIO
      </h1>
      <div className="relative w-[600px]">
        <img
          src={catImg}
          alt="Loading"
          className="w-15 absolute -top-14 animate-walk"
        />
        <div className="h-2 w-full bg-blue-900 rounded-[12px] overflow-hidden">
          <div className="h-full bg-blue-300 rounded-[12px] animate-loading" />
        </div>
      </div>
    </div>
  );
}
