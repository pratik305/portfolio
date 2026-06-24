const contributions = [
  {
    repo: 'Codecademy/docs',
    org: 'Codecademy',
    orgDesc: 'Official Codecademy documentation platform (open source)',
    repoUrl: 'https://github.com/Codecademy/docs',
    prTitle: 'Added Adam Optimizer Documentation',
    prDesc:
      'Authored comprehensive documentation for the Adam (Adaptive Moment Estimation) optimizer — covering the algorithm mechanics, hyperparameters, use cases, and code examples. Merged into Codecademy\'s public docs.',
    prNumber: '#5216',
    date: 'Oct 2024',
    type: 'Documentation',
    tags: ['Machine Learning', 'Deep Learning', 'Python', 'Adam Optimizer'],
    color: 'from-indigo-500 to-blue-600',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  },
  {
    repo: 'Codecademy/docs',
    org: 'Codecademy',
    orgDesc: 'Official Codecademy documentation platform (open source)',
    repoUrl: 'https://github.com/Codecademy/docs',
    prTitle: 'Added SGD (Stochastic Gradient Descent) Documentation',
    prDesc:
      'Wrote documentation for Stochastic Gradient Descent — explaining the optimization algorithm, variants (mini-batch, full-batch), convergence behavior, and practical implementation guidance with examples.',
    prNumber: '#5208',
    date: 'Nov 2024',
    type: 'Documentation',
    tags: ['Machine Learning', 'Optimization', 'SGD', 'Python'],
    color: 'from-violet-500 to-indigo-600',
    badgeColor: 'bg-violet-50 text-violet-700 border-violet-100',
  },
]

export default function OpenSource() {
  return (
    <section id="open-source" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
            Community
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Open Source</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Merged contributions to Codecademy&apos;s open source documentation — helping
            developers worldwide learn ML optimization algorithms.
          </p>
        </div>

        {/* GitHub stat strip */}
        <div className="flex flex-wrap justify-center gap-8 mb-14">
          {[
            { label: 'Merged PRs', value: '2' },
            { label: 'Org Contributed To', value: 'Codecademy' },
            { label: 'Focus Area', value: 'ML / Docs' },
            { label: 'Achievement', value: 'Pull Shark' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contribution cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {contributions.map((c) => (
            <div
              key={c.prNumber}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-colors group"
            >
              {/* gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${c.color}`} />

              <div className="p-7">
                {/* Repo + PR badge */}
                <div className="flex items-center justify-between mb-4">
                  <a
                    href={c.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    {c.repo}
                  </a>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Merged {c.prNumber}
                    </span>
                    <span className="text-xs text-zinc-500">{c.date}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {c.prTitle}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{c.prDesc}</p>

                <div className="flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 text-xs font-medium border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/pratik305"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 rounded-xl text-sm font-semibold text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 transition-colors"
          >
            View GitHub Profile
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
