export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="text-white font-semibold">Pratik Jadhav</span>. Built with Next.js &amp;
          Tailwind CSS.
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/pratik305"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pratikjadhavlink/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pratikjivanjadhav77@gmail.com"
            className="hover:text-white transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
