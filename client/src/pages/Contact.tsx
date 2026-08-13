import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!email) {
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("https://formspree.io/f/mjybrpao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          formName: "Demo Request",
          source: "Contact Page",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit demo request");
      }

      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    } catch {
      setSubmitError("Could not send request right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-[70vh] py-20 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-2xl mx-auto">
        <div className="glass-card p-12 space-y-8 border-cyan-500/30 rounded-2xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              Contact Us for a <span className="gradient-text">Demo</span>
            </h1>
            <p className="text-xl text-gray-400">
              Share your work email and our team will reach out within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3 flex-col sm:flex-row">
              <Input
                type="email"
                placeholder="your@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-lg px-4 py-3"
                disabled={isSubmitting}
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 rounded-lg px-8 font-semibold whitespace-nowrap"
              >
                {isSubmitting ? "Sending..." : isSubscribed ? "✓ Subscribed" : "Request Demo"}
              </Button>
            </div>

            {isSubscribed && (
              <p className="text-center text-cyan-400 text-sm">
                Thanks! Our team will contact you within 24 hours.
              </p>
            )}
            {submitError && (
              <p className="text-center text-red-400 text-sm">
                {submitError}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
