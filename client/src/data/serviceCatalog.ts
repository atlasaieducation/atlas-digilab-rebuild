export type CustomerCategoryId =
  | "websites"
  | "software"
  | "ai"
  | "infrastructure"
  | "advisory"
  | "support";

export type ServiceRecord = {
  slug: string;
  name: string;
  division: string;
  category: CustomerCategoryId;
  summary: string;
  detail: string;
};

export const customerCategories = [
  {
    id: "websites" as const,
    number: "01",
    title: "Websites & Online Presence",
    description: "Turn attention into trust—and trust into the next conversation, application, or sale.",
    examples: ["Websites that win trust", "Portals people can navigate", "Campaigns built to convert", "Commerce that moves"],
    icon: "globe",
  },
  {
    id: "software" as const,
    number: "02",
    title: "Software & Applications",
    description: "Replace workarounds with software that gives your team leverage and your customers a better experience.",
    examples: ["Custom tools with leverage", "Connected operations", "Web & mobile products", "Dashboards that clarify"],
    icon: "code",
  },
  {
    id: "ai" as const,
    number: "03",
    title: "AI & Automation",
    description: "Turn high-volume work into measurable efficiency—reducing cycle time, expanding team capacity, and making enterprise operations more responsive.",
    examples: ["AI assistants for teams", "High-volume workflow automation", "Document processing at scale", "Governed AI adoption"],
    icon: "brain",
  },
  {
    id: "infrastructure" as const,
    number: "04",
    title: "Digital Infrastructure",
    description: "Make the systems behind your organization work as one, so the next stage of growth has somewhere to go.",
    examples: ["Foundations built to scale", "Systems that connect", "Digital service platforms", "Modernization without chaos"],
    icon: "cloud",
  },
  {
    id: "advisory" as const,
    number: "05",
    title: "Security & Technology Advisory",
    description: "Move faster with decisions you can defend—in security, privacy, AI governance, and technology strategy.",
    examples: ["Security from the start", "Privacy people can trust", "AI governance that works", "Strategy with a path"],
    icon: "shield",
  },
  {
    id: "support" as const,
    number: "06",
    title: "Support & Maintenance",
    description: "Protect the value of what you built with a partner who keeps it reliable, secure, and ready for the next move.",
    examples: ["Products that stay healthy", "Support when it matters", "Systems watched closely", "Performance that holds"],
    icon: "lifeBuoy",
  },
];

// Internal divisions are intentionally preserved here. The public experience maps these 7 divisions into 6 plain-language categories.
export const serviceCatalog: ServiceRecord[] = [
  // Web & Digital Development (9)
  { slug: "business-corporate-websites", name: "Business and corporate websites", division: "Web & Digital Development", category: "websites", summary: "A professional website that explains what you do and makes it easy to take the next step.", detail: "We plan, design, build, and launch responsive websites for businesses and growing organizations." },
  { slug: "institutional-organizational-websites", name: "Institutional and organizational websites", division: "Web & Digital Development", category: "websites", summary: "A clear, accessible online home for an institution, program, or public-facing organization.", detail: "We structure information around the audiences, services, and governance needs of your institution." },
  { slug: "landing-campaign-websites", name: "Landing pages and campaign websites", division: "Web & Digital Development", category: "websites", summary: "Focused pages that help a campaign, initiative, or product make an impression.", detail: "We create fast, focused digital experiences for launches, campaigns, applications, and public communication." },
  { slug: "ecommerce-platforms", name: "E-commerce platforms", division: "Web & Digital Development", category: "websites", summary: "An online storefront that makes it simple for customers to browse, decide, and buy.", detail: "We help businesses plan and build digital commerce experiences around their products and operations." },
  { slug: "web-applications", name: "Web applications", division: "Web & Digital Development", category: "websites", summary: "Browser-based tools that let people complete real tasks online.", detail: "We turn workflows into usable web applications, from simple tools to complex portals." },
  { slug: "content-management-systems", name: "Content management systems", division: "Web & Digital Development", category: "websites", summary: "A practical way for your team to update and publish content without calling a developer.", detail: "We set up content structures, editorial workflows, and publishing interfaces that fit your organization." },
  { slug: "custom-dashboards-portals", name: "Custom dashboards and portals", division: "Web & Digital Development", category: "websites", summary: "A single place for your team, members, customers, or partners to access information.", detail: "We design role-aware dashboards and portals around the data and actions people need most." },
  { slug: "website-redesign-optimization", name: "Website redesign and optimization", division: "Web & Digital Development", category: "websites", summary: "Improve an existing website so it is clearer, faster, and more useful.", detail: "We review content, structure, experience, and performance before redesigning the parts that matter." },
  { slug: "domain-hosting-deployment", name: "Domain, hosting, and deployment assistance", division: "Web & Digital Development", category: "websites", summary: "Help getting your website online and keeping its foundations in order.", detail: "We can support setup, deployment, hosting coordination, and the practical details around launch." },

  // Software & Application Development (9)
  { slug: "custom-software-development", name: "Custom software development", division: "Software & Application Development", category: "software", summary: "Software built around the way your organization actually works.", detail: "We scope and build tailored software when off-the-shelf tools cannot meet the need." },
  { slug: "enterprise-applications", name: "Enterprise applications", division: "Software & Application Development", category: "software", summary: "Core applications that help larger teams coordinate important work.", detail: "We help design dependable applications with the roles, workflows, data, and controls enterprise teams require." },
  { slug: "saas-platform-development", name: "SaaS platform development", division: "Software & Application Development", category: "software", summary: "A digital product that can serve multiple customers or organizations over time.", detail: "We support product thinking, platform architecture, account models, and iterative development." },
  { slug: "crm-erp-systems", name: "CRM and ERP systems", division: "Software & Application Development", category: "software", summary: "Connected systems for relationships, operations, finance, and everyday management.", detail: "We help plan, customize, integrate, or build systems that give teams a more consistent view of their work." },
  { slug: "workflow-automation-software", name: "Workflow automation software", division: "Software & Application Development", category: "software", summary: "Reduce manual handoffs and keep routine work moving.", detail: "We map the current process, identify useful automation, and build the right human-in-the-loop workflow." },
  { slug: "internal-management-systems", name: "Internal management systems", division: "Software & Application Development", category: "software", summary: "Tools that help staff manage requests, records, tasks, and decisions.", detail: "We create internal systems that make information easier to find and responsibilities easier to manage." },
  { slug: "api-development-integration", name: "API development and integration", division: "Software & Application Development", category: "software", summary: "Help your different tools share information instead of working in silos.", detail: "We design and connect APIs so platforms, databases, and services can exchange the right data reliably." },
  { slug: "mobile-application-development", name: "Mobile application development", division: "Software & Application Development", category: "software", summary: "Mobile experiences for customers, staff, members, or field teams.", detail: "We scope mobile apps around real user needs, device contexts, and the systems they must connect to." },
  { slug: "database-architecture-management", name: "Database architecture and management", division: "Software & Application Development", category: "software", summary: "Organize the information your systems depend on so it stays useful as you grow.", detail: "We design data models, access patterns, and maintenance practices suited to the application." },

  // Artificial Intelligence & Intelligent Systems (9)
  { slug: "custom-ai-applications", name: "Custom AI-powered applications", division: "Artificial Intelligence & Intelligent Systems", category: "ai", summary: "AI features designed around a specific task, audience, or organizational need.", detail: "We help move from a promising use case to a usable application with appropriate controls and evaluation." },
  { slug: "ai-chatbot-development", name: "AI chatbot development", division: "Artificial Intelligence & Intelligent Systems", category: "ai", summary: "A conversational helper that answers questions or guides people through a service.", detail: "We design chatbot experiences around trusted information, clear boundaries, and useful handoffs." },
  { slug: "institutional-ai-assistants", name: "Institutional AI assistants", division: "Artificial Intelligence & Intelligent Systems", category: "ai", summary: "An AI assistant for staff, students, customers, or members using approved information.", detail: "We help shape assistants that reflect your organization’s knowledge, permissions, and operating context." },
  { slug: "rag-systems", name: "Retrieval-Augmented Generation systems", division: "Artificial Intelligence & Intelligent Systems", category: "ai", summary: "AI that can work from your documents and knowledge instead of guessing.", detail: "We connect language models to curated information sources so answers can be more relevant and grounded." },
  { slug: "ai-agent-development", name: "AI agent development", division: "Artificial Intelligence & Intelligent Systems", category: "ai", summary: "AI that can take defined steps across a workflow with appropriate oversight.", detail: "We explore agent patterns where multi-step assistance can save time without removing human accountability." },
  { slug: "machine-learning-solutions", name: "Machine learning solutions", division: "Artificial Intelligence & Intelligent Systems", category: "ai", summary: "Use patterns in your data to support forecasting, classification, or better decisions.", detail: "We assess whether machine learning is a fit and help translate a model into an operational workflow." },
  { slug: "document-intelligence", name: "Document intelligence and automation", division: "Artificial Intelligence & Intelligent Systems", category: "ai", summary: "Extract useful information from documents and reduce repetitive review work.", detail: "We design document workflows that combine extraction, review, validation, and structured outputs." },
  { slug: "ai-workflow-integration", name: "AI workflow integration", division: "Artificial Intelligence & Intelligent Systems", category: "ai", summary: "Put AI into the tools and processes your team already uses.", detail: "We connect AI capabilities to existing software and workflows with attention to reliability and control." },
  { slug: "ai-readiness-advisory", name: "AI readiness and implementation advisory", division: "Artificial Intelligence & Intelligent Systems", category: "ai", summary: "A practical starting point for understanding where AI can help and what it will take.", detail: "We help assess use cases, data, people, risk, and delivery options before implementation." },

  // Digital Infrastructure & Transformation (9)
  { slug: "institutional-digital-transformation", name: "Institutional digital transformation", division: "Digital Infrastructure & Transformation", category: "infrastructure", summary: "A clearer path from today’s ways of working to better digital operations.", detail: "We connect strategy, process, technology, and adoption into a transformation approach that fits the institution." },
  { slug: "digital-public-infrastructure", name: "Digital public infrastructure", division: "Digital Infrastructure & Transformation", category: "infrastructure", summary: "Foundations that help public services work across people, systems, and institutions.", detail: "We support the architecture and implementation thinking behind durable public digital services." },
  { slug: "cloud-infrastructure-architecture", name: "Cloud infrastructure architecture", division: "Digital Infrastructure & Transformation", category: "infrastructure", summary: "Plan where and how your systems should run as needs change.", detail: "We help shape cloud environments around reliability, cost, access, security, and operational reality." },
  { slug: "system-integration", name: "System integration", division: "Digital Infrastructure & Transformation", category: "infrastructure", summary: "Connect the systems your organization depends on.", detail: "We map information flows and implement integrations that reduce duplication and manual work." },
  { slug: "digital-service-platforms", name: "Digital service platforms", division: "Digital Infrastructure & Transformation", category: "infrastructure", summary: "A dependable digital front door for a service, program, or institution.", detail: "We help turn complex service journeys into accessible, structured platforms." },
  { slug: "data-infrastructure", name: "Data infrastructure", division: "Digital Infrastructure & Transformation", category: "infrastructure", summary: "The foundations that make organizational data easier to use and trust.", detail: "We support data structures, flows, access patterns, and operating practices for important information." },
  { slug: "enterprise-workflow-digitization", name: "Enterprise workflow digitization", division: "Digital Infrastructure & Transformation", category: "infrastructure", summary: "Move important paper or manual processes into usable digital workflows.", detail: "We study how work is done today and design digital journeys that people can adopt." },
  { slug: "legacy-system-modernization", name: "Legacy system modernization", division: "Digital Infrastructure & Transformation", category: "infrastructure", summary: "Improve older systems without losing the work and knowledge they contain.", detail: "We help plan incremental modernization, integration, replacement, or migration paths." },
  { slug: "technical-architecture-implementation", name: "Technical architecture and implementation", division: "Digital Infrastructure & Transformation", category: "infrastructure", summary: "Turn an agreed direction into a coherent, buildable technical plan.", detail: "We translate needs into architecture, delivery steps, interfaces, and implementation decisions." },

  // Cybersecurity, Privacy & Digital Trust (8)
  { slug: "security-architecture-advisory", name: "Security architecture advisory", division: "Cybersecurity, Privacy & Digital Trust", category: "advisory", summary: "Understand the security decisions that should shape your systems from the start.", detail: "We review architecture and operating assumptions to identify practical security improvements." },
  { slug: "privacy-by-design", name: "Privacy-by-design implementation", division: "Cybersecurity, Privacy & Digital Trust", category: "advisory", summary: "Build privacy considerations into products and services before problems appear.", detail: "We help teams identify personal data, access needs, retention questions, and user-facing choices." },
  { slug: "data-protection-frameworks", name: "Data protection frameworks", division: "Cybersecurity, Privacy & Digital Trust", category: "advisory", summary: "A clearer way to organize how sensitive information is handled.", detail: "We help document responsibilities, practices, controls, and improvement priorities." },
  { slug: "security-assessments", name: "Security assessments", division: "Cybersecurity, Privacy & Digital Trust", category: "advisory", summary: "A structured review of where a technology environment may need more attention.", detail: "We assess agreed areas and provide practical findings and next steps; this is not a claim of regulated certification." },
  { slug: "application-security-reviews", name: "Application security reviews", division: "Cybersecurity, Privacy & Digital Trust", category: "advisory", summary: "Review an application’s design and implementation with security in mind.", detail: "We look at agreed application areas, risks, and improvement opportunities without overstating audit scope." },
  { slug: "ai-security-risk-assessments", name: "AI security and risk assessments", division: "Cybersecurity, Privacy & Digital Trust", category: "advisory", summary: "Identify security and misuse questions before an AI system is widely deployed.", detail: "We help teams think through data, access, model behavior, misuse, and oversight risks." },
  { slug: "governance-compliance-readiness", name: "Governance and compliance readiness", division: "Cybersecurity, Privacy & Digital Trust", category: "advisory", summary: "Prepare your technology practices for clearer accountability and external expectations.", detail: "We help organize evidence, roles, policies, and improvement plans without claiming legal certification." },
  { slug: "audit-logging-accountability", name: "Audit logging and accountability systems", division: "Cybersecurity, Privacy & Digital Trust", category: "advisory", summary: "Make important actions easier to understand, review, and explain.", detail: "We design logging and accountability patterns that support responsible operations." },

  // AI Governance, Research & Institutional Advisory (9)
  { slug: "ai-governance-frameworks", name: "AI governance frameworks", division: "AI Governance, Research & Institutional Advisory", category: "advisory", summary: "A practical structure for making responsible AI decisions across an organization.", detail: "We help define principles, roles, review points, and operating practices for AI use." },
  { slug: "responsible-ai-policies", name: "Responsible AI policies", division: "AI Governance, Research & Institutional Advisory", category: "advisory", summary: "Clear guidance for teams that are adopting or developing AI.", detail: "We translate responsible technology principles into usable internal policy language." },
  { slug: "algorithmic-impact-assessments", name: "Algorithmic impact assessments", division: "AI Governance, Research & Institutional Advisory", category: "advisory", summary: "Think through how an automated decision may affect people and institutions.", detail: "We help examine purpose, data, stakeholders, risks, mitigations, and accountability." },
  { slug: "ai-regulatory-readiness", name: "AI regulatory readiness", division: "AI Governance, Research & Institutional Advisory", category: "advisory", summary: "Prepare for evolving expectations around how AI is developed and used.", detail: "We support readiness work through policy review, gap analysis, documentation, and planning." },
  { slug: "ai-ethics-accountability", name: "AI ethics and accountability", division: "AI Governance, Research & Institutional Advisory", category: "advisory", summary: "Keep responsibility and human impact visible as technology decisions move forward.", detail: "We facilitate structured thinking about fairness, explainability, participation, and oversight." },
  { slug: "institutional-ai-strategy", name: "Institutional AI strategy", division: "AI Governance, Research & Institutional Advisory", category: "advisory", summary: "A grounded plan for where AI fits in your organization and where it does not.", detail: "We connect ambition to use cases, capability, risk, resources, and a realistic delivery path." },
  { slug: "policy-research-analysis", name: "Policy research and analysis", division: "AI Governance, Research & Institutional Advisory", category: "advisory", summary: "Research support for technology, AI, data, and digital policy questions.", detail: "We provide structured analysis and synthesis for institutional and public-interest decisions." },
  { slug: "technology-procurement-advisory", name: "Technology procurement advisory", division: "AI Governance, Research & Institutional Advisory", category: "advisory", summary: "Make technology buying decisions with clearer requirements and evaluation criteria.", detail: "We help shape scopes, questions, evaluation approaches, and implementation considerations." },
  { slug: "digital-rights-data-governance", name: "Digital rights and data governance", division: "AI Governance, Research & Institutional Advisory", category: "advisory", summary: "Bring people, rights, and responsible data use into technology planning.", detail: "We help institutions examine data stewardship, participation, access, and accountability." },

  // Technical Support, Maintenance & Managed Services (9)
  { slug: "website-maintenance", name: "Website maintenance", division: "Technical Support, Maintenance & Managed Services", category: "support", summary: "Keep your website current, healthy, and ready for visitors.", detail: "We provide agreed maintenance for content, dependencies, performance, and small improvements." },
  { slug: "application-maintenance", name: "Application maintenance", division: "Technical Support, Maintenance & Managed Services", category: "support", summary: "Ongoing care for the applications your organization relies on.", detail: "We support fixes, updates, improvements, and operational continuity within an agreed scope." },
  { slug: "technical-support", name: "Technical support", division: "Technical Support, Maintenance & Managed Services", category: "support", summary: "A dependable place to turn when something needs attention.", detail: "We offer structured support arrangements for agreed products, systems, and teams." },
  { slug: "cloud-infrastructure-monitoring", name: "Cloud and infrastructure monitoring", division: "Technical Support, Maintenance & Managed Services", category: "support", summary: "Keep an eye on the systems behind your digital services.", detail: "We help monitor agreed infrastructure signals and identify issues before they become bigger interruptions." },
  { slug: "performance-optimization", name: "Performance optimization", division: "Technical Support, Maintenance & Managed Services", category: "support", summary: "Make digital experiences feel faster and more dependable.", detail: "We investigate bottlenecks and prioritize improvements across agreed application or website areas." },
  { slug: "security-updates", name: "Security updates", division: "Technical Support, Maintenance & Managed Services", category: "support", summary: "Keep dependencies and systems updated as part of responsible maintenance.", detail: "We support agreed update routines and communicate changes that may affect your product." },
  { slug: "system-administration", name: "System administration", division: "Technical Support, Maintenance & Managed Services", category: "support", summary: "Practical help with the day-to-day running of technology systems.", detail: "We can support agreed operational tasks, access, configuration, documentation, and handover." },
  { slug: "managed-digital-services", name: "Managed digital services", division: "Technical Support, Maintenance & Managed Services", category: "support", summary: "A coordinated support arrangement for the digital services your team depends on.", detail: "We combine agreed maintenance, monitoring, support, and improvement work into a clear service relationship." },
  { slug: "long-term-technology-partnerships", name: "Long-term technology partnerships", division: "Technical Support, Maintenance & Managed Services", category: "support", summary: "A technology partner that stays close as your needs evolve.", detail: "We work with teams over time across planning, delivery, maintenance, and next-step decisions." },
];

export function getServicesByCategory(category: CustomerCategoryId) {
  return serviceCatalog.filter((service) => service.category === category);
}

export function getServiceBySlug(slug: string) {
  return serviceCatalog.find((service) => service.slug === slug);
}
