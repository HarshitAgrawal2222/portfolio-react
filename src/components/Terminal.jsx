import { useEffect, useRef, useState } from "react";
import { projects, inProgress, jobs, skills, awards } from "../data";

const CHIPS = ["help", "whoami", "skills", "projects", "experience", "awards", "contact", "theme", "clear"];
const OUT = {
  help: () => ["Available commands:", "  whoami      who I am", "  skills      my tech stack", "  projects    things I built", "  experience  work, roles, education", "  awards      achievements", "  contact     how to reach me", "  theme       toggle light / dark", "  clear       clear the screen"],
  whoami: () => ["Harshit Agrawal", "Full-stack developer · B.Tech ECE, NIT Raipur (2023 – 2027)", "Open to internships and collaborations"],
  skills: () => skills.map(([g, items]) => `${g}: ${items.join(", ")}`),
  projects: () => [...projects, ...inProgress].map((p) => `• ${p.name} — ${p.url || p.note}`),
  experience: () => jobs.map((j) => `• ${j.title} (${j.meta})`),
  awards: () => awards.map(([t, d]) => `✓ ${t} — ${d}`),
  contact: () => ["email    agrawalharshit2003@gmail.com", "phone    +91 81036 96310", "github   github.com/HarshitAgrawal2222", "linkedin linkedin.com/in/harshit-agrawal"],
};

export default function Terminal({ onTheme }) {
  const [lines, setLines] = useState([{ t: "Welcome to Harshit’s terminal. Type \"help\" or tap a command below.", c: "g" }]);
  const [val, setVal] = useState("");
  const box = useRef(null);
  const hist = useRef([]);
  const hi = useRef(0);
  useEffect(() => { box.current.scrollTop = box.current.scrollHeight; }, [lines]);

  const run = (raw) => {
    const c = raw.trim().toLowerCase();
    if (!c) return;
    if (c === "clear") { setLines([]); return; }
    const add = [{ t: "$ " + raw, c: "m" }];
    if (c === "theme") { onTheme(); add.push({ t: "theme switched", c: "g" }); }
    else if (OUT[c]) OUT[c]().forEach((t) => add.push({ t }));
    else add.push({ t: `command not found: ${c}. Type "help".`, c: "h" });
    setLines((l) => [...l, ...add]);
  };
  const onKey = (e) => {
    if (e.key === "Enter") {
      if (val.trim()) { hist.current.push(val); hi.current = hist.current.length; }
      run(val); setVal("");
    } else if (e.key === "ArrowUp" && hist.current.length) {
      hi.current = Math.max(0, hi.current - 1); setVal(hist.current[hi.current]); e.preventDefault();
    } else if (e.key === "ArrowDown") {
      hi.current = Math.min(hist.current.length, hi.current + 1); setVal(hist.current[hi.current] || ""); e.preventDefault();
    }
  };

  return (
    <div className="win">
      <div className="bar"><i className="d r" /><i className="d y" /><i className="d g" /><span>harshit@portfolio: ~</span></div>
      <div className="tout" ref={box} aria-live="polite">
        {lines.map((l, i) => <div key={i} className={l.c}>{l.t}</div>)}
      </div>
      <div className="tin">
        <span>$</span>
        <input value={val} onChange={(e) => setVal(e.target.value)} onKeyDown={onKey} autoComplete="off" autoCapitalize="off" spellCheck="false" aria-label="Terminal command" placeholder="type help and press Enter" />
      </div>
      <div className="tch">{CHIPS.map((c) => <button key={c} type="button" onClick={() => run(c)}>{c}</button>)}</div>
    </div>
  );
}
