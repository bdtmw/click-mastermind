import { motion } from "framer-motion";
import { Activity, BarChart3, Zap } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy + Form */}
          <div>
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
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-6"
            >
              Own Every Click
              <br />
              <span className="text-gradient">You Don't Control</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Turn outbound traffic into trackable, retargetable, revenue-generating
              audiences… even when visitors never land on your website.
            </motion.p>

            {/* Lead Capture Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <LeadCaptureForm variant="hero" />
            </motion.div>
          </div>

          {/* Right — Video + Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            {/* Video container with glow */}
            <div className="relative rounded-2xl overflow-hidden glow-orange-subtle">
              <div className="absolute inset-0 gradient-border rounded-2xl pointer-events-none z-10" />
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover rounded-2xl"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent rounded-2xl" />
            </div>

            {/* Floating data cards around the video */}
            <FloatingCard className="absolute -top-4 -right-4 flex items-center gap-3 z-20" delay={0}>
              <Activity className="text-primary" size={18} />
              <div>
                <div className="text-xs text-muted-foreground">Pixels Fired</div>
                <div className="text-sm font-bold">24,891</div>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute -bottom-4 -left-4 flex items-center gap-3 z-20" delay={0.5}>
              <BarChart3 className="text-primary" size={18} />
              <div>
                <div className="text-xs text-muted-foreground">Audiences Built</div>
                <div className="text-sm font-bold">12 Active</div>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute top-1/2 -right-6 -translate-y-1/2 hidden xl:flex items-center gap-3 z-20" delay={1}>
              <Zap className="text-primary" size={18} />
              <div>
                <div className="text-xs text-muted-foreground">Recovery Rate</div>
                <div className="text-sm font-bold text-primary">+340%</div>
              </div>
            </FloatingCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
