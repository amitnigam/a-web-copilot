import { useState, useEffect, useRef } from "react";
import { ChevronRight, AlertCircle, X, MessageCircle, CheckCircle2, ExternalLink } from "lucide-react";

/**
 * Demo Page - Car Insurance Quote Website with AI Co-pilot Simulator
 * Shows a realistic insurance website with animated AI automation overlay
 * Features: Auto-scroll, interactive AI widget with personalization and education
 */

export default function Demo() {
  const [simulatorStep, setSimulatorStep] = useState(0);
  const [showAIWidget, setShowAIWidget] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState<"worry-free" | "adventurous" | null>(null);
  
  // Refs for auto-scroll
  const personalInfoRef = useRef<HTMLDivElement>(null);
  const vehicleInfoRef = useRef<HTMLDivElement>(null);
  const coverageRef = useRef<HTMLDivElement>(null);
  const drivingHistoryRef = useRef<HTMLDivElement>(null);

  // Auto-play simulator animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatorStep((prev) => (prev + 1) % 6);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to relevant section based on step
  useEffect(() => {
    let scrollTarget: HTMLElement | null = null;

    if (simulatorStep === 1 || simulatorStep === 2) {
      scrollTarget = personalInfoRef.current;
    } else if (simulatorStep === 3) {
      scrollTarget = vehicleInfoRef.current;
    } else if (simulatorStep === 4) {
      scrollTarget = coverageRef.current;
    } else if (simulatorStep === 5) {
      scrollTarget = drivingHistoryRef.current;
    }

    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [simulatorStep]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-6 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <span className="font-bold text-lg">🚗</span>
            </div>
            <h1 className="text-2xl font-bold">SafeRide Insurance</h1>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-100">
              Home
            </a>
            <a href="#" className="hover:text-blue-100">
              Quotes
            </a>
            <a href="#" className="hover:text-blue-100">
              Claims
            </a>
            <a href="#" className="hover:text-blue-100">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-8 border border-blue-200">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Get Your Car Insurance Quote
          </h2>
          <p className="text-blue-700">
            Fast, easy, and transparent. Get a quote in minutes.
          </p>
        </div>

        {/* AI Widget Indicator */}
        {showAIWidget && (
          <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 animate-pulse"></div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-cyan-600">
                AI Co-pilot is active
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Watch as the AI automatically fills out this form. Check the widget on the right for personalized guidance.
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

        {/* Quote Form */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            {/* Section 1: Personal Information */}
            <div ref={personalInfoRef}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    value={simulatorStep >= 1 ? "John" : ""}
                    readOnly
                    className={`w-full px-4 py-2 border rounded-lg transition-all duration-500 text-gray-900 font-medium ${
                      simulatorStep >= 1
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-300 bg-white"
                    }`}
                  />
                  {simulatorStep >= 1 && (
                    <p className="text-xs text-cyan-600 mt-1">✓ Filled by AI</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Anderson"
                    value={simulatorStep >= 1 ? "Anderson" : ""}
                    readOnly
                    className={`w-full px-4 py-2 border rounded-lg transition-all duration-500 text-gray-900 font-medium ${
                      simulatorStep >= 1
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-300 bg-white"
                    }`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={simulatorStep >= 2 ? "john.anderson@example.com" : ""}
                    readOnly
                    className={`w-full px-4 py-2 border rounded-lg transition-all duration-500 text-gray-900 font-medium ${
                      simulatorStep >= 2
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-300 bg-white"
                    }`}
                  />
                  {simulatorStep >= 2 && (
                    <p className="text-xs text-cyan-600 mt-1">✓ Filled by AI</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={simulatorStep >= 2 ? "(555) 234-5678" : ""}
                    readOnly
                    className={`w-full px-4 py-2 border rounded-lg transition-all duration-500 text-gray-900 font-medium ${
                      simulatorStep >= 2
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-300 bg-white"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Section 2: Vehicle Information */}
            <div ref={vehicleInfoRef}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Vehicle Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Year */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year *
                  </label>
                  <select
                    value={simulatorStep >= 3 ? "2022" : ""}
                    disabled
                    className={`w-full px-4 py-2 border rounded-lg transition-all duration-500 text-gray-900 font-medium ${
                      simulatorStep >= 3
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <option value="">Select year</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                  {simulatorStep >= 3 && (
                    <p className="text-xs text-cyan-600 mt-1">✓ Selected by AI</p>
                  )}
                </div>

                {/* Make */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Make *
                  </label>
                  <select
                    value={simulatorStep >= 3 ? "Toyota" : ""}
                    disabled
                    className={`w-full px-4 py-2 border rounded-lg transition-all duration-500 text-gray-900 font-medium ${
                      simulatorStep >= 3
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <option value="">Select make</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Ford">Ford</option>
                    <option value="BMW">BMW</option>
                  </select>
                </div>

                {/* Model */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model *
                  </label>
                  <select
                    value={simulatorStep >= 3 ? "Camry" : ""}
                    disabled
                    className={`w-full px-4 py-2 border rounded-lg transition-all duration-500 text-gray-900 font-medium ${
                      simulatorStep >= 3
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <option value="">Select model</option>
                    <option value="Camry">Camry</option>
                    <option value="Corolla">Corolla</option>
                    <option value="RAV4">RAV4</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Section 3: Coverage Options */}
            <div ref={coverageRef}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Coverage Options
              </h3>

              <div className="space-y-3">
                {/* Liability */}
                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
                  <input
                    type="checkbox"
                    checked={simulatorStep >= 4}
                    readOnly
                    className="w-4 h-4 text-cyan-600 rounded"
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    <span className="font-medium">Liability Coverage</span>
                    <span className="text-gray-500 block text-xs">
                      $100,000 / $300,000
                    </span>
                  </span>
                </label>

                {/* Collision */}
                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
                  <input
                    type="checkbox"
                    checked={simulatorStep >= 4}
                    readOnly
                    className="w-4 h-4 text-cyan-600 rounded"
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    <span className="font-medium">Collision Coverage</span>
                    <span className="text-gray-500 block text-xs">
                      $500 deductible
                    </span>
                  </span>
                </label>

                {/* Comprehensive */}
                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
                  <input
                    type="checkbox"
                    checked={simulatorStep >= 4}
                    readOnly
                    className="w-4 h-4 text-cyan-600 rounded"
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    <span className="font-medium">Comprehensive Coverage</span>
                    <span className="text-gray-500 block text-xs">
                      $250 deductible
                    </span>
                  </span>
                </label>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Section 4: Driving History */}
            <div ref={drivingHistoryRef}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Driving History
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* License Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    License Status *
                  </label>
                  <select
                    value={simulatorStep >= 5 ? "Clean" : ""}
                    disabled
                    className={`w-full px-4 py-2 border rounded-lg transition-all duration-500 text-gray-900 font-medium ${
                      simulatorStep >= 5
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <option value="">Select status</option>
                    <option value="Clean">Clean</option>
                    <option value="Minor">Minor Violations</option>
                    <option value="Major">Major Violations</option>
                  </select>
                  {simulatorStep >= 5 && (
                    <p className="text-xs text-cyan-600 mt-1">✓ Selected by AI</p>
                  )}
                </div>

                {/* Years Driving */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years Driving *
                  </label>
                  <input
                    type="number"
                    placeholder="10"
                    value={simulatorStep >= 5 ? "15" : ""}
                    readOnly
                    className={`w-full px-4 py-2 border rounded-lg transition-all duration-500 text-gray-900 font-medium ${
                      simulatorStep >= 5
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-300 bg-white"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="button"
                disabled={simulatorStep < 5}
                className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-500 ${
                  simulatorStep >= 5
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {simulatorStep >= 5 ? (
                  <span className="flex items-center justify-center gap-2">
                    Get Quote <ChevronRight className="w-4 h-4" />
                  </span>
                ) : (
                  "Filling form..."
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="font-bold text-gray-900 mb-3">Automation Progress</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  simulatorStep >= 1
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {simulatorStep >= 1 ? "✓" : "1"}
              </div>
              <span className="text-sm text-gray-700">
                Personal Information
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  simulatorStep >= 2
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {simulatorStep >= 2 ? "✓" : "2"}
              </div>
              <span className="text-sm text-gray-700">Contact Details</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  simulatorStep >= 3
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {simulatorStep >= 3 ? "✓" : "3"}
              </div>
              <span className="text-sm text-gray-700">Vehicle Information</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  simulatorStep >= 4
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {simulatorStep >= 4 ? "✓" : "4"}
              </div>
              <span className="text-sm text-gray-700">Coverage Selection</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  simulatorStep >= 5
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {simulatorStep >= 5 ? "✓" : "5"}
              </div>
              <span className="text-sm text-gray-700">Driving History</span>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-semibold">This is a demo</p>
            <p className="text-xs mt-1">
              Watch how AI Web Co-pilot automatically fills out complex forms in
              seconds. No manual data entry needed!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-center py-6 mt-12 border-t border-gray-200">
        <p className="text-sm">
          This is a demo website. © 2026 SafeRide Insurance
        </p>
      </footer>

      {/* AI Co-pilot Widget */}
      {showAIWidget && (
        <div className="fixed bottom-6 right-6 w-96 max-h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 animate-slide-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
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
                <span className="text-xs font-bold text-cyan-600">{simulatorStep}/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${(simulatorStep / 5) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Personalization Question */}
            {simulatorStep === 0 && !selectedProfile && (
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Let's personalize your coverage:
                </p>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedProfile("worry-free")}
                    className="w-full p-2 text-left text-sm bg-white border border-gray-300 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 transition-all"
                  >
                    <p className="font-semibold text-gray-900">🛡️ Worry-Free</p>
                    <p className="text-xs text-gray-600">Maximum coverage, peace of mind</p>
                  </button>
                  <button
                    onClick={() => setSelectedProfile("adventurous")}
                    className="w-full p-2 text-left text-sm bg-white border border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all"
                  >
                    <p className="font-semibold text-gray-900">⚡ Adventurous</p>
                    <p className="text-xs text-gray-600">Balanced coverage, lower premiums</p>
                  </button>
                </div>
              </div>
            )}

            {/* Profile Selected Message */}
            {selectedProfile && (
              <div className="bg-green-50 p-3 rounded-lg border border-green-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {selectedProfile === "worry-free" ? "Worry-Free Profile" : "Adventurous Profile"}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {selectedProfile === "worry-free"
                      ? "We're recommending comprehensive coverage with lower deductibles."
                      : "We're recommending balanced coverage to optimize your premium."}
                  </p>
                </div>
              </div>
            )}

            {/* Current Step Info */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs font-semibold text-gray-700 mb-2">Current Step:</p>
              <p className="text-sm text-gray-900 font-medium">
                {simulatorStep === 0 && "Initializing form..."}
                {simulatorStep === 1 && "Filling personal information"}
                {simulatorStep === 2 && "Adding contact details"}
                {simulatorStep === 3 && "Selecting vehicle info"}
                {simulatorStep === 4 && "Choosing coverage options"}
                {simulatorStep === 5 && "Completing driving history"}
              </p>
            </div>

            {/* Educational Links */}
            <div className="border-t pt-3">
              <p className="text-xs font-semibold text-gray-700 mb-2">Learn More:</p>
              <div className="space-y-2">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 text-xs text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  {selectedProfile === "worry-free"
                    ? "Understanding Comprehensive Coverage"
                    : "Deductibles Explained"}
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 text-xs text-purple-600 hover:text-purple-700 font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  How Premiums Are Calculated
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-700 font-medium"
                >
                  <ExternalLink className="w-3 h-3" />
                  Coverage Comparison Guide
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-3 bg-gray-50 rounded-b-2xl">
            <p className="text-xs text-gray-600 text-center">
              AI Co-pilot is learning your preferences
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
