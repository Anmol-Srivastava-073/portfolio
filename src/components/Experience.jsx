export default function Experience() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-bold text-center mb-16">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <img src="/photos/gssoc.png" className="w-16 mb-6" />

          <h3 className="text-2xl font-bold">
            GirlScript Summer of Code 2026
          </h3>

          <p className="text-cyan-400 mt-2">
            Open Source Contributor
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <img src="/photos/awstech.png" className="w-16 mb-6" />

          <h3 className="text-2xl font-bold">
            AWS Cloud Clubs MUJ
          </h3>

          <p className="text-cyan-400 mt-2">
            Technical Team Member
          </p>
        </div>
      </div>
    </section>
  )
}
