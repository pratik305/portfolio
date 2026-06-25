export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">
            Background
          </p>
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Education</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Academic foundation in Information Technology with hands-on research experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-100 transition-all">
            {/* Gradient top bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-violet-600" />

            <div className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">

                {/* University of Mumbai logo */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div
                    className="w-20 h-20 rounded-full shadow-md ring-2 ring-zinc-200"
                    style={{
                      backgroundImage: 'url(/mumbai-university-logo.png)',
                      backgroundSize: '120%',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                    role="img"
                    aria-label="University of Mumbai"
                  />
                  <span className="text-[10px] text-zinc-400 font-medium text-center leading-tight max-w-[80px]">
                    Univ. of Mumbai
                  </span>
                </div>

                <div className="flex-1">
                  {/* Degree */}
                  <h3 className="text-xl font-bold text-zinc-900 leading-tight mb-1">
                    Bachelor of Engineering — Information Technology
                  </h3>

                  {/* Institution */}
                  <p className="text-indigo-600 font-semibold text-sm">
                    Finolex Academy of Management and Technology
                  </p>

                  {/* Affiliation + location */}
                  <p className="text-zinc-400 text-sm mb-4">
                    Affiliated to University of Mumbai &nbsp;·&nbsp; Ratnagiri, Maharashtra
                  </p>

                  {/* Duration + CGPA */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-xs font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      2019 – 2023
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full text-xs font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      CGPA: 7.45 / 10
                    </span>
                  </div>

                  {/* Highlights */}
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                      Highlights
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Published research paper on Image Classification Android App in IJCRT (Impact Factor 7.97)',
                        'Built CNN-based image classification system using TensorFlow, Keras & Android',
                        'Coursework: Data Structures, DBMS, Machine Learning, Computer Networks, Software Engineering',
                      ].map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
