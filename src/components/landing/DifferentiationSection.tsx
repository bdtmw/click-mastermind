import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const DifferentiationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const othersPoints = [
    "Drive traffic to landing pages",
    "Optimize for CTR metrics",
    "Report on impressions",
    "Hope visitors convert",
  ];

  const fpcPoints = [
    "Capture every visitor with invisible pixels",
    "Build retargeting audiences automatically",
    "Track across all major ad platforms",
    "Bring back visitors with precision ads",
  ];

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            The Difference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 leading-tight">
            Not Just <span className="text-gradient">Another Agency</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Others */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-10 opacity-50"
          >
            <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-3">Most Agencies</div>
            <h3 className="text-2xl font-bold mb-8 text-muted-foreground">Focus on getting clicks</h3>
            <ul className="space-y-4">
              {othersPoints.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <X size={10} className="text-muted-foreground" />
                  </div>
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
            className="glass-card gradient-border rounded-2xl p-8 md:p-10 glow-orange-subtle"
          >
            <div className="text-[10px] text-primary uppercase tracking-[0.2em] font-bold mb-3">FollowPerClick™</div>
            <h3 className="text-2xl font-bold mb-8">
              Focus on <span className="text-gradient">owning the click</span>
            </h3>
            <ul className="space-y-4">
              {fpcPoints.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check size={10} className="text-primary" />
                  </div>
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
