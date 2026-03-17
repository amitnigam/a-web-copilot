import { useLocation } from "wouter";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

/**
 * Footer Component
 * - Company information and branding
 * - Quick links to main sections
 * - Social media links
 * - Legal and compliance links
 * - Premium glassmorphic design
 */

export default function Footer() {
  const [, setLocation] = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      setLocation(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-background border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <div>
                <h3 className="font-bold text-white">A Web Copilot</h3>
                <p className="text-xs text-gray-500">AI Form Automation</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Help your customers complete purchases faster. Double conversion rates with AI-assisted form automation.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:hello@awebcopilot.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick("/")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/demo")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Insurance Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/demo-jobs")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Job Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/pricing")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/docs")}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Documentation
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="mailto:hello@awebcopilot.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  GDPR Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 A Web Copilot. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                Status
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                API Status
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">
                System Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
