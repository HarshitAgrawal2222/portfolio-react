import { useEffect, useRef, useState } from "react";
import { Ic } from "./Icons";

// [className, text] segments; null className = plain punctuation
const LINES = [
  [["k", "const"], [null, " "], ["v", "harshit"], [null, " = {"]],
  [[null, "  "], ["a", "role"], [null, ": "], ["s", '"Full-Stack Developer"'], [null, ","]],
  [[null, "  "], ["a", "college"], [null, ": "], ["s", '"NIT Raipur, ECE 2027"'], [null, ","]],
  [[null, "  "], ["a", "stack"], [null, ": ["], ["s", '"React"'], [null, ", "], ["s", '"Node"'], [null, ", "], ["s", '"Python"'], [null, "],"]],
  [[null, "  "], ["a", "building"], [null, ": ["], ["s", '"web apps"'], [null, ", "], ["s", '"swarm drones"'], [null, "],"]],
  [[null, "  "], ["a", "solved"], [null, ": "], ["n", "400"], [null, ", "], ["c", "// DSA problems"]],
  [[null, "  "], ["a", "openToWork"], [null, ": "], ["b", "true"], [null, ","]],
  [[null, "};"]],
  [[null, " "]],
  [["v", "harshit"], [null, "."], ["f", "hello"], [null, "();"]],
];

const STEPS = [
  ["$ node harshit.js", "m", 0],
  ["Hello, world! I’m Harshit.", "", 500],
  ["✓ Compiled successfully in 0.4s", "g", 1100],
  ["★ You found a hidden feature: open to internships & collabs.", "h", 1700],
];

export default function CodeWindow() {
  const [out, setOut] = useState([]);
  const [ran, setRan] = useState(false);
  const timers = useRef([]);
  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => clear, []);

  const toggle = () => {
    clear();
    if (ran) { setRan(false); setOut([]); return; }
    setRan(true);
    setOut([]);
    STEPS.forEach(([t, c, d]) => timers.current.push(setTimeout(() => setOut((o) => [...o, { t, c }]), d)));
    timers.current.push(setTimeout(() => setOut((o) => [...o, { acts: true }]), 2200));
  };

  return (
    <div className="ide" role="img" aria-label="Code editor showing a JavaScript object that describes Harshit">
      <div className="bar">
        <i className="d r" /><i className="d y" /><i className="d g" />
        <span>harshit.js</span>
        <button className="run" type="button" onClick={toggle}>{ran ? "✕ Clear" : "▶ Run"}</button>
      </div>
      <pre className="code">
        {LINES.map((segs, i) => (
          <div className="ln" key={i} style={{ "--n": segs.reduce((n, [, t]) => n + t.length, 0), "--i": i }}>
            {segs.map(([cls, t], j) => (cls ? <span className={cls} key={j}>{t}</span> : t))}
            {i === LINES.length - 1 && <span className="caret" />}
          </div>
        ))}
      </pre>
      <div className="out" aria-live="polite">
        {out.length === 0 && <div className="m">$ press ▶ Run to execute harshit.js</div>}
        {out.map((o, i) => o.acts ? (
          <div className="acts" key={i}>
            <a className="btn2 p" href="#projects">Explore My Projects <Ic id="ar" /></a>
            <a className="btn2" href="#contact">Let’s Connect <Ic id="ex" /></a>
          </div>
        ) : <div className={o.c} key={i}>{o.t}</div>)}
      </div>
    </div>
  );
}
