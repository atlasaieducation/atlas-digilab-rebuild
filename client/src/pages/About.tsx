import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Building2, Compass, Globe2, Handshake, Layers3, Menu, ShieldCheck, Sparkles, Target, Users, Workflow, X } from "lucide-react";

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><span>A</span><span>D</span></span>;
}

const beliefs = [
  { number: "01", title: "Start with the outcome.", text: "Technology is only useful when it improves something real: a decision, a workflow, a service, or the experience of the people who depend on it." },
  { number: "02", title: "Make complexity useful.", text: "The best work can hold technical depth without making the process feel opaque. We translate hard questions into clear choices." },
  { number: "03", title: "Build for the people who operate it.", text: "Adoption, handover, documentation, and day-to-day reality matter as much as the first launch. A system is only strong when people can use it." },
  { number: "04", title: "Leave a stronger system behind.", text: "Every engagement should create more capability, clearer ownership, and a better foundation for the next decision." },
];

const audiences = [
  { icon: Building2, title: "Growing organizations", text: "A stronger digital presence, better internal tools, or a practical path beyond workarounds." },
  { icon: Users, title: "Institutions & universities", text: "Digital services and information systems that are accessible, accountable, and built for real stakeholders." },
  { icon: Globe2, title: "Public-interest teams", text: "Technology that helps programs, services, and ideas reach more people with less operational friction." },
  { icon: ShieldCheck, title: "Enterprise leaders", text: "A partner for modernization, AI adoption, governance, and systems that need to work at meaningful scale." },
];

const waysOfWorking = [
  { number: "01", title: "Listen closely", text: "We begin with your context, constraints, people, and the outcome that would make the work worthwhile.", icon: Compass },
  { number: "02", title: "Shape the right move", text: "We turn a broad ambition into a clear first scope, useful priorities, and a path your team can understand.", icon: Target },
  { number: "03", title: "Build with care", text: "We design, develop, integrate, test, and communicate in a way that keeps the work grounded.", icon: Layers3 },
  { number: "04", title: "Stay accountable", text: "We plan for handover, support, measurement, and the decisions that come after launch.", icon: Handshake },
];

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="about-page">
      <header className="site-header about-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Atlas DigiLab home" onClick={closeMenu}><Mark /><span className="brand-copy"><strong>DigiLab</strong></span></Link>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation"><Link href="/" onClick={closeMenu}>Home</Link><Link href="/about" onClick={closeMenu}>About</Link><Link href="/services" onClick={closeMenu}>Services</Link><Link href="/industries" onClick={closeMenu}>Industries</Link><Link href="/projects" onClick={closeMenu}>Work</Link><Link href="/portfolio" onClick={closeMenu}>Work</Link><Link href="/resources" onClick={closeMenu}>Insights</Link><Link href="/contact" onClick={closeMenu}>Contact</Link><Link href="/project" className="nav-cta" onClick={closeMenu}>Get in touch <span aria-hidden="true">↗</span></Link></nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>

      <main>
        <section className="about-hero">
          <div className="container about-hero-grid">
            <div className="about-hero-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> About Atlas DigiLab</p>
              <h1>Technology should make the work <em>clearer.</em></h1>
              <p className="about-hero-lede">Atlas DigiLab is a technology and institutional solutions practice for organizations that want to build with intention—not add more complexity for its own sake.</p>
              <div className="about-hero-actions"><Link href="/services" className="button button-primary">See what we build <ArrowUpRight size={17} /></Link><a href="#point-of-view" className="button button-quiet">Our point of view <ArrowRight size={17} /></a></div>
            </div>
            <div className="about-position-card"><div className="about-position-top"><span>AD / POSITION</span><span>01—04</span></div><div className="about-monogram">AD</div><div className="about-position-bottom"><strong>Technology, AI & digital systems for the real world.</strong><span>Dhaka · working internationally</span></div></div>
          </div>
          <div className="container about-hero-rail"><span>PRECISE</span><span>CAPABLE</span><span>HUMANE</span><span>BUILT FOR MOMENTUM</span></div>
        </section>

        <section className="about-manifesto section-pad" id="point-of-view">
          <div className="container about-manifesto-grid">
            <p className="section-kicker">01 / The point of view</p>
            <div><h2>Build the right thing.<br /><span>For the real world.</span></h2><p className="about-lead">Organizations do not need technology theatre. They need better ways to work, serve people, make decisions, and move into what comes next.</p><p className="about-body-copy">We bring together strategy, design, engineering, AI, infrastructure, and advisory thinking to help make that possible. Sometimes the right answer is a new system. Sometimes it is a clearer website, a better workflow, a safer decision, or a smaller first step.</p><Link href="/contact" className="text-link">Start with the question behind the brief <ArrowUpRight size={16} /></Link></div>
          </div>
        </section>

        <section className="about-beliefs section-pad">
          <div className="container"><div className="section-heading-row"><div><p className="section-kicker">02 / What guides the work</p><h2>Good technology has<br /><span>a point of view.</span></h2></div><p className="section-summary">These principles shape how we scope, communicate, build, and decide what not to build.</p></div><div className="about-beliefs-grid">{beliefs.map((belief) => <article className="about-belief" key={belief.number}><span>{belief.number}</span><h3>{belief.title}</h3><p>{belief.text}</p></article>)}</div></div>
        </section>

        <section className="about-audiences section-pad">
          <div className="container about-audiences-grid"><div className="about-audiences-intro"><p className="section-kicker">03 / Who we work with</p><h2>Different contexts.<br /><span>Same standard.</span></h2><p>We work with people who are trying to make something more useful, more durable, or more possible. The context changes. The care does not.</p><Link href="/services" className="button button-primary">Explore our capabilities <ArrowUpRight size={17} /></Link></div><div className="about-audience-list">{audiences.map(({ icon: Icon, title, text }) => <article className="about-audience" key={title}><div className="about-audience-icon"><Icon size={19} /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div>
        </section>

        <section className="about-model section-pad">
          <div className="container"><div className="section-heading-row"><div><p className="section-kicker">04 / How we work</p><h2>Clear thinking.<br /><span>Careful delivery.</span></h2></div><p className="section-summary">A structured process gives ambitious work room to become useful without losing its human center.</p></div><div className="about-model-grid">{waysOfWorking.map(({ number, title, text, icon: Icon }) => <article className="about-model-card" key={number}><div className="about-model-card-top"><span>{number}</span><Icon size={21} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></div>
        </section>

        <section className="about-capability-band section-pad">
          <div className="container about-capability-grid"><div><p className="section-kicker">05 / One partner, many starting points</p><h2>From digital foundations<br /><span>to intelligent systems.</span></h2></div><div className="about-capability-copy"><p>Our public service categories make it easy to find a starting point. Behind them is a connected practice across websites, software, AI, infrastructure, security, advisory, and long-term support.</p><div className="about-capability-tags"><span><Sparkles size={14} /> AI & automation</span><span><Workflow size={14} /> Digital operations</span><span><ShieldCheck size={14} /> Trust & governance</span><span><Globe2 size={14} /> Digital presence</span></div><Link href="/services" className="text-link">Browse all 62 capabilities <ArrowUpRight size={16} /></Link></div></div>
        </section>

        <section className="about-cta"><div className="container"><p className="section-kicker">06 / Start with the real question</p><h2>Tell us what you are<br /><span>trying to make possible.</span></h2><p>Bring us the ambition, the friction, or the unfinished thought. We will help shape the next useful move.</p><Link href="/start-project" className="button button-primary">Start a conversation <ArrowUpRight size={17} /></Link></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Link href="/" className="brand"><Mark /><span className="brand-copy"><strong>DigiLab</strong></span></Link></div><div className="footer-column"><span className="footer-label">Explore</span><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/solutions">Solutions</Link><Link href="/industries">Industries</Link><Link href="/projects">Work</Link><Link href="/portfolio">Work</Link><Link href="/resources">Insights</Link><Link href="/contact">Contact</Link></div><div className="footer-column"><span className="footer-label">Start here</span><Link href="/start-project">Start a project</Link><Link href="/contact">Contact</Link></div><div className="footer-column footer-location"><span className="footer-label">Based in</span><span>Dhaka, Bangladesh</span><span>Working internationally</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Atlas DigiLab. All rights reserved.</span><span>Technology, AI & digital solutions</span></div></footer>
    </div>
  );
}
