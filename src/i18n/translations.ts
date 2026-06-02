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
      eyebrow: "DATA INFRASTRUCTURE",
      title: "TURNING INFORMATION INTO ADVANTAGE",
      subtitle:
        "SABER transforms messy, scattered data into structured, real-time insight so your team makes the right decisions, faster.",
      cta: "Talk to us",
      secondary: "See what we do",
    },
    services: {
      eyebrow: "What we do",
      title: "Real solutions. End-to-end",
      items: [
        {
          code: "01",
          title: "Extract",
          body: "Deliver to your data warehouses, lakes, or apps. Real-time or batch, your call.",
        },
        {
          code: "02",
          title: "Transform",
          body: "Clean, normalize, and enrich. Business rules become repeatable, testable code.",
        },
        {
          code: "03",
          title: "Load",
          body: "Deliver to warehouses, lakes, or apps. Real-time or batch, your call.",
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
      title: "CLEAR DATA, BETTER DECISIONS.",
      items: [
        { name: "Retail & Commerce", body: "Sales, inventory, and customer analytics." },
        { name: "Food & Hospitality", body: "Operations, delivery, and customer trends." },
        { name: "Logistics & Distribution", body: "Tracking, routing, and operational efficiency." },
        { name: "Professional Services", body: "Performance insights for firms and service businesses." },
        { name: "Manufacturing & Production", body: "Production, costs, and operational visibility." },
        { name: "Healthcare & Wellness", body: "Operational and client data in one place." },
      ],
    },
    testimonials: {
      eyebrow: "Trusted by",
      title: "Teams that ship with SABER.",
      quotes: [
        {
          quote:
            "Since I started with Saber, I have acquired the necessary tools to understand what financial steps I should take to grow. It has been a key guide to identify which aspects I should strengthen and which I should eliminate within my entrepreneurship. Thanks to the information and clarity it has provided me, today I can make more strategic decisions aligned with the growth of my business.",
          author: "The Health Bag",
          company: "Food & Wellness",
        },
        {
          quote:
            "The automation work done by Saber has allowed us to access and understand our data in a far more efficient way. The way we now visualize information will help us drive a new stage of growth for our company, achieving this development more nimbly, securely, and, we hope, successfully.\n\nI strongly recommend that any company looking to gain a deeper understanding of how their operation works implement the knowledge and solutions gained through working with Saber.",
          author: "Inperglen",
          company: "Retail & Commerce",
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
      body: "SABER was founded to close the gap between raw information and business advantage. We build the infrastructure that turns data chaos into a reliable, real-time view of your company. We help you become a leader that stops guessing and starts operating with clarity.",
    },
    team: {
      eyebrow: "Team",
      title: "FOUNDERS",
      members: [
        { name: "THOMAS KURI", role: "Co-Founder", bio: "Driving SABER's vision, operation, and long-term growth" },
        { name: "SEBASTIAN PERILLA", role: "Co-Founder", bio: "Leading the technical development and infrastructure of SABER" },
        { name: "DANIEL KURI", role: "CO-FOUNDER", bio: "Supporting strategic planning and high level business direction" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Ready to see your data clearly?",
      body: "Tell us about your stack and your goals. We'll respond within one business day.",
      cta: "CONTACT US",
      email: "tkuri@saberetl.com",
    },
    footer: {
      tagline: "TURNING INFORMATION INTO ADVANTAGE",
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
      eyebrow: "INFRAESTRUCTURA DE DATOS",
      title: "CONVIRTIENDO INFORMACIÓN EN VENTAJA",
      subtitle:
        "SABER transforma datos dispersos y desordenados en información estructurada y en tiempo real para que tu equipo tome las decisiones correctas, más rápido.",
      cta: "Hablemos",
      secondary: "Conoce nuestros servicios",
    },
    services: {
      eyebrow: "Qué hacemos",
      title: "Soluciones reales. De extremo a extremo",
      items: [
        {
          code: "01",
          title: "Extraer",
          body: "Obtenemos datos de cualquier fuente: bases de datos, APIs SaaS, archivos, streams. Nos encargamos del caos.",
        },
        {
          code: "02",
          title: "Transformar",
          body: "Limpiamos, normalizamos y enriquecemos. Tus reglas de negocio se vuelven código repetible y verificable.",
        },
        {
          code: "03",
          title: "Cargar",
          body: "Entregamos a warehouses, lakes o aplicaciones. En tiempo real o por lotes, tú decides.",
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
      title: "DATOS CLAROS, MEJORES DECISIONES.",
      items: [
        { name: "Retail y Comercio", body: "Analítica de ventas, inventario y clientes." },
        { name: "Alimentos y Hospitalidad", body: "Operaciones, entregas y tendencias de clientes." },
        { name: "Logística y Distribución", body: "Seguimiento, ruteo y eficiencia operativa." },
        { name: "Servicios Profesionales", body: "Insights de desempeño para firmas y empresas de servicios." },
        { name: "Manufactura y Producción", body: "Producción, costos y visibilidad operativa." },
        { name: "Salud y Bienestar", body: "Datos operativos y de clientes en un solo lugar." },
      ],
    },
    testimonials: {
      eyebrow: "Confían en nosotros",
      title: "Equipos que avanzan con SABER.",
      quotes: [
        {
          quote:
            "Desde que empecé con Saber, he adquirido las herramientas necesarias para comprender qué pasos financieros debo tomar para crecer. Ha sido una guía clave para identificar qué aspectos debo fortalecer y cuáles debo eliminar dentro de mi emprendimiento. Gracias a la información y claridad que me ha brindado, hoy puedo tomar decisiones más estratégicas y alineadas con el crecimiento de mi negocio.",
          author: "The Health Bag",
          company: "Alimentación y Bienestar",
        },
        {
          quote:
            "El trabajo de automatización realizado por Saber nos ha permitido acceder y comprender nuestros datos de una manera mucho más eficiente. Además, la forma en que ahora visualizamos la información nos ayudará a impulsar una nueva etapa de crecimiento para nuestra empresa, logrando este desarrollo de manera más ágil, segura y, esperamos, exitosa.\n\nRecomiendo ampliamente a cualquier empresa que desee entender con mayor profundidad el funcionamiento de su operación implementar los conocimientos y soluciones adquiridos a través del trabajo con Saber.",
          author: "Inperglen",
          company: "Retail y comercio",
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
      body: "SABER nació para cerrar la brecha entre la información cruda y la ventaja competitiva. Construimos la infraestructura que convierte el caos de datos en una visión confiable y en tiempo real de tu empresa, para que los líderes dejen de adivinar y operen con claridad.",
    },
    team: {
      eyebrow: "Equipo",
      title: "FUNDADORES",
      members: [
        { name: "THOMAS KURI", role: "Co-Fundador", bio: "Impulsando la visión, operación y crecimiento a largo plazo de SABER" },
        { name: "SEBASTIAN PERILLA", role: "Co-Fundador", bio: "Liderando el desarrollo técnico y la infraestructura de SABER" },
        { name: "DANIEL KURI", role: "CO-FUNDADOR", bio: "Apoyando la planificación estratégica y la dirección de negocios de alto nivel" },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Listo para ver tus datos con claridad?",
      body: "Cuéntanos sobre tu stack y tus objetivos. Respondemos en un día hábil.",
      cta: "CONTÁCTANOS",
      email: "tkuri@saberetl.com",
    },
    footer: {
      tagline: "CONVIRTIENDO INFORMACIÓN EN VENTAJA",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;
