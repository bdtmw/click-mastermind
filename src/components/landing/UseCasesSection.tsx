import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, BarChart2, FileText, Users } from "lucide-react";

const cases = [
  { icon: Instagram, title: "Instagram / TikTok Traffic", desc: "Capture every bio link click and story swipe-up into retargetable audiences across all major platforms." },
  { icon: BarChart2, title: "Google Ads Bounce Traffic", desc: "Stop wasting ad spend. Pixel visitors who bounce before your page even loads — never lose a click again." },
  { icon: FileText, title: "Content & Blog Sharing", desc: "Every shared article becomes a tracking opportunity. Build audiences from organic content distribution." },
  { icon: Users, title: "Competitor Traffic", desc: "Build audiences from competitor comparison pages, review sites, and industry forums automatically." },
];

const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="use-cases" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 leading-tight">
            Works <span className="text-gradient">Everywhere</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card glass-card-hover gradient-border rounded-2xl p-8 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <c.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
