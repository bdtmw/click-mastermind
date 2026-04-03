import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, Layers, Radio, LogOut, Target, TrendingUp } from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            From Click to <span className="text-gradient">Conversion</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-primary" size={22} />
                </div>
                <div className="text-xs text-primary font-bold mb-1">Step {i + 1}</div>
                <h4 className="text-sm font-bold mb-1">{step.label}</h4>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-primary/40 text-lg">→</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Glowing pipeline bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:block mt-8 h-1 rounded-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 origin-left"
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
