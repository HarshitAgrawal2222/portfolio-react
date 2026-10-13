import { useEffect, useState } from "react";

const FILES = { home: "home.jsx", projects: "projects.jsx", about: "about.md", experience: "experience.log", skills: "skills.json", terminal: "terminal.sh", awards: "awards.yml", contact: "contact.sh" };

export default function StatusBar() {
  const [file, setFile] = useState("home.jsx");
  const [ln, setLn] = useState(1);
  useEffect(() => {
    let tick = false;
    const update = () => {
      tick = false;
      let cur = "home";
      Object.keys(FILES).forEach((id) => {
        const e = document.getElementById(id);
        if (e && e.getBoundingClientRect().top < window.innerHeight * 0.45) cur = id;
      });
      setFile(FILES[cur]);
      setLn(Math.round(window.scrollY / 20) + 1);
    };
    const onScroll = () => { if (!tick) { tick = true; requestAnimationFrame(update); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="status" aria-hidden="true">
      <span>⎇ main</span><span>✓ 0 errors</span><span>{file}</span><span className="sp" />
      <span>Ln {ln}, Col 1</span><span>UTF-8</span><span>JavaScript</span>
    </div>
  );
}
