import { motion } from "framer-motion";
import { Activity, BarChart3, Zap, ArrowRight } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-32 pb-20 flex-1 flex flex-col justify-center">
        {/* Top: Centered headline + subtext */}
        <div className="text-center max-w-4xl mx-auto mb-12">
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
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Turn outbound traffic into trackable, retargetable, revenue-generating
            audiences… even when visitors never land on your website.
          </motion.p>
        </div>

        {/* Middle: Video + Form side by side */}
        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-6xl mx-auto w-full">
          {/* Video — takes 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="lg:col-span-3 relative"
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
            <FloatingCard className="absolute -top-4 -right-4 flex items-center gap-3" delay={0}>
              <Activity className="text-primary" size={18} />
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Pixels Fired</div>
                <div className="text-sm font-bold">24,891</div>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute -bottom-4 -left-4 flex items-center gap-3" delay={0.4}>
              <BarChart3 className="text-primary" size={18} />
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Audiences</div>
                <div className="text-sm font-bold">12 Active</div>
              </div>
            </FloatingCard>

            <FloatingCard className="absolute top-1/2 -translate-y-1/2 -right-6 hidden xl:flex items-center gap-3" delay={0.8}>
              <Zap className="text-primary" size={18} />
              <div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Recovery</div>
                <div className="text-sm font-bold text-primary">+340%</div>
              </div>
            </FloatingCard>
          </motion.div>

          {/* Form — takes 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 gradient-border">
              <h3 className="text-xl font-bold mb-2">Get Your Free Traffic Audit</h3>
              <p className="text-sm text-muted-foreground mb-6">
                See how much revenue you're leaving on the table — results in 24 hours.
              </p>
              <LeadCaptureForm variant="hero" />
            </div>
          </motion.div>
        </div>

        {/* Stats bar below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 glass-card rounded-2xl p-6 md:p-8 max-w-6xl mx-auto w-full"
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
