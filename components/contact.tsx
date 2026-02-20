export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">
        Contact
      </h2>

      <p className="text-zinc-400 mb-10">
        Interested in working together? Let's connect.
      </p>

      <div className="space-y-4">
        <a
          href="mailto:nbiseshm@email.com"
          className="block px-6 py-3 bg-white text-black rounded-lg"
        >
          Email Me
        </a>

        <a
          href="https://github.com/Bisesh-n"
          target="_blank"
          className="block px-6 py-3 border border-zinc-600 rounded-lg"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/bisesh-nakarmi"
          target="_blank"
          className="block px-6 py-3 border border-zinc-600 rounded-lg"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}