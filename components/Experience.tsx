const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Tata Consultancy Services (TCS iON)',
    duration: 'Jun 2022 – Aug 2022',
    hours: '210 hours',
    type: 'Remote Internship',
    description:
      'Built a Salary Prediction Dashboard for HR teams as part of a 210-hour remote internship. Designed and trained ML regression models to predict salary ranges based on candidate profiles, and delivered interactive dashboards for HR decision-making.',
    tags: ['Python', 'Machine Learning', 'Data Visualization', 'Dashboard'],
    accent: 'from-blue-500 to-cyan-500',
    certId: 'Cert. ID: 893-17963780-1016',
  },
  {
    role: 'Data Science Intern',
    company: 'LetsGrowMore',
    duration: 'May 2024',
    hours: null,
    type: 'Virtual Internship Program',
    description:
      'Selected for the LetsGrowMore Virtual Internship Program as a Data Science Intern. Focused on hands-on application of data science concepts, building practical skills through real-world projects under industry mentors.',
    tags: ['Data Science', 'Python', 'Machine Learning'],
    accent: 'from-orange-400 to-amber-500',
    certId: 'CID: LGMVIPDSWL0020054',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">
            Experience
          </p>
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Internships</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Hands-on industry experience in data science and analytics.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-200 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="md:pl-16 relative">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-xl bg-white border-2 border-zinc-200 items-center justify-center shadow-sm">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.accent}`} />
                </div>

                <div className="bg-white rounded-2xl border border-zinc-200 p-8 hover:shadow-lg hover:shadow-zinc-100 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900">{exp.role}</h3>
                      <p className="text-indigo-600 font-semibold text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-xs font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        {exp.duration}
                      </div>
                      {exp.hours && (
                        <div className="text-xs text-zinc-400 mt-1 text-right">{exp.hours}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-1">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-500 mb-3">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-zinc-600 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-zinc-400">{exp.certId}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
