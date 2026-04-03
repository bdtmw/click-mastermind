import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DifferentiationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">The Difference</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Not Just <span className="text-gradient">Another Agency</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Others */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 opacity-60"
          >
            <div className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Most Agencies</div>
            <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Focus on getting clicks</h3>
            <ul className="space-y-3 text-muted-foreground">
              {["Drive traffic to landing pages", "Optimize for CTR metrics", "Report on impressions", "Hope visitors convert"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* FPC */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card gradient-border rounded-2xl p-8 glow-orange-subtle"
          >
            <div className="text-sm text-primary uppercase tracking-widest font-semibold mb-4">FollowPerClick™</div>
            <h3 className="text-2xl font-bold mb-6">Focus on <span className="text-gradient">owning the click</span></h3>
            <ul className="space-y-3">
              {["Capture every visitor with invisible pixels", "Build retargeting audiences automatically", "Track across all major ad platforms", "Bring back visitors with precision ads"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
