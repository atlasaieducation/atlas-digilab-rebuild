import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Building2, CircleHelp, Mail, Menu, MessageCircle, Send, ShieldCheck, X } from "lucide-react";

type ContactStatus = "idle" | "sending" | "sent" | "error";

function Mark() { return <span className="brand-mark" aria-hidden="true"><span>A</span><span>D</span></span>; }

const pathways = [
  { title: "Start a Project", description: "Have a website, software, AI, infrastructure, or support need in mind? Share the details and we will help shape the right starting point.", cta: "Start your project brief", href: "/project", icon: ArrowUpRight },
  { title: "Institutional & Enterprise Inquiry", description: "For governments, banks, large organizations, NGOs, universities, and international institutions with a more complex requirement.", cta: "Make an enterprise inquiry", href: "/enterprise-inquiry", icon: Building2 },
  { title: "General Consultation", description: "Not sure where to begin? Ask a question, request a conversation, or tell us what you are trying to make possible.", cta: "Send a consultation note", href: "#send-an-inquiry", icon: MessageCircle },
];

function ContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [message, setMessage] = useState("");

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      kind: "consultation",
      fullName: String(data.get("fullName") || "").trim(),
      professionalEmail: String(data.get("professionalEmail") || "").trim(),
      organizationName: String(data.get("organizationName") || "").trim() || undefined,
      message: String(data.get("message") || "").trim(),
      privacyConsent: data.get("privacyConsent") === "on",
    };

    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "Your message could not be sent. Please email advisory@atlasai.institute.");
      }
      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      const reason = error instanceof Error ? error.message : "Your message could not be sent."; setMessage(reason.includes("advisory@atlasai.institute") ? reason : `${reason} Please email advisory@atlasai.institute if the issue persists.`);
    }
  }

  return <div className="contact-form-card">
    <div className="contact-form-heading"><span>DIRECT INQUIRY</span><Send size={18} aria-hidden="true" /></div>
    {status === "sent" ? <div className="contact-form-success" role="status">
      <span className="contact-success-mark"><ShieldCheck size={25} /></span>
      <h3>Your note is with our team.</h3>
      <p>The Atlas DigiLab team has been notified. We do not store submissions in a website database or send an automatic confirmation email.</p>
      <button className="text-link" type="button" onClick={() => { setStatus("idle"); setMessage(""); }}>Send another note <ArrowRight size={15} /></button>
    </div> : <form onSubmit={submitInquiry}>
      <div className="contact-form-fields">
        <label className="contact-field">Your name <span aria-hidden="true">*</span><input name="fullName" autoComplete="name" required minLength={2} maxLength={160} /></label>
        <label className="contact-field">Work email <span aria-hidden="true">*</span><input name="professionalEmail" type="email" autoComplete="email" required maxLength={320} /></label>
        <label className="contact-field contact-field-wide">Organization <small>Optional</small><input name="organizationName" autoComplete="organization" maxLength={200} /></label>
        <label className="contact-field contact-field-wide">What would you like to discuss? <span aria-hidden="true">*</span><textarea name="message" required minLength={20} maxLength={5000} rows={5} placeholder="Share the goal, question, or challenge you have in mind." /></label>
      </div>
      <label className="contact-consent"><input type="checkbox" name="privacyConsent" required /><span>I agree that Atlas DigiLab may use these details to respond to my inquiry. I understand this form forwards my message to the Atlas DigiLab team and does not save it in a website database.</span></label>
      {status === "error" && <p className="contact-form-error" role="alert">{message}</p>}
      <button className="button button-primary contact-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending inquiry…" : "Send inquiry"} <ArrowUpRight size={16} /></button>
      <p className="contact-form-disclosure">This sends an internal inquiry alert to the Atlas DigiLab project owner. It is not a customer email or a stored inquiry record. Prefer email? <a href="mailto:advisory@atlasai.institute">advisory@atlasai.institute</a>.</p>
    </form>}
  </div>;
}

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="contact-page">
    <header className="inquiry-header"><div className="container inquiry-header-inner"><Link href="/" className="brand" aria-label="Atlas DigiLab home"><Mark /><span className="brand-copy"><strong>DigiLab</strong></span></Link><nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation"><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link><Link href="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link><Link href="/industries" onClick={() => setMenuOpen(false)}>Industries</Link><Link href="/projects" onClick={() => setMenuOpen(false)}>Work</Link><Link href="/portfolio" onClick={() => setMenuOpen(false)}>Work</Link><Link href="/resources" onClick={() => setMenuOpen(false)}>Insights</Link><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link><Link href="/project" className="nav-cta" onClick={() => setMenuOpen(false)}>Get in touch <span aria-hidden="true">↗</span></Link></nav><button className="menu-toggle inquiry-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div></header>
    <main>
      <section className="contact-hero"><div className="container contact-hero-inner"><p className="eyebrow"><span className="eyebrow-line" /> Contact Atlas DigiLab</p><h1>Let’s build<br /><em>something that matters.</em></h1><p>Tell us about your organization, your goals, or the technology challenge you want to solve. Our team will review your requirements and explore the right solution with you.</p></div></section>
      <section className="pathways-section section-pad"><div className="container"><div className="section-heading-row"><div><p className="section-kicker">01 / Choose a path</p><h2>Start with the<br /><span>conversation that fits.</span></h2></div><p className="section-summary">A good first step should feel straightforward. Choose the pathway that best matches the work in front of you.</p></div><div className="pathway-grid">{pathways.map((pathway, index) => { const Icon = pathway.icon; return <article className={index === 1 ? "pathway-card featured" : "pathway-card"} key={pathway.title}><div className="pathway-top"><span>0{index + 1}</span><Icon size={22} /></div><h3>{pathway.title}</h3><p>{pathway.description}</p><a href={pathway.href} className="card-link">{pathway.cta} <ArrowUpRight size={15} /></a></article>; })}</div></div></section>
      <section className="contact-form-section section-pad" id="send-an-inquiry"><div className="container contact-form-layout"><div className="contact-form-intro"><p className="section-kicker">02 / Send a direct inquiry</p><h2>A useful first note<br /><span>is enough to begin.</span></h2><p>Share a question or a goal. We will use your note to start a practical conversation about what comes next.</p><div className="contact-facts"><span><Mail size={16} /> <a href="mailto:advisory@atlasai.institute">advisory@atlasai.institute</a></span><span><Building2 size={16} /> Dhaka, Bangladesh · working internationally</span></div></div><ContactForm /></div></section>
      <section className="contact-guidance section-pad" id="general-consultation"><div className="container guidance-grid"><div><p className="section-kicker">03 / A useful first step</p><h2>You do not need<br /><span>a perfect brief.</span></h2></div><div><p>Start with the outcome you want, the friction you are facing, or the question you are trying to answer. We can help translate that into a sensible technology conversation.</p><div className="guidance-list"><span><CircleHelp size={17} /> Not sure which service fits? <Link href="/services">Browse the service directory <ArrowRight size={14} /></Link></span><span><Mail size={17} /> Prefer email? <a href="mailto:advisory@atlasai.institute">advisory@atlasai.institute</a></span></div></div></div></section>
      <section className="contact-bottom-cta"><div className="container"><p className="section-kicker">04 / Tell us what you need</p><h2>One technology partner.<br /><span>From digital foundations to enterprise innovation.</span></h2><Link href="/project" className="button button-primary">Start a project <ArrowUpRight size={17} /></Link></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Link href="/" className="brand"><Mark /><span className="brand-copy"><strong>DigiLab</strong></span></Link></div><div className="footer-column"><span className="footer-label">Explore</span><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/solutions">Solutions</Link><Link href="/industries">Industries</Link><Link href="/projects">Work</Link><Link href="/portfolio">Work</Link><Link href="/resources">Insights</Link><Link href="/contact">Contact</Link></div><div className="footer-column"><span className="footer-label">Start here</span><Link href="/project">Project inquiry</Link><Link href="/enterprise-inquiry">Enterprise inquiry</Link></div><div className="footer-column footer-location"><span className="footer-label">Email</span><a href="mailto:advisory@atlasai.institute">advisory@atlasai.institute</a><span>Bangladesh · working internationally</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Atlas DigiLab. All rights reserved.</span><span>Technology, AI & digital solutions</span></div></footer>
  </div>;
}
