import { useState, useEffect, useRef } from "react";
import { ChevronRight, AlertCircle, X, MessageCircle, CheckCircle2, ExternalLink, Briefcase } from "lucide-react";

/**
 * Job Application Demo Page - AI Co-pilot for Job Search & Applications
 * Features: Goal selection, job search, auto-apply simulation with progress tracking
 */

export default function JobDemo() {
  const [simulatorStep, setSimulatorStep] = useState(0);
  const [showAIWidget, setShowAIWidget] = useState(true);
  const [selectedGoal, setSelectedGoal] = useState<"growth" | "stability" | null>(null);
  const [jobsFound, setJobsFound] = useState<number>(0);
  const [jobsApplied, setJobsApplied] = useState<number>(0);

  // Refs for auto-scroll
  const goalRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Auto-play simulator animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatorStep((prev) => (prev + 1) % 8);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Update jobs found and applied based on step
  useEffect(() => {
    if (simulatorStep >= 2) {
      setJobsFound(Math.min(simulatorStep - 1, 5));
    }
    if (simulatorStep >= 4) {
      setJobsApplied(Math.min(simulatorStep - 3, 3));
    }
  }, [simulatorStep]);

  // Auto-scroll to relevant section
  useEffect(() => {
    let scrollTarget: HTMLElement | null = null;

    if (simulatorStep === 0 || simulatorStep === 1) {
      scrollTarget = goalRef.current;
    } else if (simulatorStep === 2 || simulatorStep === 3) {
      scrollTarget = searchRef.current;
    } else if (simulatorStep >= 4) {
      scrollTarget = resultsRef.current;
    }

    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [simulatorStep]);

  const jobListings = [
    { id: 1, title: "Senior Software Engineer", company: "TechCorp", location: "San Francisco, CA", match: 95 },
    { id: 2, title: "Full Stack Developer", company: "StartupXYZ", location: "Remote", match: 88 },
    { id: 3, title: "Product Manager", company: "InnovateCo", location: "New York, NY", match: 82 },
    { id: 4, title: "Engineering Lead", company: "CloudSystems", location: "Seattle, WA", match: 91 },
    { id: 5, title: "DevOps Engineer", company: "DataFlow", location: "Austin, TX", match: 85 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-bold">CareerMatch Jobs</h1>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-purple-100">
              Home
            </a>
            <a href="#" className="hover:text-purple-100">
              Jobs
            </a>
            <a href="#" className="hover:text-purple-100">
              My Applications
            </a>
            <a href="#" className="hover:text-purple-100">
              Profile
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-100 rounded-lg p-8 mb-8 border border-purple-200">
          <h2 className="text-3xl font-bold text-purple-900 mb-2">
            Find Your Next Opportunity
          </h2>
          <p className="text-purple-700">
            Let AI Co-pilot search and apply to jobs that match your goals.
          </p>
        </div>

        {/* AI Widget Indicator */}
        {showAIWidget && (
          <div className="mb-6 p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-lg flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 animate-pulse"></div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-purple-600">
                AI Co-pilot is active
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Watch as the AI searches for jobs and applies to positions matching your goals. Check the widget for personalized guidance.
              </p>
            </div>
            <button
              onClick={() => setShowAIWidget(false)}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        )}

        {/* Goal Selection Section */}
        <div ref={goalRef} className="mb-12">
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What's Your Career Goal?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Growth Goal */}
              <div
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                  simulatorStep >= 1 && selectedGoal === "growth"
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-300 bg-white hover:border-purple-300"
                }`}
                onClick={() => setSelectedGoal("growth")}
              >
                <div className="text-3xl mb-2">📈</div>
                <h4 className="font-bold text-gray-900 mb-2">Career Growth</h4>
                <p className="text-sm text-gray-600">
                  Looking for roles with learning opportunities and advancement potential
                </p>
                {simulatorStep >= 1 && selectedGoal === "growth" && (
                  <p className="text-xs text-purple-600 mt-3 font-semibold">✓ Selected by AI</p>
                )}
              </div>

              {/* Stability Goal */}
              <div
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                  simulatorStep >= 1 && selectedGoal === "stability"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 bg-white hover:border-blue-300"
                }`}
                onClick={() => setSelectedGoal("stability")}
              >
                <div className="text-3xl mb-2">🏢</div>
                <h4 className="font-bold text-gray-900 mb-2">Stability & Balance</h4>
                <p className="text-sm text-gray-600">
                  Seeking established companies with work-life balance and benefits
                </p>
                {simulatorStep >= 1 && selectedGoal === "stability" && (
                  <p className="text-xs text-blue-600 mt-3 font-semibold">✓ Selected by AI</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Search Progress Section */}
        <div ref={searchRef} className="mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 border border-purple-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {simulatorStep < 2 ? "Ready to search..." : "Searching for matching jobs..."}
            </h3>

            {simulatorStep >= 2 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">Jobs Found</p>
                  <span className="text-lg font-bold text-purple-600">{jobsFound}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${(jobsFound / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Job Results Section */}
        <div ref={resultsRef} className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Matching Job Opportunities
          </h3>

          <div className="space-y-4">
            {jobListings.map((job, index) => (
              <div
                key={job.id}
                className={`border-2 rounded-lg p-6 transition-all duration-500 ${
                  index < jobsApplied
                    ? "border-green-500 bg-green-50"
                    : index < jobsFound
                    ? "border-purple-300 bg-purple-50"
                    : "border-gray-300 bg-white"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900">{job.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {job.company} • {job.location}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="text-xs font-semibold text-gray-700">Match Score:</div>
                      <div className="w-32 bg-gray-200 rounded-full h-1.5">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"
                          style={{ width: `${job.match}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-purple-600">{job.match}%</span>
                    </div>
                  </div>

                  {/* Application Status */}
                  <div className="ml-4">
                    {index < jobsApplied ? (
                      <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                        <CheckCircle2 className="w-5 h-5" />
                        Applied
                      </div>
                    ) : index < jobsFound ? (
                      <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm animate-pulse">
                        <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></div>
                        Applying...
                      </div>
                    ) : (
                      <div className="text-xs text-gray-500">Pending</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
            <p className="text-sm text-purple-700 font-semibold mb-2">Jobs Found</p>
            <p className="text-3xl font-bold text-purple-900">{jobsFound}</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <p className="text-sm text-blue-700 font-semibold mb-2">Applications Sent</p>
            <p className="text-3xl font-bold text-blue-900">{jobsApplied}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
            <p className="text-sm text-green-700 font-semibold mb-2">Time Saved</p>
            <p className="text-3xl font-bold text-green-900">
              {jobsApplied * 15} min
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-semibold">This is a demo</p>
            <p className="text-xs mt-1">
              Watch how AI Co-pilot intelligently searches for jobs matching your goals and automatically applies to the best opportunities.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-center py-6 mt-12 border-t border-gray-200">
        <p className="text-sm">
          This is a demo website. © 2026 CareerMatch Jobs
        </p>
      </footer>

      {/* AI Co-pilot Widget */}
      {showAIWidget && (
        <div className="fixed bottom-6 right-6 w-96 max-h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 animate-slide-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <h3 className="font-bold">AI Co-pilot Guide</h3>
            </div>
            <button
              onClick={() => setShowAIWidget(false)}
              className="hover:bg-white/20 p-1 rounded-lg transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Progress Section */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-gray-900">Automation Progress</p>
                <span className="text-xs font-bold text-purple-600">{simulatorStep}/7</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-600 rounded-full transition-all duration-500"
                  style={{ width: `${(simulatorStep / 7) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Goal Selection Message */}
            {simulatorStep === 0 && !selectedGoal && (
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Let's start with your goal:
                </p>
                <p className="text-xs text-gray-600">
                  Choose between Career Growth or Stability & Balance to get personalized job recommendations.
                </p>
              </div>
            )}

            {/* Goal Selected Message */}
            {selectedGoal && (
              <div className="bg-green-50 p-3 rounded-lg border border-green-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {selectedGoal === "growth" ? "Career Growth" : "Stability & Balance"}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {selectedGoal === "growth"
                      ? "Finding roles with learning opportunities and advancement."
                      : "Finding established companies with work-life balance."}
                  </p>
                </div>
              </div>
            )}

            {/* Current Step Info */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs font-semibold text-gray-700 mb-2">Current Step:</p>
              <p className="text-sm text-gray-900 font-medium">
                {simulatorStep === 0 && "Waiting for goal selection..."}
                {simulatorStep === 1 && "Goal selected! Starting search..."}
                {simulatorStep === 2 && "Searching for matching jobs..."}
                {simulatorStep === 3 && "Found 5 great opportunities!"}
                {simulatorStep === 4 && "Applying to top matches..."}
                {simulatorStep === 5 && "Applied to 2 positions..."}
                {simulatorStep === 6 && "Applied to 3 positions..."}
                {simulatorStep === 7 && "✓ All applications sent!"}
              </p>
            </div>

            {/* Stats Section */}
            {simulatorStep >= 2 && (
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="text-xs font-semibold text-gray-700 mb-2">Job Search Stats:</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Jobs Found:</span>
                    <span className="font-bold text-purple-600">{jobsFound}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Applications Sent:</span>
                    <span className="font-bold text-green-600">{jobsApplied}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Time Saved:</span>
                    <span className="font-bold text-blue-600">{jobsApplied * 15} minutes</span>
                  </div>
                </div>
              </div>
            )}

            {/* Educational Links */}
            <div className="border-t pt-3">
              <p className="text-xs font-semibold text-gray-700 mb-2">Learn More:</p>
              <div className="space-y-2">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 text-xs text-purple-600 hover:text-purple-700 font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  How AI Matches Your Skills
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  Optimize Your Job Applications
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 text-xs text-green-600 hover:text-green-700 font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  Interview Preparation Tips
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-3 bg-gray-50 rounded-b-2xl">
            <p className="text-xs text-gray-600 text-center">
              AI Co-pilot is analyzing job market trends
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
