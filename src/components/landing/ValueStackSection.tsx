import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">What You Get</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Total Value: <span className="text-gradient">$7,500+</span>
          </h2>
        </motion.div>

        <div className="glass-card gradient-border rounded-2xl p-8 space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="flex items-center justify-between py-3 border-b border-border/50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Check className="text-primary" size={14} />
                </div>
                <span className="font-medium">{item.title}</span>
              </div>
              <span className="text-muted-foreground line-through text-sm">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;
