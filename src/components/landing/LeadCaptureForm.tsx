import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle } from "lucide-react";

interface LeadCaptureFormProps {
  variant?: "hero" | "cta";
}

const LeadCaptureForm = ({ variant = "hero" }: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", website: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setStatus("loading");
    // Simulate submission
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`glass-card rounded-2xl p-8 text-center ${variant === "cta" ? "max-w-lg mx-auto" : ""}`}
      >
        <CheckCircle className="text-primary mx-auto mb-4" size={40} />
        <h3 className="text-xl font-bold mb-2">You're In!</h3>
        <p className="text-muted-foreground text-sm">
          We'll send your free traffic audit within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-3 ${variant === "cta" ? "max-w-lg mx-auto" : "max-w-md"}`}
    >
      {variant === "cta" && (
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Get your free traffic audit — see exactly how much revenue you're leaving on the table.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Your Name"
          required
          maxLength={100}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
        />
        <input
          type="email"
          placeholder="Work Email"
          required
          maxLength={255}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
        />
      </div>

      <input
        type="url"
        placeholder="Website URL (optional)"
        maxLength={255}
        value={formData.website}
        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-bold glow-orange hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            Get My Free Traffic Audit
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <p className="text-xs text-muted-foreground text-center pt-1">
        No credit card required · Free audit · Results in 24 hours
      </p>
    </form>
  );
};

export default LeadCaptureForm;
