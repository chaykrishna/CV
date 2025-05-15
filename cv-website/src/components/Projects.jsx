const projects = [
  {
    title: "AI Resume Screener",
    description:
      "Automated AI-powered resume evaluation system using GPT-4 to score candidates for job fit.",
    link: "https://github.com/chaykrishna/ai-resume-screener",
  },
  {
    title: "Web3 Portfolio Tracker",
    description:
      "Real-time blockchain wallet portfolio tracker with React, Ethers.js & Tailwind CSS.",
    link: "https://github.com/chaykrishna/web3-portfolio",
  },
  {
    title: "Fitness API Backend",
    description:
      "Scalable REST API with JWT auth, Stripe billing, built on Node.js and MongoDB.",
    link: "https://github.com/chaykrishna/fitness-api",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-12">Projects</h2>
      <div className="grid gap-12 md:grid-cols-3">
        {projects.map(({ title, description, link }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-primary">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
            <span className="text-sm text-primary underline">View on GitHub →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
