import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4">
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
                className="glass-card rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
