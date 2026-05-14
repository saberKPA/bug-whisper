export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: {
      services: "Services",
      industries: "Industries",
      about: "About",
      team: "Team",
      contact: "Contact",
    },
    hero: {
      eyebrow: "ETL · Data Infrastructure",
      title: "Turn information into advantage.",
      subtitle:
        "SABER transforms messy, scattered data into structured, real-time insight — so your team makes the right decisions, faster.",
      cta: "Talk to us",
      secondary: "See what we do",
    },
    services: {
      eyebrow: "What we do",
      title: "End-to-end data pipelines.",
      items: [
        {
          code: "01",
          title: "Extract",
          body: "Pull data from any source — databases, SaaS APIs, files, streams. We handle the messy parts.",
        },
        {
          code: "02",
          title: "Transform",
          body: "Clean, normalize, and enrich. Business rules become repeatable, testable code.",
        },
        {
          code: "03",
          title: "Load",
          body: "Deliver to warehouses, lakes, or apps. Real-time or batch — your call.",
        },
        {
          code: "04",
          title: "Observe",
          body: "Monitoring, alerts, and lineage so you trust every number on every dashboard.",
        },
      ],
    },
    industries: {
      eyebrow: "Industries",
      title: "Built for teams that run on data.",
      items: [
        { name: "Fintech", body: "Reconciliation, risk, and reporting at the speed of regulation." },
        { name: "Retail", body: "Unify POS, e-commerce, and inventory into one truth." },
        { name: "Healthcare", body: "HIPAA-aware pipelines for clinical and operational data." },
        { name: "Logistics", body: "Track shipments, fleets, and SLAs in real time." },
        { name: "SaaS", body: "Product analytics and revenue ops without the duct tape." },
        { name: "Manufacturing", body: "From sensor to insight — IoT data that drives action." },
      ],
    },
    testimonials: {
      eyebrow: "Trusted by",
      title: "Teams that ship with SABER.",
      quotes: [
        {
          quote:
            "SABER cut our data engineering backlog in half. We finally trust our dashboards.",
          author: "Head of Data",
          company: "Series B Fintech",
        },
        {
          quote:
            "Replaced six brittle scripts with one pipeline. Onboarding new sources takes hours, not weeks.",
          author: "VP Engineering",
          company: "Retail Group",
        },
        {
          quote:
            "The observability alone paid for the engagement. We catch issues before customers do.",
          author: "CTO",
          company: "Logistics Platform",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "We believe good decisions start with good data.",
      body: "SABER was founded to close the gap between raw information and business advantage. We build the infrastructure that turns data chaos into a reliable, real-time view of your company — so leaders stop guessing and start operating with clarity.",
    },
    team: {
      eyebrow: "Team",
      title: "Engineers, operators, and data nerds.",
      members: [
        { name: "Founder Name", role: "CEO & Co-Founder", bio: "10+ years building data platforms." },
        { name: "Founder Name", role: "CTO & Co-Founder", bio: "Ex-staff engineer, distributed systems." },
        { name: "Team Member", role: "Head of Engineering", bio: "Loves clean schemas and clean code." },
        { name: "Team Member", role: "Data Architect", bio: "Modeling complex domains since forever." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Ready to see your data clearly?",
      body: "Tell us about your stack and your goals. We'll respond within one business day.",
      cta: "hello@saber.io",
    },
    footer: {
      tagline: "Information into advantage.",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      services: "Servicios",
      industries: "Industrias",
      about: "Nosotros",
      team: "Equipo",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "ETL · Infraestructura de Datos",
      title: "Convierte la información en ventaja.",
      subtitle:
        "SABER transforma datos dispersos y desordenados en información estructurada y en tiempo real — para que tu equipo tome las decisiones correctas, más rápido.",
      cta: "Hablemos",
      secondary: "Conoce nuestros servicios",
    },
    services: {
      eyebrow: "Qué hacemos",
      title: "Pipelines de datos de extremo a extremo.",
      items: [
        {
          code: "01",
          title: "Extraer",
          body: "Obtenemos datos de cualquier fuente — bases de datos, APIs SaaS, archivos, streams. Nos encargamos del caos.",
        },
        {
          code: "02",
          title: "Transformar",
          body: "Limpiamos, normalizamos y enriquecemos. Tus reglas de negocio se vuelven código repetible y verificable.",
        },
        {
          code: "03",
          title: "Cargar",
          body: "Entregamos a warehouses, lakes o aplicaciones. En tiempo real o por lotes — tú decides.",
        },
        {
          code: "04",
          title: "Observar",
          body: "Monitoreo, alertas y trazabilidad para que confíes en cada número de cada dashboard.",
        },
      ],
    },
    industries: {
      eyebrow: "Industrias",
      title: "Hecho para equipos que operan con datos.",
      items: [
        { name: "Fintech", body: "Reconciliación, riesgo y reportes a la velocidad de la regulación." },
        { name: "Retail", body: "Unifica POS, e-commerce e inventario en una sola fuente de verdad." },
        { name: "Salud", body: "Pipelines preparados para HIPAA con datos clínicos y operativos." },
        { name: "Logística", body: "Rastrea envíos, flotas y SLAs en tiempo real." },
        { name: "SaaS", body: "Analítica de producto y revenue ops sin parches." },
        { name: "Manufactura", body: "Del sensor al insight — datos IoT que generan acción." },
      ],
    },
    testimonials: {
      eyebrow: "Confían en nosotros",
      title: "Equipos que avanzan con SABER.",
      quotes: [
        {
          quote:
            "SABER redujo nuestro backlog de ingeniería de datos a la mitad. Por fin confiamos en nuestros dashboards.",
          author: "Head of Data",
          company: "Fintech Serie B",
        },
        {
          quote:
            "Reemplazamos seis scripts frágiles con un solo pipeline. Integrar nuevas fuentes toma horas, no semanas.",
          author: "VP de Ingeniería",
          company: "Grupo Retail",
        },
        {
          quote:
            "Solo la observabilidad ya pagó el proyecto. Detectamos problemas antes que los clientes.",
          author: "CTO",
          company: "Plataforma de Logística",
        },
      ],
    },
    about: {
      eyebrow: "Nosotros",
      title: "Las buenas decisiones empiezan con buenos datos.",
      body: "SABER nació para cerrar la brecha entre la información cruda y la ventaja competitiva. Construimos la infraestructura que convierte el caos de datos en una visión confiable y en tiempo real de tu empresa — para que los líderes dejen de adivinar y operen con claridad.",
    },
    team: {
      eyebrow: "Equipo",
      title: "Ingenieros, operadores y fanáticos de los datos.",
      members: [
        { name: "Nombre Fundador", role: "CEO y Co-Fundador", bio: "Más de 10 años construyendo plataformas de datos." },
        { name: "Nombre Fundador", role: "CTO y Co-Fundador", bio: "Ex-staff engineer, sistemas distribuidos." },
        { name: "Miembro del Equipo", role: "Head of Engineering", bio: "Ama los schemas y el código limpio." },
        { name: "Miembro del Equipo", role: "Arquitecto de Datos", bio: "Modelando dominios complejos desde siempre." },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Listo para ver tus datos con claridad?",
      body: "Cuéntanos sobre tu stack y tus objetivos. Respondemos en un día hábil.",
      cta: "hello@saber.io",
    },
    footer: {
      tagline: "Información en ventaja.",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;
