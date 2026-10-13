import { skills, skillKeys } from "../data";

export default function SkillsJson() {
  return (
    <div className="win">
      <div className="bar"><i className="d r" /><i className="d y" /><i className="d g" /><span>skills.json</span></div>
      <pre className="src">
        <div className="cl">{"{"}</div>
        {skills.map(([, items], i) => (
          <div className="cl" key={i}>
            {"  "}<span className="a">"{skillKeys[i]}"</span>{": ["}
            {items.map((t, j) => <span key={t}>{j ? ", " : ""}<span className="s">"{t}"</span></span>)}
            {"]"}{i < skills.length - 1 ? "," : ""}
          </div>
        ))}
        <div className="cl">{"}"}</div>
      </pre>
    </div>
  );
}
