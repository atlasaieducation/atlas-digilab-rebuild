import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, BrainCircuit, Building2, Menu, Network, ShieldCheck, Workflow, X } from "lucide-react";

function Mark() { return <span className="brand-mark" aria-hidden="true"><span>A</span><span>D</span></span>; }

const projects = [
  {
    number: "01",
    label: "DIGITAL SERVICES · ILLUSTRATIVE PROFILE",
    title: "A clearer front door to essential services",
    challenge: "People have to navigate fragmented information and unclear service pathways.",
    approach: "A structured service portal with accessible content, clear journeys, and an interface designed around real user needs.",
    tags: ["Service design", "Web platform", "Accessible content"],
    icon: Building2,
    visual: "portal",
  },
  {
    number: "02",
    label: "OPERATIONS · ILLUSTRATIVE PROFILE",
    title: "Fewer hand-offs across a busy workflow",
    challenge: "Teams spend time re-entering information and tracking work across disconnected tools.",
    approach: "Map the work first, then connect the right systems with transparent automation and a practical handover plan.",
    tags: ["Process mapping", "Integration", "Automation"],
    icon: Workflow,
    visual: "workflow",
  },
  {
    number: "03",
    label: "AI & KNOWLEDGE · ILLUSTRATIVE PROFILE",
    title: "Make trusted internal knowledge easier to use",
    challenge: "Useful guidance is spread across documents, teams, and outdated internal references.",
    approach: "A scoped knowledge assistant concept with source-aware answers, access boundaries, and human review built into adoption.",
    tags: ["AI readiness", "Knowledge systems", "Governance"],
    icon: BrainCircuit,
    visual: "knowledge",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "portal") return <div className="project-visual project-visual-portal" aria-hidden="true"><div className="visual-window-bar"><i /><i /><i /><span>PUBLIC SERVICE PORTAL</span></div><div className="portal-visual-body"><div className="portal-visual-nav" /><div className="portal-visual-title" /><div className="portal-visual-copy" /><div className="portal-visual-cards"><i /><i /><i /></div></div></div>;
  if (type === "workflow") return <div className="project-visual project-visual-workflow" aria-hidden="true"><div className="workflow-line"><span>REQUEST</span><i /><span>REVIEW</span><i /><span>DELIVERY</span></div><div className="workflow-panels"><div><b /><i /><i /><i /></div><div><b /><i /><i /></div><div><b /><i /><i /><i /><i /></div></div></div>;
  return <div className="project-visual project-visual-knowledge" aria-hidden="true"><div className="knowledge-orbit knowledge-orbit-one" /><div className="knowledge-orbit knowledge-orbit-two" /><div className="knowledge-core"><Network size={26} /><span>KNOWLEDGE</span></div><span className="knowledge-node knowledge-node-a"><ShieldCheck size={15} /></span><span className="knowledge-node knowledge-node-b"><BrainCircuit size={15} /></span><span className="knowledge-node knowledge-node-c"><Workflow size={15} /></span></div>;
}

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="projects-page">
    <header className="site-header projects-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="Atlas DigiLab home"><Mark /><span className="brand-copy"><strong>DigiLab</strong></span></Link><nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation"><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link><Link href="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link><Link href="/industries" onClick={() => setMenuOpen(false)}>Industries</Link><Link href="/projects" onClick={() => setMenuOpen(false)}>Work</Link><Link href="/portfolio" onClick={() => setMenuOpen(false)}>Work</Link><Link href="/resources" onClick={() => setMenuOpen(false)}>Insights</Link><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link><Link href="/project" className="nav-cta" onClick={() => setMenuOpen(false)}>Get in touch <span aria-hidden="true">↗</span></Link></nav><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div></header>
    <main>
      <section className="projects-hero"><div className="container projects-hero-grid"><div><p className="eyebrow"><span className="eyebrow-line" /> Projects / Selected patterns</p><h1>Start with a challenge.<br /><em>Shape the system around it.</em></h1><p className="projects-hero-copy">Every project starts with what people need to do, what stands in their way, and what a useful next step could look like.</p></div><div className="projects-hero-note"><span>FIELD NOTE / 01</span><strong>Useful technology<br />starts with context.</strong><small>LISTEN · DESIGN · BUILD · SUPPORT</small></div></div></section>
      <section className="projects-disclosure"><div className="container"><ShieldCheck size={18} /><p><strong>About these examples.</strong> No approved client names, completed-work assets, or verified outcomes were included with the supplied material. The project summaries and visuals below are illustrative engagement profiles—not claims about completed client work. We can replace them with approved case studies when you provide the material.</p></div></section>
      <section className="projects-list-section section-pad"><div className="container"><div className="section-heading-row"><div><p className="section-kicker">01 / Representative project profiles</p><h2>Different contexts.<br /><span>One grounded approach.</span></h2></div><p className="section-summary">A view of the questions, systems, and decisions that can shape a useful technology engagement.</p></div><div className="projects-list">{projects.map(({ number, label, title, challenge, approach, tags, icon: Icon, visual }) => <article className="project-case" key={number}><div className="project-case-art"><ProjectVisual type={visual} /></div><div className="project-case-content"><div className="project-case-kicker"><span>{number}</span><span>{label}</span><Icon size={19} aria-hidden="true" /></div><h3>{title}</h3><div className="project-case-copy"><div><small>THE CHALLENGE</small><p>{challenge}</p></div><div><small>A POSSIBLE APPROACH</small><p>{approach}</p></div></div><div className="project-case-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link href="/project" className="card-link">Discuss a similar challenge <ArrowUpRight size={15} /></Link></div></article>)}</div></div></section>
      <section className="projects-portfolio-bridge section-pad"><div className="container projects-bridge-grid"><div><p className="section-kicker">02 / Explore the wider practice</p><h2>Patterns in projects.<br /><span>Principles in the portfolio.</span></h2></div><div><p>The Portfolio page describes how our capabilities can come together across different organizational needs. The Services and Industries pages add the detail behind those patterns.</p><div className="projects-bridge-links"><Link href="/portfolio">Explore the portfolio <ArrowRight size={16} /></Link><Link href="/services">Browse services <ArrowRight size={16} /></Link><Link href="/industries">Explore industries <ArrowRight size={16} /></Link></div></div></div></section>
      <section className="projects-cta section-pad"><div className="container"><p className="section-kicker">03 / Your project</p><h2>Bring us the question<br /><span>behind the brief.</span></h2><p>Share your goal or the friction you want to remove. We will help shape a practical first conversation.</p><Link href="/project" className="button button-primary">Start a project inquiry <ArrowUpRight size={16} /></Link><Link href="/contact" className="projects-contact-link">Or send a general inquiry <ArrowRight size={15} /></Link></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Link href="/" className="brand"><Mark /><span className="brand-copy"><strong>DigiLab</strong></span></Link><p>Technology, AI, and digital solutions for organizations working to make a meaningful difference.</p></div><div className="footer-column"><span className="footer-label">Explore</span><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/solutions">Solutions</Link><Link href="/industries">Industries</Link><Link href="/projects">Work</Link><Link href="/portfolio">Work</Link><Link href="/resources">Insights</Link><Link href="/contact">Contact</Link></div><div className="footer-column"><span className="footer-label">Start here</span><Link href="/project">Project inquiry</Link><Link href="/enterprise-inquiry">Enterprise inquiry</Link></div><div className="footer-column footer-location"><span className="footer-label">Based in</span><span>Dhaka, Bangladesh</span><span>Working internationally</span><a className="footer-arrow" href="mailto:advisory@atlasai.institute">advisory@atlasai.institute <ArrowUpRight size={14} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Atlas DigiLab. All rights reserved.</span><span>Technology, AI & digital solutions</span></div></footer>
  </div>;
}
