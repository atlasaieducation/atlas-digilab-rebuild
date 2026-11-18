import { useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CloudCog,
  Code2,
  Globe2,
  LifeBuoy,
  Menu,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { customerCategories, getServicesByCategory, serviceCatalog, type CustomerCategoryId } from "@/data/serviceCatalog";

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><span>D</span><span>L</span></span>;
}

const iconMap = { globe: Globe2, code: Code2, brain: BrainCircuit, cloud: CloudCog, shield: ShieldCheck, lifeBuoy: LifeBuoy };

export default function ServiceDirectory() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CustomerCategoryId | null>(null);
  const normalizedQuery = query.trim().toLowerCase();

  const filteredServices = useMemo(() => {
    if (!normalizedQuery) return serviceCatalog;
    return serviceCatalog.filter((service) => `${service.name} ${service.summary} ${service.division} ${service.category}`.toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery]);

  const visibleServices = normalizedQuery
    ? filteredServices
    : activeCategory
      ? filteredServices.filter((service) => service.category === activeCategory)
      : [];
  const activeCategoryTitle = customerCategories.find((category) => category.id === activeCategory)?.title;

  return (
    <div className="service-directory-page service-directory-v2">
      <header className="site-header directory-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="DigiLab home" onClick={() => setMenuOpen(false)}><Mark /><span className="brand-copy"><strong>DigiLab</strong></span></Link>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link><Link href="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link><Link href="/industries" onClick={() => setMenuOpen(false)}>Industries</Link><Link href="/portfolio" onClick={() => setMenuOpen(false)}>Work</Link><Link href="/resources" onClick={() => setMenuOpen(false)}>Insights</Link><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link><Link href="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Get in touch <span aria-hidden="true">↗</span></Link>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>

      <main>
        <section className="services-v2-hero">
          <div className="container services-v2-hero-inner">
            <div><p className="services-v2-eyebrow">DIGILAB / CAPABILITIES</p><h1>Technology That Moves<br /><em>Your Business Forward.</em></h1><p>Clear, practical technology services for organizations ready to work smarter, serve better, and build what comes next.</p><a className="button button-primary" href="#service-categories">Explore services <ArrowDown /></a></div>
            <div className="services-v2-hero-aside"><strong>62</strong><span>capabilities<br />across 6 categories</span></div>
          </div>
        </section>

        <section className="services-v2-main" id="service-categories">
          <div className="container">
            <div className="services-v2-section-head"><div><p className="services-v2-kicker">01 / Choose a starting point</p><h2>What are you<br /><em>trying to move forward?</em></h2></div><p>Select a category to see the services behind it. You do not need to know the technical name—start with the outcome.</p></div>
            <div className="services-v2-category-grid">
              {customerCategories.map((category) => {
                const Icon = iconMap[category.icon as keyof typeof iconMap];
                const selected = activeCategory === category.id && !normalizedQuery;
                return <button type="button" className={selected ? "services-v2-category selected" : "services-v2-category"} onClick={() => { setActiveCategory(selected ? null : category.id); setQuery(""); }} key={category.id} aria-pressed={selected}><span className="services-v2-category-top"><span>{category.number}</span><Icon size={21} /></span><strong>{category.title}</strong><small>{category.description}</small><span className="services-v2-category-bottom"><b>{getServicesByCategory(category.id).length} services</b><ArrowUpRight size={16} /></span></button>;
              })}
            </div>

            <div className="services-v2-explorer" id="service-explorer">
              <div className="services-v2-explorer-head"><div><p className="services-v2-kicker">02 / Explore the catalog</p><h2>{normalizedQuery ? "Search results" : activeCategoryTitle || "Find a service"}</h2></div><label className="services-v2-search"><Search size={18} /><span className="sr-only">Search services</span><input value={query} onChange={(event) => { setQuery(event.target.value); setActiveCategory(null); }} placeholder="Search by service, outcome, or category" /></label></div>
              {visibleServices.length > 0 ? <div className="services-v2-service-list">{visibleServices.map((service) => <Link href={`/services/${service.slug}`} className="services-v2-service" key={service.slug}><span><small>{customerCategories.find((category) => category.id === service.category)?.title}</small><strong>{service.name}</strong><p>{service.summary}</p></span><ArrowRight size={18} /></Link>)}</div> : <div className="services-v2-empty"><span className="services-v2-empty-mark">↗</span><strong>{normalizedQuery ? "No services matched that search." : "Select a category to see its services."}</strong><p>{normalizedQuery ? "Try a broader term such as AI, website, security, cloud, or support." : "Each category opens a focused list of practical capabilities with a direct link to details."}</p></div>}
              <p className="services-v2-count">{normalizedQuery ? `Showing ${visibleServices.length} matching services` : activeCategory ? `${visibleServices.length} services in ${activeCategoryTitle}` : `All ${serviceCatalog.length} services are available across the six categories`}</p>
            </div>
          </div>
        </section>

        <section className="services-v2-consultation"><div className="container services-v2-consultation-inner"><div><p className="services-v2-kicker">03 / Need a clearer starting point?</p><h2>Not sure what<br /><em>you need?</em></h2></div><div><p>Tell us what you are trying to achieve. We will help identify the right technology path without asking you to translate your challenge into technical language first.</p><Link href="/start-project?goal=other" className="button button-dark">Project consultation <ArrowUpRight size={17} /></Link></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-main"><div className="footer-brand"><Link href="/" className="brand"><Mark /><span className="brand-copy"><strong>DigiLab</strong></span></Link></div><div className="footer-column"><span className="footer-label">Explore</span><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/solutions">Solutions</Link><Link href="/industries">Industries</Link><Link href="/portfolio">Work</Link><Link href="/resources">Insights</Link><Link href="/contact">Contact</Link></div><div className="footer-column"><span className="footer-label">Start here</span><Link href="/start-project?goal=other">Start a project</Link><Link href="/contact">Contact</Link></div><div className="footer-column footer-location"><span className="footer-label">Based in</span><span>Dhaka, Bangladesh</span><span>Working internationally</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} DigiLab. All rights reserved.</span><span>Technology, AI & digital solutions</span></div></footer>
    </div>
  );
}

function ArrowDown() {
  return <ArrowRight size={17} />;
}
