import { useEffect } from "react";

export default function useFullScreenScroll() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    function handleClick(e) {
      const target = e.target.closest("section");
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    sections.forEach((sec) => sec.addEventListener("click", handleClick));

    return () => {
      sections.forEach((sec) => sec.removeEventListener("click", handleClick));
    };
  }, []);
}
