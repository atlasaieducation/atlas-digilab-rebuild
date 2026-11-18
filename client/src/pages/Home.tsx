import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronDown,
  CloudCog,
  Code2,
  Database,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  LockKeyhole,
  Menu,
  Network,
  Play,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const services = [
  { icon: BrainCircuit, title: "AI & Machine Learning", text: "Practical intelligence that turns complex information into confident action." },
  { icon: CloudCog, title: "Cloud & DevOps", text: "Resilient cloud foundations, faster releases, and infrastructure built to scale." },
  { icon: Code2, title: "Custom Software", text: "Purpose-built products and platforms designed around how your team works." },
  { icon: Database, title: "Data & Analytics", text: "Clearer signals from your data, with systems that make insight accessible." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Security and privacy engineered into every layer of your digital operation." },
  { icon: Network, title: "Digital Transformation", text: "A connected path from strategy and process to measurable digital momentum." },
];

const projects = [
  { image: "/images/digilab/work-health.png", tag: "CONCEPT / HEALTHCARE / ARTIFICIAL INTELLIGENCE", title: "AI-Powered Health Platform", text: "Making sensitive health information more useful, accessible, and actionable." },
  { image: "/images/digilab/work-payments.png", tag: "CONCEPT / FINTECH / SOFTWARE ENGINEERING", title: "Next-Generation Payment Infrastructure", text: "Secure, seamless infrastructure for the future of financial services." },
  { image: "/images/digilab/work-learning.png", tag: "CONCEPT / EDUCATION / DIGITAL PRODUCTS", title: "Global Learning Platform", text: "Helping institutions deliver better learning experiences at every scale." },
  { image: "/images/digilab/work-enterprise.png", tag: "CONCEPT / ENTERPRISE / DATA & ANALYTICS", title: "Enterprise Intelligence Platform", text: "Connected intelligence that gives teams the clarity to make better decisions." },
];

const industries = [
  { icon: HeartPulse, label: "Healthcare" }, { icon: Landmark, label: "Finance" }, { icon: GraduationCap, label: "Education" }, { icon: Landmark, label: "Government" },
  { icon: Sparkles, label: "Retail" }, { icon: Factory, label: "Manufacturing" }, { icon: Network, label: "Telecom" }, { icon: BarChart3, label: "And more" },
];

function Mark() {
  return <span className="atlas-mark" aria-hidden="true"><span>A</span><span>D</span></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <div className="atlas-site">
      <header className="atlas-header">
        <div className="atlas-container header-inner">
          <a href="/" className="atlas-brand" onClick={close} aria-label="Atlas DigiLab home"><Mark /><span><strong>DigiLab</strong><small>SOFTWARE · AI · SYSTEMS</small></span></a>
          <nav className={menuOpen ? "atlas-nav open" : "atlas-nav"} aria-label="Primary navigation">
            <a href="/" onClick={close}>Home</a>
            <a href="/services" onClick={close}>Services <ChevronDown size={13} /></a>
            <a href="/industries" onClick={close}>Industries</a>
            <a href="/solutions" onClick={close}>Solutions <ChevronDown size={13} /></a>
            <a href="/portfolio" onClick={close}>Work</a>
            <a href="/about" onClick={close}>About</a>
            <a href="/resources" onClick={close}>Insights</a>
            <a className="atlas-nav-cta" href="/contact" onClick={close}>Get in touch <ArrowUpRight size={15} /></a>
          </nav>
          <button className="atlas-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="atlas-hero">
          <div className="hero-gridline" />
          <div className="atlas-container hero-layout">
            <div className="hero-content">
              <div className="atlas-eyebrow"><span className="eyebrow-dot" /> GLOBAL TECHNOLOGY & ENGINEERING</div>
              <h1>Technology should<br /><span>make the work clearer.</span></h1>
              <p className="hero-copy">We design, engineer and deliver intelligent digital systems that help ambitious organizations solve meaningful problems and move forward with confidence.</p>
              <div className="hero-actions"><a className="atlas-button primary" href="/services">Explore what we build <ArrowUpRight size={17} /></a><a className="atlas-button ghost" href="#story">Our point of view <ArrowRight size={16} /></a></div>
              <div className="hero-metrics"><div><strong>AI</strong><span>Intelligent systems</span></div><div><strong>DX</strong><span>Digital transformation</span></div><div><strong>∞</strong><span>Long-term thinking</span></div></div>
            </div>
            <div className="hero-earth-wrap"><div className="earth-frame hero-system-art"><div className="earth-meta"><span>DIGILAB / SYSTEMS THINKING</span><span>DESIGN · ENGINEER · DELIVER</span></div><img src="/images/atlas/concept-business.webp" alt="Abstract enterprise technology system visualization" /><div className="earth-orbit orbit-a" /><div className="earth-orbit orbit-b" /><div className="earth-caption"><span>01</span><strong>Complexity, made useful.</strong><small>PEOPLE · PROCESS · TECHNOLOGY</small></div><div className="earth-coordinates">SYSTEM<br />/ 01.01</div></div></div>
          </div>
          <div className="atlas-container hero-services"><span>AI & MACHINE LEARNING</span><span>CLOUD & DEVOPS</span><span>SOFTWARE ENGINEERING</span><span>DATA & ANALYTICS</span><span>DIGITAL TRANSFORMATION</span></div>
        </section>

        <section className="trusted-strip"><div className="atlas-container"><span className="trusted-label">TRUSTED TECHNOLOGY<br />PARTNER FOR</span><div className="logo-row"><span>nexa<span>®</span></span><span>vertex</span><span>lumio</span><span>Northstar</span><span>ORBITAL</span><span>solvex</span></div></div></section>

        <section className="atlas-section intro-section" id="story"><div className="atlas-container intro-grid"><div className="section-number">01 <span>ABOUT DIGILAB</span></div><div><h2>More than a technology provider.<br /><em>A partner in progress.</em></h2><p className="large-copy">DigiLab is a strategic technology and engineering partner for ambitious organizations. We bring clarity to complex work, combining thoughtful design, dependable engineering, and intelligent systems that are built for the real world.</p><a className="text-arrow" href="/about">Our point of view <ArrowRight size={16} /></a></div></div></section>

        <section className="atlas-section services-section"><div className="atlas-container"><div className="section-heading"><div><div className="section-number">02 <span>CAPABILITIES</span></div><h2>End-to-end solutions<br /><em>for a digital world.</em></h2></div><p>One accountable partner for the systems, products, and experiences that move your organization forward.</p></div><div className="service-grid">{services.map(({ icon: Icon, title, text }, i) => <a className="service-card" href={`/services#${title.toLowerCase().replaceAll(" ", "-")}`} key={title}><div className="service-top"><span>0{i + 1}</span><Icon size={25} /></div><h3>{title === "Custom Software" ? "Custom Software Engineering" : title}</h3><p>{text}</p><span className="service-arrow"><ArrowUpRight size={18} /></span></a>)}</div><a className="browse-link" href="/services">Explore our capabilities <ArrowRight size={16} /></a></div></section>

        <section className="selected-work-section"><div className="atlas-container"><div className="selected-work-heading"><div><div className="selected-work-eyebrow">SELECTED WORK <span>— 03</span></div><h2>Trusted by innovators<br /><em>worldwide.</em></h2></div><p>Explore how we combine strategy, engineering and intelligent technology to solve complex challenges.</p></div><div className="editorial-projects">{projects.map((project, index) => <a className={`editorial-project project-${index + 1}`} href="/portfolio" key={project.title}><div className="editorial-image"><img src={project.image} alt="" /><span className="editorial-number">0{index + 1}</span><span className="editorial-arrow"><ArrowUpRight size={19} /></span></div><div className="editorial-copy"><span className="editorial-category">{project.tag}</span><h3>{project.title}</h3><p>{project.text}</p><span className="case-study-link">View case study <ArrowRight size={15} /></span></div></a>)}</div><div className="selected-work-cta"><span>Have an ambitious project in mind?</span><a href="/portfolio">Explore all projects <ArrowRight size={16} /></a></div></div></section>

        <section className="atlas-section industries-section"><div className="atlas-container"><div className="section-heading"><div><div className="section-number">04 <span>INDUSTRY EXPERTISE</span></div><h2>Built for the way<br /><em>your world works.</em></h2></div><p>Technology is only powerful when it understands the context around it. Our teams build for real operational needs.</p></div><div className="industry-grid">{industries.map(({ icon: Icon, label }) => <a href="/industries" className="industry-pill" key={label}><Icon size={20} /><span>{label === "And more" ? "Enterprise" : label}</span><ArrowUpRight size={16} /></a>)}</div></div></section>

        <section className="atlas-section stats-section"><div className="atlas-container why-layout"><div><div className="section-number blue">05 <span>WHY DIGILAB</span></div><h2>Make complexity<br /><em>useful.</em></h2><p>We bring technical depth and strategic thinking together to help ambitious organizations move forward with confidence.</p><a className="atlas-button dark" href="/about">Our approach <ArrowUpRight size={17} /></a></div><div className="why-principles"><div><strong>01</strong><span>Engineering Excellence</span></div><div><strong>02</strong><span>Strategic Thinking</span></div><div><strong>03</strong><span>Human-Centered Design</span></div><div><strong>04</strong><span>Intelligent Automation</span></div><div><strong>05</strong><span>Enterprise-Grade Security</span></div><div><strong>06</strong><span>Long-Term Technology Partnerships</span></div></div></div></section>

        <section className="cta-section"><div className="atlas-container cta-inner"><div className="cta-glow" /><div className="section-number light-blue">06 <span>YOUR NEXT MOVE</span></div><h2>Ready to build something<br /><em>meaningful?</em></h2><p>Let's turn your next ambitious idea into something that works in the real world.</p><a className="atlas-button primary" href="/contact">Start a conversation <ArrowUpRight size={17} /></a></div></section>
      </main>

      <footer className="atlas-footer"><div className="atlas-container footer-grid"><div className="footer-brand"><a href="/" className="atlas-brand"><Mark /><span><strong>DigiLab</strong><small>SOFTWARE · AI · SYSTEMS</small></span></a><p>Building intelligent technology for meaningful progress.</p></div><div><span className="footer-label">Explore</span><a href="/services">Services</a><a href="/industries">Industries</a><a href="/solutions">Solutions</a><a href="/portfolio">Work</a><a href="/about">About</a></div><div><span className="footer-label">Connect</span><a href="/start-project">Start a project</a><a href="/contact">Contact</a><a href="/resources">Insights</a><a href="mailto:hello@atlasai.institute">hello@atlasai.institute</a></div><div className="footer-note"><span className="footer-label">Global technology partner</span><p>Dhaka · Bangladesh<br />Working internationally</p><div className="socials"><span>Li</span><span>𝕏</span><span>Ig</span></div></div></div><div className="atlas-container footer-bottom"><span>© {new Date().getFullYear()} DigiLab. All rights reserved.</span><span>Privacy · Terms · Accessibility</span></div></footer>
    </div>
  );
}
