import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronLeft, CircleCheck, Mail, Menu, ShieldCheck, X } from "lucide-react";
import { getServiceBySlug } from "@/data/serviceCatalog";
import type { InquirySubmission } from "@shared/inquiryContract";

const OFFICIAL_CONTACT_EMAIL = "advisory@atlasai.institute";

const serviceOptions = ["Websites & Online Presence", "Software & Applications", "AI & Automation", "Digital Infrastructure", "Security & Technology Advisory", "Support & Maintenance", "Research & Institutional Advisory", "Not sure yet"];
const organizationTypes = ["Small business", "Startup or entrepreneur", "Corporation", "Government institution", "Bank or financial institution", "NGO or INGO", "University or research institution", "School or education organization", "International organization", "Other"];
const steps = ["About you", "What you need", "Project details", "Project scope", "Review & submit"];

type FormState = {
  serviceSlug?: string;
  fullName: string;
  professionalEmail: string;
  phone: string;
  country: string;
  organizationName: string;
  organizationType: string;
  selectedServices: string[];
  projectTitle: string;
  requirements: string;
  problem: string;
  projectType: "New project" | "Existing system";
  deliverables: string;
  budgetRange: string;
  timeline: string;
  privacyConsent: boolean;
};

const initialState: FormState = { fullName: "", professionalEmail: "", phone: "", country: "", organizationName: "", organizationType: "", selectedServices: [], projectTitle: "", requirements: "", problem: "", projectType: "New project", deliverables: "", budgetRange: "", timeline: "", privacyConsent: false };

function Mark() { return <span className="brand-mark" aria-hidden="true"><span>A</span><span>D</span></span>; }

export default function StartProject() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "error" | "success">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const selectedService = useMemo(() => form.serviceSlug ? getServiceBySlug(form.serviceSlug) : undefined, [form.serviceSlug]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceSlug = params.get("service") || undefined;
    const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
    const categoryToLabel = { websites: "Websites & Online Presence", software: "Software & Applications", ai: "AI & Automation", infrastructure: "Digital Infrastructure", advisory: "Security & Technology Advisory", support: "Support & Maintenance" } as const;
    const goalToLabel: Record<string, string> = { website: categoryToLabel.websites, software: categoryToLabel.software, automation: categoryToLabel.ai, ai: categoryToLabel.ai, modernize: categoryToLabel.infrastructure, support: categoryToLabel.support, other: "Not sure yet" };
    const preselected = service ? service.category === "advisory" && service.division.startsWith("AI Governance") ? "Research & Institutional Advisory" : categoryToLabel[service.category] : goalToLabel[params.get("goal") || ""];
    if (service || preselected) setForm((current) => ({ ...current, serviceSlug: service?.slug, selectedServices: current.selectedServices.length ? current.selectedServices : [preselected].filter(Boolean) }));
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((current) => ({ ...current, [key]: value }));
  const toggleService = (service: string) => update("selectedServices", form.selectedServices.includes(service) ? form.selectedServices.filter((item) => item !== service) : [...form.selectedServices, service]);

  const validateStep = () => {
    if (step === 0) return form.fullName.trim().length >= 2 && form.professionalEmail.includes("@") && form.country.trim().length >= 2 && form.organizationType.length > 0;
    if (step === 1) return form.selectedServices.length > 0;
    if (step === 2) return form.requirements.trim().length >= 20 && form.problem.trim().length >= 20 && form.deliverables.trim().length >= 10;
    if (step === 3) return form.timeline.length > 0;
    return form.privacyConsent;
  };
  const next = () => { if (validateStep()) { setStep((current) => Math.min(current + 1, steps.length - 1)); setSubmitMessage(""); } else setSubmitMessage("Please complete the required fields before continuing."); };
  const back = () => { setStep((current) => Math.max(current - 1, 0)); setSubmitMessage(""); };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateStep()) { setSubmitMessage("Please accept the privacy consent before submitting."); return; }
    setSubmitState("sending"); setSubmitMessage("");
    const payload: InquirySubmission = { kind: "project", serviceSlug: form.serviceSlug, fullName: form.fullName, professionalEmail: form.professionalEmail, phone: form.phone || undefined, country: form.country, organizationName: form.organizationName || undefined, organizationType: form.organizationType, selectedServices: form.selectedServices, projectTitle: form.projectTitle || undefined, requirements: form.requirements, problem: form.problem, projectType: form.projectType, deliverables: form.deliverables, budgetRange: form.budgetRange || undefined, timeline: form.timeline, privacyConsent: true };
    try {
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.ok) throw new Error(data?.message || "Your inquiry could not be delivered. It was not sent. Please email advisory@atlasai.institute instead.");
      setSubmitState("success");
    } catch (error) {
      setSubmitState("error"); const reason = error instanceof Error ? error.message : "Your inquiry could not be delivered."; setSubmitMessage(reason.includes("advisory@atlasai.institute") ? reason : `${reason} If it was not received, please email ${OFFICIAL_CONTACT_EMAIL}.`);
    }
  };

  if (submitState === "success") return <SuccessScreen reference="" />;

  return (
    <div className="inquiry-page">
      <header className="inquiry-header"><div className="container inquiry-header-inner"><Link href="/" className="brand" aria-label="Atlas DigiLab home"><Mark /><span className="brand-copy"><strong>DigiLab</strong></span></Link><nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation"><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link><Link href="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link><Link href="/industries" onClick={() => setMenuOpen(false)}>Industries</Link><Link href="/projects" onClick={() => setMenuOpen(false)}>Work</Link><Link href="/portfolio" onClick={() => setMenuOpen(false)}>Work</Link><Link href="/resources" onClick={() => setMenuOpen(false)}>Insights</Link><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link><Link href="/project" className="nav-cta" onClick={() => setMenuOpen(false)}>Get in touch <span aria-hidden="true">↗</span></Link></nav><button className="menu-toggle inquiry-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div></header>
      <main>
        <section className="inquiry-hero"><div className="container inquiry-hero-inner"><Link href="/contact" className="inquiry-back"><ChevronLeft size={16} /> Contact options</Link><p className="section-kicker">Project inquiry / 01—05</p><h1>Let’s understand<br /><span>what you want to build.</span></h1><p>Share as much or as little as you know. This first step helps us understand the right starting point.</p></div></section>
        <section className="inquiry-form-section section-pad"><div className="container inquiry-form-layout"><aside className="inquiry-progress"><p className="section-kicker">Your project brief</p><div className="progress-steps">{steps.map((label, index) => <button className={step === index ? "progress-step active" : step > index ? "progress-step complete" : "progress-step"} onClick={() => index <= step && setStep(index)} key={label} disabled={index > step}><span>{step > index ? <Check size={13} /> : `0${index + 1}`}</span>{label}</button>)}</div><div className="inquiry-trust"><ShieldCheck size={18} /><p>Your information stays within this inquiry flow. Optional budget and phone details can be left blank.</p></div></aside><form className="inquiry-form" onSubmit={handleSubmit} noValidate>
          {step === 0 && <StepAbout form={form} update={update} />}
          {step === 1 && <StepNeeds form={form} toggleService={toggleService} selectedService={selectedService?.name} />}
          {step === 2 && <StepDetails form={form} update={update} />}
          {step === 3 && <StepScope form={form} update={update} />}
          {step === 4 && <StepReview form={form} selectedService={selectedService?.name} update={update} />}
          {submitState === "error" && <div className="inquiry-error" role="alert"><Mail size={17} /><span>{submitMessage}</span></div>}
          {submitMessage && submitState !== "error" && <p className="inline-validation" role="alert">{submitMessage}</p>}
          <div className="inquiry-actions">{step > 0 ? <button type="button" className="button button-quiet-dark" onClick={back}><ArrowLeft size={16} /> Back</button> : <span />}{step < steps.length - 1 ? <button type="button" className="button button-dark" onClick={next}>Continue <ArrowRight size={17} /></button> : <button type="submit" className="button button-dark" disabled={submitState === "sending"}>{submitState === "sending" ? "Sending inquiry…" : "Submit project inquiry"} <ArrowUpRight size={17} /></button>}</div>
        </form></div></section>
      </main>
      <footer className="inquiry-footer"><div className="container"><span>Questions before you start?</span><a href={`mailto:${OFFICIAL_CONTACT_EMAIL}`}>{OFFICIAL_CONTACT_EMAIL}</a></div></footer>
    </div>
  );
}

function Field({ label, required, children, hint }: { label: string; required?: boolean; children: ReactNode; hint?: string }) { return <label className="inquiry-field"><span>{label}{required && <b> *</b>}</span>{children}{hint && <small>{hint}</small>}</label>; }
function StepAbout({ form, update }: { form: FormState; update: <K extends keyof FormState>(key: K, value: FormState[K]) => void }) { return <div className="form-step"><p className="section-kicker">Step 1 / About you</p><h2>Who are we speaking with?</h2><p className="step-intro">A little context helps us make the first conversation useful.</p><div className="form-fields two-col"><Field label="Full name" required><input required value={form.fullName} onChange={(event) => update("fullName", event.target.value)} placeholder="Your name" /></Field><Field label="Professional email" required><input required type="email" value={form.professionalEmail} onChange={(event) => update("professionalEmail", event.target.value)} placeholder="you@organization.com" /></Field><Field label="Phone number" hint="Optional"><input value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="Include country code if useful" /></Field><Field label="Country" required><input required value={form.country} onChange={(event) => update("country", event.target.value)} placeholder="Where are you based?" /></Field><Field label="Organization name" hint="Optional"><input value={form.organizationName} onChange={(event) => update("organizationName", event.target.value)} placeholder="Your organization" /></Field><Field label="Organization type" required><select required value={form.organizationType} onChange={(event) => update("organizationType", event.target.value)}><option value="">Select one</option>{organizationTypes.map((item) => <option key={item}>{item}</option>)}</select></Field></div></div>; }
function StepNeeds({ form, toggleService, selectedService }: { form: FormState; toggleService: (service: string) => void; selectedService?: string }) { return <div className="form-step"><p className="section-kicker">Step 2 / What do you need?</p><h2>Which areas should we explore?</h2><p className="step-intro">Choose all that feel relevant. You can change your mind later.</p>{selectedService && <div className="selected-service-banner"><CircleCheck size={17} /><span>Selected from service page: <strong>{selectedService}</strong></span></div>}<div className="service-checkbox-grid">{serviceOptions.map((service) => <label className={form.selectedServices.includes(service) ? "service-checkbox selected" : "service-checkbox"} key={service}><input type="checkbox" checked={form.selectedServices.includes(service)} onChange={() => toggleService(service)} /><span className="custom-check"><Check size={14} /></span><strong>{service}</strong></label>)}</div></div>; }
function StepDetails({ form, update }: { form: FormState; update: <K extends keyof FormState>(key: K, value: FormState[K]) => void }) { return <div className="form-step"><p className="section-kicker">Step 3 / Project details</p><h2>Help us see the challenge.</h2><p className="step-intro">Plain English is perfect. You do not need a technical specification to begin.</p><div className="form-fields"><Field label="Project title" hint="Optional"><input value={form.projectTitle} onChange={(event) => update("projectTitle", event.target.value)} placeholder="A short name for the project" /></Field><Field label="Describe your requirements" required><textarea required rows={4} value={form.requirements} onChange={(event) => update("requirements", event.target.value)} placeholder="What would you like to build or improve?" /></Field><Field label="What problem are you trying to solve?" required><textarea required rows={4} value={form.problem} onChange={(event) => update("problem", event.target.value)} placeholder="What is difficult, slow, unclear, or not working today?" /></Field><Field label="Is this a new project or an existing system?" required><div className="radio-row">{["New project", "Existing system"].map((item) => <label key={item}><input type="radio" checked={form.projectType === item} onChange={() => update("projectType", item as FormState["projectType"])} />{item}</label>)}</div></Field><Field label="Expected deliverables" required><textarea required rows={3} value={form.deliverables} onChange={(event) => update("deliverables", event.target.value)} placeholder="For example: a website, dashboard, mobile app, report, or ongoing support" /></Field></div></div>; }
function StepScope({ form, update }: { form: FormState; update: <K extends keyof FormState>(key: K, value: FormState[K]) => void }) { return <div className="form-step"><p className="section-kicker">Step 4 / Project scope</p><h2>What shape does the work have?</h2><p className="step-intro">These details are optional signals, not a commitment. They help us propose a realistic path.</p><div className="form-fields"><Field label="Budget range" hint="Optional"><select value={form.budgetRange} onChange={(event) => update("budgetRange", event.target.value)}><option value="">Not decided yet</option>{["Under $500", "$500–$2,000", "$2,000–$5,000", "$5,000–$15,000", "$15,000–$50,000", "$50,000+"].map((item) => <option key={item}>{item}</option>)}</select></Field><Field label="Timeline" required><select required value={form.timeline} onChange={(event) => update("timeline", event.target.value)}><option value="">Select a timeline</option>{["As soon as possible", "Within 1 month", "Within 3 months", "Within 6 months", "Flexible"].map((item) => <option key={item}>{item}</option>)}</select></Field></div></div>; }
function StepReview({ form, selectedService, update }: { form: FormState; selectedService?: string; update: <K extends keyof FormState>(key: K, value: FormState[K]) => void }) { return <div className="form-step"><p className="section-kicker">Step 5 / Review & submit</p><h2>Check the starting brief.</h2><p className="step-intro">Review your information before sending. Optional fields can remain empty.</p><div className="review-summary"><ReviewRow label="About" value={`${form.fullName} · ${form.professionalEmail} · ${form.country}`} /><ReviewRow label="Organization" value={form.organizationName || form.organizationType} /><ReviewRow label="Services" value={[selectedService, ...form.selectedServices].filter((item, index, list) => item && list.indexOf(item) === index).join(", ")} /><ReviewRow label="Project" value={form.projectTitle || form.projectType} /><ReviewRow label="Timeline" value={form.timeline} /><ReviewRow label="Budget" value={form.budgetRange || "Not decided yet"} /></div><label className="privacy-check"><input type="checkbox" checked={form.privacyConsent} onChange={(event) => update("privacyConsent", event.target.checked)} /><span>I consent to Atlas DigiLab using the information above to review this inquiry and contact me about next steps.</span></label><p className="privacy-note">When submitted, your information is validated by the server and sent to the Atlas DigiLab team as an internal inquiry alert. It is not stored in a website database and will be used to review your request and contact you about next steps.</p></div>; }
function ReviewRow({ label, value }: { label: string; value: string }) { return <div className="review-row"><small>{label}</small><strong>{value || "—"}</strong></div>; }
function SuccessScreen({ reference }: { reference: string }) { return <div className="success-screen"><div className="success-mark"><CircleCheck size={28} /></div><p className="section-kicker">Inquiry received</p><h1>Thank You for Contacting Atlas DigiLab.</h1><p>Your project inquiry has been received. Our team will review the information and contact you regarding the next steps.</p>{reference && <div className="reference">Inquiry reference: <strong>{reference}</strong></div>}<Link href="/" className="button button-dark">Back to homepage <ArrowUpRight size={17} /></Link></div>; }
