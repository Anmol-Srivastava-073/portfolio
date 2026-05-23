export default function Certificates() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-bold text-center mb-16">
        Certificates
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {['Java', 'Python', 'SQL', 'JavaScript', 'GenAI'].map((item) => (
          <div
            key={item}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
