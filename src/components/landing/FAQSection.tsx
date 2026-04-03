import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How does FollowPerClick™ actually work?", a: "We create custom tracking links that pass visitors through our pixel infrastructure before redirecting them to the destination. All your retargeting pixels fire instantly — even if the visitor bounces in seconds." },
  { q: "Do visitors notice anything different?", a: "No. The redirect is near-instantaneous. The experience is seamless and invisible to the end user." },
  { q: "Which ad platforms are supported?", a: "We support Meta (Facebook/Instagram), Google Ads, TikTok, X (Twitter), LinkedIn, Pinterest, and more. All pixels fire simultaneously." },
  { q: "Is this compliant with privacy regulations?", a: "Yes. FollowPerClick™ operates within standard retargeting and cookie consent frameworks. We recommend pairing with your existing consent management platform." },
  { q: "How quickly can I get set up?", a: "Most clients are fully operational within 24-48 hours. Our team handles the setup and pixel verification for you." },
  { q: "What kind of results can I expect?", a: "Clients typically see a 2-5x increase in retargetable audience size within the first 30 days, leading to significant improvements in ROAS." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            <HelpCircle size={12} />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 leading-tight">
            Got <span className="text-gradient">Questions?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card glass-card-hover rounded-xl px-6 border-0 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
