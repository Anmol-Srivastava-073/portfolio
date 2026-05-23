function Certificates() {
  const certs = [
    '/photos/jscert.png',
    '/photos/genai.png',
    '/photos/sqlcert.png',
    '/photos/pythoncert.png',
    '/photos/javacert.png',
    '/photos/jvcert.png',
    '/photos/jvoops.png',
  ]

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16">Certificates</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {certs.map((cert, index) => (
          <img
            key={index}
            src={cert}
            className="rounded-2xl hover:scale-105 transition duration-500 shadow-2xl"
          />
        ))}
      </div>
    </section>
  )
}

export default Certificates
