import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Gone", value: "73%", desc: "of ad clicks never return" },
  { label: "Untracked", value: "89%", desc: "of social traffic is invisible" },
  { label: "Unrecoverable", value: "96%", desc: "without pixel infrastructure" },
];

const AgitationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-primary uppercase tracking-widest mb-6"
        >
          The Hard Truth
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-black leading-tight mb-6"
        >
          You're only able to retarget a{" "}
          <span className="text-gradient">small percentage</span> of your actual traffic.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          The rest? It's gone. And it's costing you thousands every month.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="text-5xl md:text-6xl font-black text-gradient mb-2">
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
