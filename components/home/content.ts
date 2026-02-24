export type PricingTier = {
  title: string;
  price: string;
  description: string;
  cta: string;
  featured: boolean;
  badge?: string;
  bullets: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    title: "Starter Plan",
    price: "GBP 0",
    description: "Start free with basic features",
    cta: "Starter Plan",
    featured: false,
    bullets: ["5 invoices per month", "Basic reporting", "Email support"],
  },
  {
    title: "Growth Plan",
    price: "GBP 12",
    description: "For teams scaling weekly invoicing",
    cta: "Choose plan",
    featured: false,
    badge: "Most Popular",
    bullets: ["Unlimited invoices", "Auto reminders", "Priority support"],
  },
  {
    title: "Business Plan",
    price: "GBP 25",
    description: "For high-volume cashflow control",
    cta: "Get started",
    featured: true,
    bullets: ["Advanced analytics", "Custom branding", "API + integrations"],
  },
];

export const faqs = [
  "How long can I use the free plan?",
  "Can I cancel anytime?",
  "Do you support accounting software integrations?",
  "Is my data encrypted and compliant?",
  "Which cards and bank accounts are supported?",
];

export const featureCards = [
  "Instant Payments",
  "Clear Fee Tracking",
  "Payment Routing",
  "Analytics Reports",
  "Advanced Security",
  "Automated Invoicing",
];
