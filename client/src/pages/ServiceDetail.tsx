import { Link, useRoute } from "wouter";
import { ArrowRight, ArrowUpRight, Check, ChevronLeft } from "lucide-react";
import { customerCategories, getServiceBySlug, getServicesByCategory } from "@/data/serviceCatalog";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const service = params ? getServiceBySlug(params.slug) : undefined;
  if (!service) return <div className="not-found-service"><h1>Service not found</h1><Link href="/services">Back to service directory</Link></div>;

  const category = customerCategories.find((item) => item.id === service.category)!;
  const related = getServicesByCategory(service.category).filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <div className="service-detail-page">
      <header className="detail-header"><div className="container detail-header-inner"><Link href="/services" className="detail-back"><ChevronLeft size={16} /> Service directory</Link><Link href={`/start-project?service=${service.slug}`} className="button button-primary">Make this your next move <ArrowUpRight size={16} /></Link></div></header>
      <main>
        <section className="detail-hero"><div className="container"><p className="section-kicker">{category.title} / {service.division}</p><h1>{service.name}</h1><p className="detail-summary">{service.summary}</p></div></section>
        <section className="detail-body section-pad"><div className="container detail-body-grid"><article><p className="section-kicker">The value of this move</p><h2>Make this capability<br /><span>useful to your next stage.</span></h2><p className="detail-copy">{service.detail}</p><p className="detail-copy">The goal is not more technology for its own sake. It is a clearer experience for the people you serve, a stronger operating rhythm for your team, and a system you can keep improving after launch.</p><Link href={`/start-project?service=${service.slug}`} className="button button-dark">Discuss your requirements <ArrowUpRight size={17} /></Link></article><aside className="detail-aside"><div className="detail-aside-label">What you get from the first conversation</div><div className="detail-note"><Check size={16} /><span>A plain-language view of what this could unlock</span></div><div className="detail-note"><Check size={16} /><span>Clear separation between the must-have and the nice-to-have</span></div><div className="detail-note"><Check size={16} /><span>A practical first scope shaped around your organization</span></div><div className="detail-note"><Check size={16} /><span>Technical decisions explained when they become useful</span></div><div className="detail-division"><small>Internal division</small><strong>{service.division}</strong></div></aside></div></section>
        <section className="related-services section-pad"><div className="container"><div className="section-heading-row"><div><p className="section-kicker">Explore more</p><h2>Related ways<br /><span>we can help.</span></h2></div><Link href="/services" className="text-link">Back to all services <ArrowRight size={16} /></Link></div><div className="related-grid">{related.map((item) => <Link href={`/services/${item.slug}`} className="related-card" key={item.slug}><small>{category.title}</small><strong>{item.name}</strong><span>{item.summary}</span><ArrowUpRight size={16} /></Link>)}</div></div></section>
        <section className="detail-cta"><div className="container"><p className="section-kicker">A better starting point</p><h2>Tell us what you want<br /><span>to make possible.</span></h2><Link href={`/start-project?service=${service.slug}`} className="button button-primary">Start with this service <ArrowUpRight size={17} /></Link></div></section>
      </main>
    </div>
  );
}
