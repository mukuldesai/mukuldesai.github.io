"use client";

import React, { useState, useEffect } from "react";
import { Download, Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Initialize theme from localStorage or system
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = (stored as "light" | "dark") || (prefersDark ? "dark" : "light");
    setTheme(initial);
    if (initial === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", next);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 68;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 shadow-md backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-extrabold text-slate-900 hover:text-slate-950 transition-colors duration-200"
          >
            Mukul Desai
          </button>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-800 hover:text-sky-600 font-semibold transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Mukul_Desai_Resume-1759092999721.pdf"
              download
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-9 rounded-md px-3 border-sky-200 text-sky-600 hover:bg-sky-50 bg-transparent"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <Button onClick={toggleTheme} variant="ghost" size="icon" className="text-slate-600 hover:text-sky-600 h-9 w-9 rounded-md dark:text-slate-300">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <Button onClick={toggleTheme} variant="ghost" size="icon" className="text-slate-600 hover:text-sky-600 h-9 w-9 dark:text-slate-300">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-sky-600 h-9 w-9 dark:text-slate-300">
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg dark:bg-slate-900/80">
          <nav className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-600 hover:text-sky-600 hover:bg-sky-50 block w-full text-left px-3 py-2 rounded-md font-medium dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2">
              <a
                href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Mukul_Desai_Resume-1759092999721.pdf"
                download
                className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-sky-200 text-sky-600 hover:bg-sky-50 h-9 px-3 rounded-md dark:border-slate-700 dark:text-slate-200"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;