import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointerClick, Eye, UserX } from "lucide-react";

const problems = [
  {
    icon: MousePointerClick,
    title: "People click your ads and leave",
    description: "You paid for that click. But the moment they bounce, your investment vanishes into thin air.",
  },
  {
    icon: Eye,
    title: "They visit links and disappear",
    description: "Social posts, bio links, shared URLs — all generating traffic you can never follow up with.",
  },
  {
    icon: UserX,
    title: "They browse competitors and you lose them",
    description: "Your audience is actively shopping around. Without tracking, they choose someone else.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
            Your Traffic Is <span className="text-gradient">Leaking</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every day, potential customers interact with your brand and disappear — forever.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <p.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
