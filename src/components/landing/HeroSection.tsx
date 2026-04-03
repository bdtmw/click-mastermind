import { motion } from "framer-motion";
import { Activity, BarChart3, Zap } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";
import heroBg from "@/assets/hero-bg.jpg";

const FloatingCard = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delay + 1.2, duration: 0.8 }}
    className={`glass-card rounded-xl px-4 py-3 animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/40" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy + Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm text-muted-foreground font-medium">
                Retargeting Infrastructure for Growth Teams
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[0.95] mb-6"
            >
              Own Every Click
              <br />
              <span className="text-gradient">You Don't Control</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Turn outbound traffic into trackable, retargetable, revenue-generating
              audiences… even when visitors never land on your website.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <LeadCaptureForm variant="hero" />
            </motion.div>
          </div>

          {/* Right — Video with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden glow-orange">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover rounded-2xl"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent rounded-2xl pointer-events-none" />
            </div>

            {/* Floating data overlays */}
            <FloatingCard className="absolute -top-5 -right-5 flex items-center gap-3" delay={0}>
              <Activity className="text-primary" size={18} />
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Pixels Fired</div>
                <div className="text-sm font-bold">24,891</div>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute -bottom-5 -left-5 flex items-center gap-3" delay={0.4}>
              <BarChart3 className="text-primary" size={18} />
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Audiences</div>
                <div className="text-sm font-bold">12 Active</div>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute top-1/2 -translate-y-1/2 -right-8 hidden xl:flex items-center gap-3" delay={0.8}>
              <Zap className="text-primary" size={18} />
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Recovery</div>
                <div className="text-sm font-bold text-primary">+340%</div>
              </div>
            </FloatingCard>
          </motion.div>
        </div>

        {/* Stats bar below hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 glass-card rounded-2xl p-6 md:p-8"
        >
          {[
            { value: "2.4M+", label: "Pixels Fired Monthly" },
            { value: "340%", label: "Avg. Recovery Rate" },
            { value: "500+", label: "Active Campaigns" },
            { value: "24hrs", label: "Setup Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-gradient">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
