import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Crosshair, RotateCcw } from "lucide-react";

const features = [
  { icon: Shield, title: "Capture before they bounce", desc: "Our pixel fires the instant a visitor arrives — even on pages you don't own." },
  { icon: Crosshair, title: "Track across platforms", desc: "Meta, Google, TikTok, X — fire all your retargeting pixels from one unified layer." },
  { icon: RotateCcw, title: "Bring them back with precision", desc: "Build custom audiences automatically and serve hyper-targeted ads to bring them back." },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">The Solution</span>
          <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">
            Introducing <span className="text-gradient">FollowPerClick™</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            An invisible retargeting layer that sits between your traffic and your ads — capturing every visitor before they disappear.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card glass-card-hover gradient-border rounded-2xl p-8 text-center transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <f.icon className="text-primary" size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
