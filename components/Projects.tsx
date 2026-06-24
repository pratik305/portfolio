const projects = [
  {
    title: 'SaaS dbt Analytics Pipeline',
    description:
      'End-to-end SaaS analytics pipeline with a four-layer medallion architecture (bronze → staging → intermediate → gold). 16 dbt models, 32 automated tests, SCD Type 2 snapshots for subscription changes, and a central account_360 spine consolidating four business domains — churn, feature adoption, account health, and support.',
    tags: ['Databricks', 'dbt', 'Delta Lake', 'PySpark', 'SQL'],
    gradient: 'from-blue-500 to-indigo-600',
    github: 'https://github.com/pratik305/saas_dbt_analytics',
  },
  {
    title: 'Stock Finance Lakehouse',
    description:
      'Data lakehouse project on Databricks implementing the full medallion architecture for stock market data. Bronze layer ingests raw API data, silver cleans and deduplicates via MERGE operations, and the gold layer computes analytics-ready metrics — moving averages and volatility — using PySpark window functions.',
    tags: ['Databricks', 'Apache Spark', 'Delta Lake', 'PySpark', 'Python'],
    gradient: 'from-emerald-500 to-teal-600',
    github: 'https://github.com/pratik305/stock_finance_lakehouse',
  },
  {
    title: 'Sales Analytics — End to End',
    description:
      'Enterprise-grade analytics pipeline for an e-commerce retailer built on a star schema design. Transforms raw transactional data through a Databricks Delta gold layer into Power BI dashboards tracking conversion rates, revenue per session, refund analysis, and executive KPIs using DAX business logic.',
    tags: ['Python', 'Databricks', 'Delta Lake', 'Power BI', 'DAX'],
    gradient: 'from-orange-500 to-amber-500',
    github: 'https://github.com/pratik305/Sales-Analysis-End-To-End',
  },
  {
    title: 'NLP News Summarizer',
    description:
      'NLP application for automatic news summarization using Google Pegasus fine-tuned on the CNN/DailyMail dataset (300k+ articles). Supports both extractive and abstractive approaches with a hybrid method for improved coherence. Performance evaluated with ROUGE metrics and served via a Flask API.',
    tags: ['Python', 'HuggingFace', 'Pegasus', 'Flask', 'ROUGE'],
    gradient: 'from-violet-500 to-purple-600',
    github: 'https://github.com/pratik305/News_summarization',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Featured Projects</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Real projects from GitHub — medallion lakehouses, analytics pipelines, and NLP applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-100 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Gradient accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{project.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors group-hover:text-indigo-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/pratik305"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-200 rounded-xl text-sm font-semibold text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
          >
            View All Projects on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
