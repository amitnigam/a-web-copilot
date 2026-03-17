import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Header Component
 * - Sticky navigation bar with A Web Copilot branding
 * - Responsive mobile menu
 * - Links to key sections and demos
 * - Premium glassmorphic design
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Demos", href: "#demos", submenu: [
      { label: "Insurance Quote", href: "/demo" },
      { label: "Job Application", href: "/demo-jobs" }
    ]},
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "How it works", href: "/how-it-works" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      setLocation(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setLocation("/")}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-text">A Web Copilot</h1>
              <p className="text-xs text-gray-500">AI Form Automation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 py-2"
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {/* Submenu */}
                {link.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-background/95 backdrop-blur-md border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.submenu.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() => setLocation("/")}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 rounded-lg px-6 py-2 font-semibold"
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
                {link.submenu && (
                  <div className="pl-4 space-y-1">
                    {link.submenu.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavClick(item.href)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Button
                onClick={() => setLocation("/")}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 rounded-lg py-2 font-semibold"
              >
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
