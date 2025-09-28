"use client";
import Image from 'next/image';
import { MapPin, ExternalLink, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const roles = ["AI Engineer", "Data Engineer", "Business Intelligence Analyst", "Business Analyst", "Data Scientist", "BI Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(59,130,246,0.05)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                <MapPin className="h-3 w-3 mr-1" />
                USA
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                <span className="text-slate-900">Mukul Desai</span>
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl text-slate-600 h-12 flex items-center">
                <span className="mr-2">I am a</span>
                <span className="font-semibold text-sky-600 transition-opacity duration-300">{roles[roleIndex]}</span>
              </div>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Passionate about transforming data into actionable insights through AI, machine learning, and advanced analytics. I specialize in building end-to-end data solutions that drive business intelligence and innovation.
            </p>
            <div className="relative overflow-hidden rounded-lg border border-sky-100 bg-white shadow-sm">
              <div className="flex flex-wrap gap-3 p-3">
                <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-200">ML for Business Impact</span>
                <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-200">Analytics Engineering</span>
                <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-200">Real-time Insights</span>
                <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-200">Decision Intelligence</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full blur-3xl opacity-20 scale-110"></div>
              <div className="relative z-10 w-80 h-80 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    alt="Mukul Desai"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38ee6dfa-12ca-4892-8d97-159c22610299-v0-portfolio-page-creation-seven-vercel-app/assets/images/profile-1.jpg"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-sky-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">Available for work</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-sky-100">
                <div className="text-center">
                  <div className="text-lg font-bold text-sky-600">USA</div>
                  <div className="text-xs text-slate-500">Based in USA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md bg-sky-600 hover:bg-sky-700 text-white px-8 py-3"
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Mukul_Desai_Resume-1759092999721.pdf"
              download
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-sky-200 h-11 rounded-md text-sky-700 hover:bg-sky-50 px-8 py-3 bg-transparent"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/mukuldesai" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex items-center justify-center hover:bg-accent h-9 rounded-md px-3 text-slate-600 hover:text-sky-600">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/mukuldesai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center hover:bg-accent h-9 rounded-md px-3 text-slate-600 hover:text-sky-600">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:mukul.desai12@gmail.com" aria-label="Email" className="inline-flex items-center justify-center hover:bg-accent h-9 rounded-md px-3 text-slate-600 hover:text-sky-600">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sky-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sky-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;