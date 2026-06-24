const categories = [
  {
    name: 'Languages',
    pill: 'bg-blue-50 text-blue-700 border border-blue-100',
    items: ['Python', 'SQL', 'Scala', 'Bash'],
  },
  {
    name: 'Big Data',
    pill: 'bg-orange-50 text-orange-700 border border-orange-100',
    items: ['Apache Spark', 'Apache Kafka', 'Apache Flink', 'Hadoop'],
  },
  {
    name: 'Orchestration',
    pill: 'bg-violet-50 text-violet-700 border border-violet-100',
    items: ['Apache Airflow', 'Prefect', 'dbt', 'Luigi'],
  },
  {
    name: 'Cloud',
    pill: 'bg-sky-50 text-sky-700 border border-sky-100',
    items: ['AWS', 'Azure', 'GCP', 'Databricks'],
  },
  {
    name: 'Databases & Warehouses',
    pill: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
    items: ['PostgreSQL', 'Snowflake', 'BigQuery', 'MongoDB', 'Redis', 'Redshift'],
  },
  {
    name: 'DevOps & Tools',
    pill: 'bg-zinc-100 text-zinc-700 border border-zinc-200',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Git', 'GitHub Actions', 'Linux'],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">
            Toolkit
          </p>
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Tech Stack</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Technologies I use to build and maintain modern data infrastructure at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-2xl border border-zinc-200 p-6 hover:shadow-md hover:shadow-zinc-100 transition-all"
            >
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.15em] mb-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${cat.pill}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
