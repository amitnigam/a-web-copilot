import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ClipboardCopy, Code2, Globe2, Sparkles, UserCheck, Wand2, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function HowItWorks() {
  const [, setLocation] = useLocation();

  const steps = [
    {
      title: "Sign up & describe your site",
      desc: "State your goal, target customers, and domain. The co-pilot aligns to your conversion outcomes.",
      icon: <UserCheck className="w-5 h-5" />,
    },
    {
      title: "Get your JavaScript snippet",
      desc: "A lightweight, workspace-specific snippet that activates guidance on your pages.",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      title: "Drop it into your pages",
      desc: "Paste before </body>. No code rewrites. Works with any framework or CMS.",
      icon: <ClipboardCopy className="w-5 h-5" />,
    },
    {
      title: "Go live with AI guidance",
      desc: "Customers see the co-pilot, get inline help, and finish tasks faster.",
      icon: <Sparkles className="w-5 h-5" />,
    },
  ];

  const outcomes = [
    { label: "Conversion lift", value: "+45%", accent: "text-cyan-400" },
    { label: "Abandonment reduction", value: "-60%", accent: "text-purple-300" },
    { label: "Time to complete", value: "10x faster", accent: "text-green-300" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1219] via-[#0d1420] to-[#0b1219] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-8">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-600/10 to-transparent blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-200">
              <Wand2 className="w-4 h-4" />
              How it works
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Launch an AI Web Co-pilot in minutes, not months
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Give every visitor a premium guided journey. Configure once, drop in a snippet, and let the co-pilot handle form filling, guidance, and nudges that lift conversions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-6 py-3" onClick={() => setLocation("/demo")}>See it in action</Button>
              <Button variant="outline" className="border-white/30 text-white hover:border-white/60" onClick={() => setLocation("/")}>Back to overview</Button>
            </div>
            <div className="flex gap-6 pt-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> No backend changes
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Works with any stack
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Security-first
              </div>
            </div>
          </div>

          {/* Highlight Card */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl">
            <CardHeader className="border-b border-white/5">
              <CardTitle className="flex items-center justify-between text-white">
                Deployment preview
                <Zap className="w-5 h-5 text-cyan-300" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="rounded-xl bg-black/40 border border-white/10 p-4 text-sm font-mono text-cyan-100">
                <div className="text-xs text-gray-400 mb-2">Snippet</div>
                <pre className="whitespace-pre-wrap leading-relaxed">
{`<script src="https://cdn.ai-web-copilot.com/snippet.js" data-site="YOUR_SITE_ID" defer></script>
<script>
  window.aiWebCopilot?.init({
    goal: "Increase checkout conversions",
    audience: "Ecommerce shoppers",
    domain: "yourstore.com",
  });
</script>`}
                </pre>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200">
                <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                  <p className="font-semibold">Admin input</p>
                  <p className="text-gray-400 mt-1">Goals, audience, key pages</p>
                </div>
                <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                  <p className="font-semibold">Customer output</p>
                  <p className="text-gray-400 mt-1">Guided flows and faster completion</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold">Four steps from setup to live</h2>
              <p className="text-gray-400 mt-2">Built for administrators who want impact without heavy engineering.</p>
            </div>
            <Button className="bg-white/10 border border-white/20 text-white hover:bg-white/20" onClick={() => setLocation("/demo")}>Preview the experience</Button>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <Card key={step.title} className="bg-white/5 border-white/10 hover:border-cyan-400/40 transition-all duration-200">
                <CardContent className="p-5 space-y-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/60 to-purple-600/60 text-white">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-400">
                    <span className="w-6 h-px bg-white/20" /> Step {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Experience */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <Card className="bg-white/5 border-white/10">
            <CardHeader className="border-b border-white/5">
              <CardTitle className="text-white">What customers see</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6 text-sm text-gray-200">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                <div>
                  <p className="font-semibold text-white">Inline co-pilot on key pages</p>
                  <p className="text-gray-400">Context-aware hints, autofill, and next-step nudges right where friction happens.</p>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                <div>
                  <p className="font-semibold text-white">Form completion without effort</p>
                  <p className="text-gray-400">AI writes for them; they review and approve. Less typing, fewer errors.</p>
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2" />
                <div>
                  <p className="font-semibold text-white">Trust-building guidance</p>
                  <p className="text-gray-400">Plain-language explanations and validations that keep users confident through checkout.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader className="border-b border-white/5">
              <CardTitle className="text-white">Outcomes you can measure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {outcomes.map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <p className={`text-2xl font-bold ${item.accent}`}>{item.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-white/10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-4 text-sm text-gray-200">
                <p className="font-semibold text-white">Admin dashboard ready</p>
                <p className="text-gray-200/90 mt-1">See completion rates, drop-off points, and revenue impact per page.</p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-gray-300">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">No PII stored in-browser</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Works with CDN & caching</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Single-line rollback</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-xl p-10">
          <h3 className="text-3xl font-bold">Ready to ship the co-pilot on your site?</h3>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Create your workspace, drop in the snippet, and watch customers finish forms and checkouts faster. No heavy engineering lift required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-3" onClick={() => setLocation("/demo")}>View live demo</Button>
            <Button variant="outline" className="border-white/30 text-white hover:border-white/60" onClick={() => setLocation("/")}>Talk to us</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
