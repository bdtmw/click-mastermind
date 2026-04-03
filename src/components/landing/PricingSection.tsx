import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Crown } from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            <Crown size={12} />
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 leading-tight">
            Choose Your <span className="text-gradient">Growth Plan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`rounded-2xl p-8 transition-all duration-300 relative flex flex-col ${
                plan.highlight
                  ? "glass-card glow-orange border border-primary/30 md:scale-105 md:-my-4"
                  : "glass-card glass-card-hover"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] font-bold px-5 py-1.5 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <div>
                  <span className="text-4xl md:text-5xl font-black">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="text-primary" size={12} />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-all duration-200 text-sm ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90 glow-orange-subtle"
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
