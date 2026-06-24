const certifications = [
  {
    name: 'Generative AI with Large Language Models',
    issuer: 'DeepLearning.AI + AWS',
    platform: 'Coursera',
    date: 'May 2024',
    color: 'border-violet-400 bg-violet-50',
    badge: 'bg-violet-100 text-violet-700',
    verify: 'https://coursera.org/verify/UQ46G7S3JSFM',
  },
  {
    name: 'Getting Started with Deep Learning',
    issuer: 'NVIDIA Deep Learning Institute',
    platform: 'NVIDIA DLI',
    date: 'Apr 2022',
    color: 'border-green-400 bg-green-50',
    badge: 'bg-green-100 text-green-700',
    verify: null,
  },
  {
    name: 'Getting Started with AWS Machine Learning',
    issuer: 'Amazon Web Services',
    platform: 'Coursera',
    date: 'Jun 2021',
    color: 'border-orange-400 bg-orange-50',
    badge: 'bg-orange-100 text-orange-700',
    verify: 'https://coursera.org/verify/4SU2B3HQ95JD',
  },
  {
    name: 'Google Cloud Fundamentals for AWS Professionals',
    issuer: 'Google Cloud',
    platform: 'Coursera',
    date: 'Jun 2021',
    color: 'border-blue-400 bg-blue-50',
    badge: 'bg-blue-100 text-blue-700',
    verify: 'https://coursera.org/verify/2AS5RDQ2HNQ3',
  },
  {
    name: 'Introduction to AWS Solutions',
    issuer: 'Amazon Web Services',
    platform: 'AWS Training',
    date: 'Sep 2021',
    color: 'border-orange-400 bg-orange-50',
    badge: 'bg-orange-100 text-orange-700',
    verify: null,
  },
  {
    name: 'Applied Data Science with Python Specialization',
    issuer: 'Udemy',
    platform: 'Udemy',
    date: 'Mar 2023',
    color: 'border-indigo-400 bg-indigo-50',
    badge: 'bg-indigo-100 text-indigo-700',
    verify: null,
  },
  {
    name: 'Introduction to Power BI',
    issuer: 'DataCamp',
    platform: 'DataCamp',
    date: 'Nov 2022',
    color: 'border-teal-400 bg-teal-50',
    badge: 'bg-teal-100 text-teal-700',
    verify: null,
  },
  {
    name: 'Introduction to Data Modeling for Power BI',
    issuer: 'SQLBI',
    platform: 'SQLBI',
    date: 'Jun 2023',
    color: 'border-red-400 bg-red-50',
    badge: 'bg-red-100 text-red-700',
    verify: null,
  },
]

const publication = {
  title: 'Image Classification Android Application',
  journal: 'International Journal of Creative Research Thoughts (IJCRT)',
  issn: 'ISSN: 2320-2882',
  paperId: 'IJCRT2210371',
  date: 'October 2022',
  impactFactor: '7.97',
  tags: ['Python', 'TensorFlow', 'CNN', 'Keras', 'Android'],
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">
            Credentials
          </p>
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Achievements & Certifications</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Competition rankings, published research, and verified credentials from AWS, NVIDIA, Google Cloud, and more.
          </p>
        </div>

        {/* Highlights row: Kaggle + Publication */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">

          {/* Kaggle Competition Achievement */}
          <div className="p-6 rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 text-2xl">
                🥉
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Kaggle Competition</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-xs font-semibold">
                    Top 368
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-1">
                  Rohlik Orders Forecasting Challenge
                </h3>
                <p className="text-sm text-zinc-500 mb-3">
                  Kaggle · Time Series Forecasting · Global Competition
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed mb-3">
                  Ranked in the top participants globally in a demand forecasting competition for Rohlik Group — one of Central Europe&apos;s largest e-grocery platforms — predicting future order volumes across multiple warehouses.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Time Series', 'Forecasting', 'Python', 'Machine Learning'].map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-white border border-amber-100 text-amber-700 text-xs font-medium rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Research Publication */}
          <div className="p-6 rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-violet-50">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Research Publication</span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-600 text-white text-xs font-semibold">
                    Impact Factor {publication.impactFactor}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-1">{publication.title}</h3>
                <p className="text-sm text-zinc-500 mb-3">
                  {publication.journal} · {publication.issn} · Paper ID: {publication.paperId} · {publication.date}
                </p>
                <div className="flex flex-wrap gap-2">
                  {publication.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-white border border-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cert grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className={`relative p-5 rounded-xl border-l-4 ${cert.color} border border-zinc-100 hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${cert.badge}`}>
                  {cert.issuer}
                </span>
                <span className="text-xs text-zinc-400 whitespace-nowrap">{cert.date}</span>
              </div>
              <p className="text-sm font-semibold text-zinc-900 leading-snug mb-1">{cert.name}</p>
              <p className="text-xs text-zinc-400">{cert.platform}</p>
              {cert.verify && (
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Verify
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
