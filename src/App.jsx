import Icons, { Ic } from "./components/Icons";
import CodeWindow from "./components/CodeWindow";
import { useTheme, useReveal } from "./hooks";
import { projects, inProgress, stats, jobs, skills, awards } from "./data";

const NAV = [["Home", "#home", true], ["Projects", "#projects"], ["About", "#about"], ["Experience", "#experience", true], ["Contact", "#contact"]];
const Chip = ({ icon, children }) => <span><Ic id={icon} cls="ic" />{children}</span>;
const Tags = ({ items }) => <div className="tags">{items.map((t) => <span key={t}>{t}</span>)}</div>;

function Card({ p, flag }) {
  return (
    <article className="card">
      <div className="art">
        <img src={p.img} alt={`${p.name} screenshot`} loading="lazy" />
        {flag && <span className="ip">In progress</span>}
      </div>
      <div className="bd">
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
        <Tags items={p.tags} />
        {p.url
          ? <a className="ln2" href={p.url} target="_blank" rel="noopener noreferrer">Live site <Ic id="ex" /></a>
          : <span className="ln2" style={{ color: "var(--mu)" }}>{p.note}</span>}
      </div>
    </article>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  useReveal();

  return (
    <>
      <Icons />
      <div className="herobg" />
      <nav>
        <div className="wrap">
          <a className="logo" href="#home" aria-label="Home">H<b>A</b></a>
          <div className="l">
            {NAV.map(([label, href, hide]) => <a key={href} className={hide ? "h" : undefined} href={href}>{label}</a>)}
          </div>
          <button className="tg" onClick={toggleTheme} aria-label="Toggle light and dark theme" aria-pressed={theme === "dark"}>
            <span className="sun"><Ic id="sn" /></span>
            <span className="moon"><Ic id="mn" /></span>
          </button>
        </div>
      </nav>

      <main>
        <div className="wrap hero" id="home">
          <div>
            <span className="pill">OPEN TO OPPORTUNITIES</span>
            <h1>Hi, I’m <em>Harshit.</em><br />I build thoughtful digital experiences.</h1>
            <p className="sub">Final-year ECE student at NIT Raipur • Full-stack development • AI &amp; robotics</p>
            <div className="cta">
              <a className="btn2 p" href="#projects">Explore projects <Ic id="ar" /></a>
              <a className="btn2" href="#contact">Get in touch <Ic id="ml" /></a>
            </div>
            <div className="tech">
              <Chip icon="r">React</Chip><Chip icon="nd">Node.js</Chip><Chip icon="py">Python</Chip><Chip icon="ai">AI / LLMs</Chip><Chip icon="bt">Robotics</Chip>
            </div>
          </div>
          <div className="stage">
            <div className="rings"><i /><i /><i /></div>
            {[["a", "r"], ["b", "nd"], ["c", "py"], ["d", "bt"]].map(([c, id]) => <span key={c} className={`fi ${c}`}><Ic id={id} cls="ic" /></span>)}
            <CodeWindow />
          </div>
        </div>

        <section id="projects"><div className="wrap rv">
          <div className="eb">Featured work</div><h2>Some things I’ve built</h2>
          <p className="lead">Full-stack web apps and a worker attendance platform built during my internship.</p>
          <div className="cards three">{projects.map((p) => <Card key={p.name} p={p} />)}</div>
          <div className="eb" style={{ marginTop: 48 }}>Currently working on</div>
          <div className="cards three">{inProgress.map((p) => <Card key={p.name} p={p} flag />)}</div>
        </div></section>

        <section id="about"><div className="wrap about rv">
          <div>
            <div className="eb">About me</div><h2>Curious. Consistent. Always learning.</h2>
            <p className="lead">I’m a final-year ECE student at NIT Raipur who likes building where software meets hardware, from React dashboards and REST APIs to JavaFX interfaces and face-verification modules. I’ve solved 400+ DSA problems, coordinate the ROBOTiX Club, and am working on code optimization for a swarm drone simulation alongside web development.</p>
          </div>
          <div className="stats">{stats.map(([n, l]) => <div className="stat" key={l}><b>{n}</b><span>{l}</span></div>)}</div>
        </div></section>

        <section id="experience"><div className="wrap rv">
          <div className="eb">Experience</div><h2>Where I’ve worked, led and studied</h2>
          <div className="tl">
            {jobs.map((j) => (
              <div className="job" key={j.title}>
                <div className="m">{j.meta}</div><h3>{j.title}</h3>
                <ul>{j.points.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div></section>

        <section><div className="wrap rv">
          <div className="eb">Skills</div><h2>Tools I work with</h2>
          <div className="sk">{skills.map(([g, items]) => <div key={g}><h3>{g}</h3><Tags items={items} /></div>)}</div>
        </div></section>

        <section><div className="wrap rv">
          <div className="eb">Recognition</div><h2>Awards &amp; achievements</h2>
          <div className="aw">{awards.map(([t, d]) => <div key={t}><b>{t}</b><span>{d}</span></div>)}</div>
        </div></section>
      </main>

      <div className="forest" id="contact">
        <div className="wrap">
          <div><h2>Let’s build something amazing.</h2><p>I’m open to internships, collaborations and interesting opportunities.</p></div>
          <div className="cta" style={{ margin: 0 }}>
            <a className="btn2 p" href="mailto:agrawalharshit2003@gmail.com">Get in touch <Ic id="ml" /></a>
            <a className="btn2" href="https://github.com/HarshitAgrawal2222" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn2" href="https://www.linkedin.com/in/harshit-agrawal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn2" href="tel:+918103696310">+91 81036 96310</a>
          </div>
        </div>
      </div>
      <footer>© 2026 Harshit Agrawal · Building for a better tomorrow</footer>
    </>
  );
}
