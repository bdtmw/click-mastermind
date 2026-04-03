import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle } from "lucide-react";

const stats = [
  { label: "Gone", value: "73%", desc: "of ad clicks never return" },
  { label: "Untracked", value: "89%", desc: "of social traffic is invisible" },
  { label: "Unrecoverable", value: "96%", desc: "without pixel infrastructure" },
];

const AgitationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full px-4 py-1.5">
            <AlertTriangle size={12} />
            The Hard Truth
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
        >
          You're only able to retarget a{" "}
          <span className="text-gradient">small percentage</span> of your actual traffic.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          The rest? It's gone. And it's costing you thousands every month.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className="glass-card gradient-border rounded-2xl p-8"
            >
              <div className="text-5xl md:text-6xl font-black text-gradient mb-3">
                {s.value}
              </div>
              <div className="text-lg font-bold mb-1">{s.label}</div>
              <div className="text-sm text-muted-foreground">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;
