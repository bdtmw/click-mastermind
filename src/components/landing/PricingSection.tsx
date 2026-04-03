import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Foundation",
    price: "$497",
    period: "/mo",
    desc: "For businesses starting with retargeting",
    features: [
      "1 FollowPerClick™ Link",
      "Meta Pixel Integration",
      "Basic Audience Builder",
      "Link Analytics Dashboard",
      "Email Support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$997",
    period: "/mo",
    desc: "For scaling teams and agencies",
    badge: "Most Popular",
    features: [
      "10 FollowPerClick™ Links",
      "Meta + Google + TikTok Pixels",
      "Advanced Audience Segmentation",
      "Real-Time Analytics",
      "Bi-Weekly Strategy Calls",
      "Priority Support",
    ],
    highlight: true,
  },
  {
    name: "Authority",
    price: "$1,997",
    period: "/mo",
    desc: "For enterprise-level domination",
    features: [
      "Unlimited Links",
      "All Platform Integrations",
      "Custom Audience Workflows",
      "White-Label Dashboard",
      "Dedicated Account Manager",
      "Weekly Strategy Sessions",
      "Done-For-You Setup",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Choose Your <span className="text-gradient">Growth Plan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl p-8 transition-all duration-300 relative ${
                plan.highlight
                  ? "glass-card glow-orange border border-primary/30 scale-105"
                  : "glass-card glass-card-hover"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-200 ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "glass-card hover:bg-primary/10 border border-border"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
