import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ChevronRight, TrendingUp, Users, DollarSign, AlertCircle, CheckCircle2, Zap, Clock, Shield, BarChart3, Target, Lightbulb } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Premium B2B SaaS
 * - Dark navy background with cyan-to-purple gradients
 * - Glassmorphic elements for sophisticated tech feel
 * - Clash Grotesk for bold headlines, Outfit for body text
 * - Focus on conversion metrics, ROI, and admin value
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [, setLocation] = useLocation();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section - B2B Conversion Focus */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663211257588/AFiy5ewd57sGmNKD66yEW9/hero-background-3jcmhRQtWRQRnT3P7bZ3Di.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm font-semibold text-cyan-300 mb-4">
                  For Site Administrators
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text">Double Your Conversion Rate</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Help your customers complete purchases faster. Reduce form abandonment by 60%. Increase revenue with AI-assisted customer journeys.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4 flex-wrap">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 rounded-lg px-8 py-6 text-lg font-semibold"
                >
                  Request Admin Demo
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  onClick={() => setLocation("/demo")}
                  className="bg-white/10 border border-white/30 hover:bg-white/20 text-white rounded-lg px-8 py-6 text-lg font-semibold"
                >
                  See Conversion Impact
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Trust Indicators - B2B Focused */}
              <div className="flex gap-8 pt-8 border-t border-white/10">
                <div>
                  <p className="text-2xl font-bold text-cyan-400">2-3x</p>
                  <p className="text-sm text-gray-400">Conversion Lift</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-400">60%</p>
                  <p className="text-sm text-gray-400">Less Abandonment</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-cyan-400">500+</p>
                  <p className="text-sm text-gray-400">Sites Using</p>
                </div>
              </div>
            </div>

            {/* Right: Value Prop Card */}
            <div className="relative">
              <div className="glass-card border-cyan-500/30 p-8 space-y-6 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Reduce Form Abandonment</h3>
                      <p className="text-sm text-gray-400 mt-1">AI guides customers through complex forms, reducing drop-offs at critical steps.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Accelerate Checkout</h3>
                      <p className="text-sm text-gray-400 mt-1">10x faster form completion. Fewer validation errors. Instant field recommendations.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Measurable Revenue Impact</h3>
                      <p className="text-sm text-gray-400 mt-1">Track conversion lift, support ticket reduction, and ROI in real-time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Friction Points Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-background/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Customers Abandon Your Forms
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Identify the friction points that cost you conversions—and how AI Co-pilot solves them
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Friction Point 1 */}
            <div className="glass-card p-6 border-red-500/20 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold">Complex Multi-Step Forms</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Customers get overwhelmed by lengthy forms and abandon before completion.
              </p>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm text-red-300">
                ✓ AI breaks forms into digestible steps with smart guidance
              </div>
            </div>

            {/* Friction Point 2 */}
            <div className="glass-card p-6 border-red-500/20 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold">Manual Data Entry Errors</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Typos and formatting errors cause validation failures and frustration.
              </p>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm text-red-300">
                ✓ AI auto-fills with 99% accuracy, eliminating validation errors
              </div>
            </div>

            {/* Friction Point 3 */}
            <div className="glass-card p-6 border-red-500/20 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold">Decision Paralysis</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Too many options confuse customers (coverage types, plan tiers, add-ons).
              </p>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm text-red-300">
                ✓ AI recommends best options based on customer profile
              </div>
            </div>

            {/* Friction Point 4 */}
            <div className="glass-card p-6 border-red-500/20 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold">Mobile Form Friction</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Small screens make form filling tedious. Mobile abandonment is 40% higher.
              </p>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm text-red-300">
                ✓ AI handles typing—customers just approve recommendations
              </div>
            </div>

            {/* Friction Point 5 */}
            <div className="glass-card p-6 border-red-500/20 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold">Session Timeouts</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Customers lose progress on long forms, forcing them to restart.
              </p>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm text-red-300">
                ✓ AI completes forms in seconds, before timeouts occur
              </div>
            </div>

            {/* Friction Point 6 */}
            <div className="glass-card p-6 border-red-500/20 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold">Confusing Field Labels</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Jargon and unclear instructions cause customers to abandon or call support.
              </p>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm text-red-300">
                ✓ AI explains fields in plain language with examples
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Impact Metrics */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Proven Conversion Impact
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            Real metrics from sites using AI Co-pilot
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Metric 1 */}
            <div className="glass-card p-8 text-center border-cyan-500/30 hover:border-cyan-500/60 transition-all">
              <div className="text-5xl font-bold text-cyan-400 mb-2">+45%</div>
              <p className="text-gray-400 mb-4">Average Conversion Rate Increase</p>
              <div className="text-sm text-gray-500">Range: 25% - 65% depending on form complexity</div>
            </div>

            {/* Metric 2 */}
            <div className="glass-card p-8 text-center border-purple-500/30 hover:border-purple-500/60 transition-all">
              <div className="text-5xl font-bold text-purple-400 mb-2">-60%</div>
              <p className="text-gray-400 mb-4">Form Abandonment Reduction</p>
              <div className="text-sm text-gray-500">Customers complete purchases instead of dropping off</div>
            </div>

            {/* Metric 3 */}
            <div className="glass-card p-8 text-center border-green-500/30 hover:border-green-500/60 transition-all">
              <div className="text-5xl font-bold text-green-400 mb-2">10x</div>
              <p className="text-gray-400 mb-4">Faster Form Completion</p>
              <div className="text-sm text-gray-500">Average: 2 minutes → 12 seconds</div>
            </div>
          </div>

          {/* ROI Calculator Preview */}
          <div className="glass-card p-8 border-cyan-500/30 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Quick ROI Example</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-gray-400">Current monthly conversions:</span>
                    <span className="font-bold">1,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-gray-400">Average order value:</span>
                    <span className="font-bold">$500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-gray-400">Current monthly revenue:</span>
                    <span className="font-bold text-cyan-400">$500,000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">With AI Co-pilot (+45%)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-gray-400">New monthly conversions:</span>
                    <span className="font-bold text-green-400">1,450</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-gray-400">Average order value:</span>
                    <span className="font-bold">$500</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-gray-400">New monthly revenue:</span>
                    <span className="font-bold text-green-400">$725,000</span>
                  </div>
                  <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-sm text-green-300 font-semibold">
                      💰 Additional Monthly Revenue: <span className="text-2xl">$225,000</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Showcase Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background/30 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            See Conversion Impact In Action
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Insurance Demo Card */}
            <div className="glass-card border-cyan-500/30 p-8 space-y-6 rounded-2xl hover:border-cyan-500/60 transition-all duration-300">
              <div className="text-5xl">🚗</div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Insurance Quote Demo</h3>
                <p className="text-gray-400">
                  See how AI guides customers through complex coverage options and auto-fills personalized recommendations.
                </p>
              </div>
              <Button
                onClick={() => setLocation("/demo")}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 rounded-lg py-3 font-semibold"
              >
                Launch Insurance Demo
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Job Application Demo Card */}
            <div className="glass-card border-purple-500/30 p-8 space-y-6 rounded-2xl hover:border-purple-500/60 transition-all duration-300">
              <div className="text-5xl">💼</div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Job Application Demo</h3>
                <p className="text-gray-400">
                  Watch AI search for matching opportunities and auto-apply with consistent information—increasing application volume.
                </p>
              </div>
              <Button
                onClick={() => setLocation("/demo-jobs")}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 rounded-lg py-3 font-semibold"
              >
                Launch Job Demo
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - B2B Admin Focused */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Built for Site Administrators
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-8 space-y-4 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Real-Time Analytics</h3>
              <p className="text-gray-400">
                Track conversion lift, form completion rates, and ROI from your admin dashboard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card p-8 space-y-4 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Easy Integration</h3>
              <p className="text-gray-400">
                One-line script installation. Works on any website. No code changes needed.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card p-8 space-y-4 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Enterprise Security</h3>
              <p className="text-gray-400">
                Bank-level encryption. GDPR compliant. Customer data never stored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-12 space-y-8 border-cyan-500/30">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">
                Ready to Double Your <span className="gradient-text">Conversion Rate?</span>
              </h2>
              <p className="text-xl text-gray-400">
                Join 500+ sites increasing revenue with AI Web Co-pilot. Get started in minutes.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex gap-3 flex-col sm:flex-row">
                <Input
                  type="email"
                  placeholder="your@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-lg px-4 py-3"
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 rounded-lg px-8 font-semibold whitespace-nowrap"
                >
                  {isSubscribed ? "✓ Subscribed" : "Request Demo"}
                </Button>
              </div>
              {isSubscribed && (
                <p className="text-center text-cyan-400 text-sm">
                  Thanks! Our team will contact you within 24 hours.
                </p>
              )}
            </form>

            <p className="text-center text-sm text-gray-500">
              No credit card required. Free 14-day trial included.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
