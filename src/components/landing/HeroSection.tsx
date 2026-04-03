import { motion } from "framer-motion";
import { Activity, BarChart3, Zap } from "lucide-react";

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
    transition={{ delay: delay + 1, duration: 0.8 }}
    className={`glass-card rounded-xl px-4 py-3 animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Orange glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm text-muted-foreground">
            Retargeting Infrastructure for Growth Teams
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8"
        >
          Own Every Click
          <br />
          <span className="text-gradient">You Don't Control</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Turn outbound traffic into trackable, retargetable, revenue-generating
          audiences… even when visitors never land on your website.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cta"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold glow-orange hover:scale-105 transition-transform duration-200"
          >
            Get My Traffic Audit
          </a>
          <a
            href="#how-it-works"
            className="glass-card px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-transform duration-200"
          >
            See How It Works
          </a>
        </motion.div>
      </div>

      {/* Floating UI elements */}
      <FloatingCard className="absolute top-1/4 left-[8%] hidden lg:flex items-center gap-3" delay={0}>
        <Activity className="text-primary" size={18} />
        <div>
          <div className="text-xs text-muted-foreground">Pixels Fired</div>
          <div className="text-sm font-bold">24,891</div>
        </div>
      </FloatingCard>

      <FloatingCard className="absolute top-1/3 right-[8%] hidden lg:flex items-center gap-3" delay={0.5}>
        <BarChart3 className="text-primary" size={18} />
        <div>
          <div className="text-xs text-muted-foreground">Audiences Built</div>
          <div className="text-sm font-bold">12 Active</div>
        </div>
      </FloatingCard>

      <FloatingCard className="absolute bottom-[25%] left-[12%] hidden lg:flex items-center gap-3" delay={1}>
        <Zap className="text-primary" size={18} />
        <div>
          <div className="text-xs text-muted-foreground">Recovery Rate</div>
          <div className="text-sm font-bold text-primary">+340%</div>
        </div>
      </FloatingCard>
    </section>
  );
};

export default HeroSection;
