import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointerClick, Eye, UserX } from "lucide-react";

const problems = [
  {
    icon: MousePointerClick,
    title: "People click your ads and leave",
    description: "You paid for that click. But the moment they bounce, your investment vanishes into thin air.",
    stat: "73%",
    statLabel: "bounce rate",
  },
  {
    icon: Eye,
    title: "They visit links and disappear",
    description: "Social posts, bio links, shared URLs — all generating traffic you can never follow up with.",
    stat: "89%",
    statLabel: "untracked",
  },
  {
    icon: UserX,
    title: "They browse competitors and you lose them",
    description: "Your audience is actively shopping around. Without tracking, they choose someone else.",
    stat: "96%",
    statLabel: "lost forever",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Subtle red glow for "problem" mood */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-5 leading-tight">
            Your Traffic Is <span className="text-gradient">Leaking</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every day, potential customers interact with your brand and disappear — forever.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <p.icon className="text-primary" size={22} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-gradient">{p.stat}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{p.statLabel}</div>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
