import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/chaykrishna",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/chaitanya-malladi-940b98261/",
      label: "LinkedIn",
    },
    {
      icon: <FaMedium size={24} />,
      href: "https://medium.com/@chaymall",
      label: "Medium",
    },
  ];

  return (
    <footer className="flex justify-center items-center gap-8 py-6 border-t border-gray-300 dark:border-gray-700 select-none">
      {socials.map(({ icon, href, label }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-gray-700 dark:text-gray-300 hover:text-primary transition transform hover:scale-125"
        >
          {icon}
        </a>
      ))}
    </footer>
  );
}
