const stats = [
  { number: 'Top 368', label: 'Kaggle Competition' },
  { number: '8+', label: 'Certifications' },
  { number: '15+', label: 'Technologies' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Avatar + Stats */}
          <div className="flex flex-col items-center gap-10">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400 to-violet-500 rotate-6 opacity-20 scale-105" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400 to-violet-500 rotate-3 opacity-10 scale-102" />
              <div className="relative w-64 h-64 rounded-3xl border-2 border-white shadow-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Profile.jpg"
                  alt="Pratik Jadhav"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex justify-center gap-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl font-bold text-zinc-900">{s.number}</div>
                  <div className="text-xs text-zinc-500 mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text content */}
          <div>
            <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">
              About Me
            </p>
            <h2 className="text-4xl font-bold text-zinc-900 mb-6 leading-tight">
              Turning data chaos into{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                structured insight
              </span>
            </h2>

            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>
                I&apos;m a Data Engineer passionate about building the infrastructure that makes
                data-driven decisions possible. I specialize in designing robust, scalable pipelines
                that reliably move data from source to insight.
              </p>
              <p>
                My expertise spans batch and streaming architectures, cloud-native data platforms,
                and the modern data stack. I write clean, maintainable code and care deeply about
                data quality, pipeline observability, and system reliability.
              </p>
              <p>
                I enjoy the intersection of software engineering and data — from orchestrating
                complex DAGs to optimizing distributed queries at scale.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:pratikjivanjadhav77@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-700 text-sm font-semibold rounded-xl border border-zinc-200 hover:bg-zinc-50 transition-colors"
              >
                See My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
