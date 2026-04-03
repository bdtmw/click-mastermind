import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Crosshair, RotateCcw, Sparkles } from "lucide-react";

const features = [
  { icon: Shield, title: "Capture before they bounce", desc: "Our pixel fires the instant a visitor arrives — even on pages you don't own." },
  { icon: Crosshair, title: "Track across platforms", desc: "Meta, Google, TikTok, X — fire all your retargeting pixels from one unified layer." },
  { icon: RotateCcw, title: "Bring them back with precision", desc: "Build custom audiences automatically and serve hyper-targeted ads to bring them back." },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={12} />
            The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-2 mb-5 leading-tight">
            Introducing <span className="text-gradient">FollowPerClick™</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            An invisible retargeting layer that sits between your traffic and your ads — capturing every visitor before they disappear.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card glass-card-hover gradient-border rounded-2xl p-8 text-center transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <f.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
