export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#050816]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="/photos/AS (2).png"
            className="w-12 h-12 rounded-full border border-cyan-400"
          />

          <div>
            <h1 className="font-bold text-xl">Anmol Srivastava</h1>
            <p className="text-cyan-400 text-sm">Full Stack Developer</p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
