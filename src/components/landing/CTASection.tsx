import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LeadCaptureForm from "./LeadCaptureForm";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-black mb-6"
        >
          Stop letting your traffic{" "}
          <span className="text-gradient">disappear.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Every minute without FollowPerClick™ is money walking out the door. Start capturing your invisible audiences today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <LeadCaptureForm variant="cta" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
