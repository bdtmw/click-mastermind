import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, BarChart2, FileText, Users } from "lucide-react";

const cases = [
  { icon: Instagram, title: "Instagram / TikTok Traffic", desc: "Capture every bio link click and story swipe-up into retargetable audiences." },
  { icon: BarChart2, title: "Google Ads Bounce Traffic", desc: "Stop wasting ad spend. Pixel visitors who bounce before your page even loads." },
  { icon: FileText, title: "Content & Blog Sharing", desc: "Every shared article becomes a tracking opportunity across all platforms." },
  { icon: Users, title: "Competitor Traffic", desc: "Build audiences from competitor comparisons and review sites." },
];

const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="use-cases" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Use Cases</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Works <span className="text-gradient">Everywhere</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <c.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
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
