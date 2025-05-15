import { useState, useEffect } from "react";

export default function Appbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
  };

  const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
    { id: "blog", label: "Blog", href: "https://medium.com/@chaymall", external: true },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/90 dark:bg-black/90 shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors duration-500">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center gap-12 font-semibold text-black dark:text-white select-none">
        {links.map(({ id, label, href, external }) => (
          external ? (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-lg hover:text-primary transition"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-primary transition-all"></span>
            </a>
          ) : (
            <a
              key={id}
              href={`#${id}`}
              className="relative group text-lg hover:text-primary transition"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-primary transition-all"></span>
            </a>
          )
        ))}

        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="ml-8 px-4 py-2 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-black transition transform hover:scale-110 active:scale-95"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>
    </header>
  );
}
