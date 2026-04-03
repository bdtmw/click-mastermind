import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, Layers, Radio, LogOut, Target, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  { icon: Megaphone, label: "Ad / Social / Link", desc: "User clicks your content" },
  { icon: Layers, label: "FollowPerClick™", desc: "Passes through our layer" },
  { icon: Radio, label: "Pixel Fires", desc: "All tracking pixels activate" },
  { icon: LogOut, label: "User Leaves", desc: "Visitor bounces as usual" },
  { icon: Target, label: "Retargeting Ads", desc: "Ads follow them everywhere" },
  { icon: TrendingUp, label: "Conversion", desc: "They come back and buy" },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 leading-tight">
            From Click to <span className="text-gradient">Conversion</span>
          </h2>
        </motion.div>

        {/* Flow — responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="relative flex flex-col items-center"
            >
              <div className="glass-card glass-card-hover rounded-2xl p-5 md:p-6 text-center w-full transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <step.icon className="text-primary" size={20} />
                </div>
                <div className="text-[10px] text-primary font-bold uppercase tracking-wider mb-1.5">Step {i + 1}</div>
                <h4 className="text-xs md:text-sm font-bold mb-1 leading-snug">{step.label}</h4>
                <p className="text-[11px] text-muted-foreground leading-snug">{step.desc}</p>
              </div>

              {/* Connector arrow — desktop only */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-10">
                  <ArrowRight size={14} className="text-primary/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Glowing pipeline bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 1 }}
          className="hidden lg:block mt-10 h-0.5 rounded-full origin-left"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(24 100% 50%), transparent)",
          }}
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
