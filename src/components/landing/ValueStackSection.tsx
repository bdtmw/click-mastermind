import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Gift } from "lucide-react";

const items = [
  { title: "FollowPerClick™ Pixel Engine", value: "$2,500" },
  { title: "Multi-Platform Retargeting Setup", value: "$1,500" },
  { title: "Custom Audience Builder", value: "$1,200" },
  { title: "Link Cloaking & Tracking Dashboard", value: "$800" },
  { title: "Priority Support & Strategy Calls", value: "$1,000" },
  { title: "Ongoing Optimization & Monitoring", value: "$500/mo" },
];

const ValueStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            <Gift size={12} />
            What You Get
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 leading-tight">
            Total Value: <span className="text-gradient">$7,500+</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card gradient-border rounded-2xl p-8 md:p-10"
        >
          <div className="space-y-1">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-center justify-between py-4 border-b border-border/30 last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="text-primary" size={14} />
                  </div>
                  <span className="font-semibold text-sm md:text-base">{item.title}</span>
                </div>
                <span className="text-muted-foreground line-through text-sm shrink-0 ml-4">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueStackSection;
