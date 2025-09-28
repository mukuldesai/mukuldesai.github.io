"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Code, ExternalLink, Search } from "lucide-react";

const projects = [
  {
    title: "Healthcare Outcomes & Insurance Analytics Dashboard",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38ee6dfa-12ca-4892-8d97-159c22610299-v0-portfolio-page-creation-seven-vercel-app/assets/images/healthcare-dashboard-2.png",
    status: "Latest",
    category: "Healthcare Analytics",
    date: "Sep 2025",
    description: "Comprehensive healthcare analytics platform with real-time patient monitoring, predictive analytics, and interactive dashboards for medical professionals.",
    techStack: ["Python", "Streamlit", "Pandas", "+3 more"],
    links: {
      code: "https://github.com/mukuldesai/healthcare-dashboard",
      demo: "https://www.linkedin.com/posts/mukuldesai_healthcare-has-always-been-close-to-me-activity-7371799726049882112-aBMu",
    },
  },
  {
    title: "ZeroDay",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38ee6dfa-12ca-4892-8d97-159c22610299-v0-portfolio-page-creation-seven-vercel-app/assets/images/zeroday-3.png",
    status: "Featured",
    category: "AI Platform",
    date: "Jun 2025 - Jul 2025",
    description: "Agentic AI onboarding assistant made of four collaborating agents for code search, task recommendations, learning guidance, and real-time help.",
    techStack: ["React", "Node.js", "OpenAI API", "+3 more"],
    links: {
      code: "https://github.com/mukuldesai/ZeroDay",
      demo: "https://zeroday-frontend-alpha.vercel.app/",
    },
  },
  {
    title: "QuantFlow Financial Suite",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38ee6dfa-12ca-4892-8d97-159c22610299-v0-portfolio-page-creation-seven-vercel-app/assets/images/quantflow-financial-4.png",
    status: "Active",
    category: "Financial Analytics",
    date: "May 2025 - Jun 2025",
    description: "AI-augmented valuation and analytics (DCF, benchmarking, dashboards) from ingestion to investor-ready insights.",
    techStack: ["Python", "FastAPI", "React", "+3 more"],
    links: {
      code: "https://github.com/mukuldesai/Quantflow-Financial-Suite",
      demo: "https://www.linkedin.com/posts/mukuldesai_fintech-datascience-financialmodeling-activity-7340287126753689600-J33W",
    },
  },
  {
    title: "InterviewGPT: Generative Preparation Trainer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38ee6dfa-12ca-4892-8d97-159c22610299-v0-portfolio-page-creation-seven-vercel-app/assets/images/interviewgpt-5.png",
    status: "Active",
    category: "AI Assistant",
    date: "Apr 2025",
    description: "Interview preparation platform with AI simulations, resume insights, and progress tracking.",
    techStack: ["Next.js", "TailwindCSS", "Firebase", "+2 more"],
    links: {
      code: "https://github.com/mukuldesai/InterviewGPT",
      demo: "https://superb-centaur-84b28a.netlify.app/",
    },
  },
  {
    title: "Real-Time Financial Risk & Fraud Detection with AI & Big Data",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1758985837597.png",
    status: "Active",
    category: "Machine Learning",
    date: "Feb 2025 - Mar 2025",
    description: "End-to-end platform with Kafka + Flink pipelines, anomaly detection (PyOD/Sklearn), and real-time risk dashboards.",
    techStack: ["Python", "Scikit-learn", "Apache Kafka", "+2 more"],
    links: {
      code: "https://github.com/mukuldesai/Real-Time-Fraud-Detection-System",
      demo: "https://www.linkedin.com/posts/mukuldesai_finance-bigdata-ai-activity-7310735677191581697-thrO",
    },
  },
  {
    title: "Automated Financial Data Pipeline, Risk Analytics & Dashboard",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38ee6dfa-12ca-4892-8d97-159c22610299-v0-portfolio-page-creation-seven-vercel-app/assets/images/financial-dashboard-7.png",
    status: "Completed",
    category: "Financial Analytics",
    date: "Jan 2025 - Feb 2025",
    description: "Automated ETL (Airflow + dbt), anomaly detection, risk metrics, and interactive dashboards.",
    techStack: ["Python", "Airflow", "PostgreSQL", "+2 more"],
    links: {
      code: "https://github.com/mukuldesai/Financial-Pipeline",
      demo: "https://public.tableau.com/app/profile/mukul.desai/viz/FinancialPipelineMarketInsightsRiskMetrics/RiskMetricsDashboard",
    },
  },
  {
    title: "Analysing IPL 2023 vs. IPL 2024: Unveiling Trends & Strategies",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38ee6dfa-12ca-4892-8d97-159c22610299-v0-portfolio-page-creation-seven-vercel-app/assets/images/ipl-analysis-8.png",
    status: "Completed",
    category: "Sports Analytics",
    date: "Aug 2024 - Sep 2024",
    description: "Interactive Tableau analysis of IPL trends with predictive insights.",
    techStack: ["Python", "Pandas", "Tableau", "+2 more"],
    links: {
      code: "https://github.com/mukuldesai/-Analysing-IPL-2023-vs.-IPL-2024-Unveiling-Trends-Strategies-",
      demo: "https://www.linkedin.com/posts/mukuldesai_ipl-datascience-tableau-activity-7247004329381892096-MOmt",
    },
  },
  {
    title: "Lung Cancer Detection",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38ee6dfa-12ca-4892-8d97-159c22610299-v0-portfolio-page-creation-seven-vercel-app/assets/images/lung-cancer-9.png",
    status: "Completed",
    category: "Healthcare ML",
    date: "May 2024",
    description: "ML models and Streamlit app for lung cancer prediction and visualization.",
    techStack: ["Python", "TensorFlow", "Streamlit", "+2 more"],
    links: {
      code: "https://github.com/mukuldesai/Lung-Cancer-Detection",
      demo: "https://lung-cancer-detection-aajr7qzdgpwdjbssgpsbfq.streamlit.app/",
    },
  },
  {
    title: "UAE Vehicle Market Analysis",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38ee6dfa-12ca-4892-8d97-159c22610299-v0-portfolio-page-creation-seven-vercel-app/assets/images/uae-vehicle-10.png",
    status: "Completed",
    category: "Market Analytics",
    date: "Mar 2024 - Apr 2024",
    description: "Power BI dashboard and clustering-based market segmentation for UAE vehicles.",
    techStack: ["Python", "Power BI", "Clustering", "+2 more"],
    links: {
      code: "https://github.com/mukuldesai/UAE-Vehicle-Market-Analysis",
      demo: "",
    },
  },
  {
    title: "Marketing Analytics Tool",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38ee6dfa-12ca-4892-8d97-159c22610299-v0-portfolio-page-creation-seven-vercel-app/assets/images/marketing-tool-11.png",
    status: "Completed",
    category: "Marketing Analytics",
    date: "Mar 2024",
    description: "Campaign performance tracking, customer segmentation, and ROI optimization.",
    techStack: ["Python", "Django", "PostgreSQL", "+2 more"],
    links: {
      code: "https://github.com/mukuldesai/Marketing-and-Social-Media-Content-Generation-Tool",
      demo: "https://www.linkedin.com/posts/mukuldesai_ai-openai-digitalmarketing-activity-7275555526636126209-Ud8b",
    },
  },
  {
    title: "Inventory Management System",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38ee6dfa-12ca-4892-8d97-159c22610299-v0-portfolio-page-creation-seven-vercel-app/assets/images/inventory-management-12.png",
    status: "Completed",
    category: "Business Intelligence",
    date: "Dec 2023",
    description: "Smart inventory management with predictive analytics, automated reordering, and real-time stock monitoring.",
    techStack: ["React", "Node.js", "MongoDB", "+2 more"],
    links: {
      code: "https://github.com/mukuldesai/Inventory-Management-System",
      demo: "",
    },
  }
];

const categories = [
  "All",
  "Healthcare Analytics",
  "AI Platform",
  "Financial Analytics",
  "Machine Learning",
  "Sports Analytics",
  "Healthcare ML",
  "Market Analytics",
  "Marketing Analytics",
  "Business Intelligence",
  "AI Assistant",
];

const statusColors: { [key: string]: string } = {
  Latest: "bg-teal-500",
  Featured: "bg-purple-500",
  Active: "bg-blue-500",
  Completed: "bg-slate-500",
};

// Minimal helper to show demo type pill
const getDemoType = (url: string) => (url?.includes("linkedin.com") ? "Video" : "Live");
const demoTypeClasses: { [key: string]: string } = {
  Video: "bg-sky-100 text-sky-700",
  Live: "bg-emerald-100 text-emerald-700",
};

// Helper to parse first date in a range like "Jun 2025 - Jul 2025" or "Sep 2025"
const parseSortDate = (dateStr: string) => {
  const months: { [k: string]: number } = { Jan:0, Feb:1, Mar:2, Apr:3, May:4, Jun:5, Jul:6, Aug:7, Sep:8, Oct:9, Nov:10, Dec:11 };
  const match = dateStr.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4})/);
  if (!match) return 0;
  const [, mon, yr] = match;
  return new Date(parseInt(yr, 10), months[mon]).getTime();
};

// Push projects without demo links to the end
const hasDemo = (p: typeof projects[0]) => Boolean(p.links.demo && p.links.demo.trim().length > 0);

type Project = typeof projects[0];

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="relative group">
      <div className="absolute top-4 left-4 z-10">
        <Badge
          className={`${statusColors[project.status]} text-white border-0`}
        >
          {project.status}
        </Badge>
      </div>
      <div className="absolute top-4 right-4 z-10 space-y-2 text-right">
        <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-slate-700">
            {project.category}
        </Badge>
        <Badge variant="secondary" className={`${demoTypeClasses[getDemoType(project.links.demo)]} border-0`}>{getDemoType(project.links.demo)}</Badge>
      </div>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
    <CardContent className="flex flex-grow flex-col p-6">
      <div className="mb-2 flex items-center text-sm text-slate-500">
        <CalendarDays className="mr-2 h-4 w-4" />
        <span>{project.date}</span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-800">{project.title}</h3>
      <p className="mb-4 flex-grow text-slate-600 line-clamp-3">{project.description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="outline" className="border-slate-300 bg-slate-50 text-slate-600">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="mt-auto grid grid-cols-[1fr_1fr_1.5fr] gap-2">
        <Button asChild variant="outline" size="sm" className="text-slate-700 hover:bg-slate-100 hover:text-slate-900 border-slate-300">
          <a href={project.links.code} target="_blank" rel="noopener noreferrer">
            <Code className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
        <Button asChild variant="outline" size="sm" className="text-slate-700 hover:bg-slate-100 hover:text-slate-900 border-slate-300">
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </a>
        </Button>
        <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
            View Details
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
);

const FeaturedProjects = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [query, setQuery] = useState("");

    const normalizedQuery = query.trim().toLowerCase();
    const filteredProjects = projects
      .filter(project =>
        (activeCategory === "All" || project.category === activeCategory)
        && (
          !normalizedQuery ||
          project.title.toLowerCase().includes(normalizedQuery) ||
          project.description.toLowerCase().includes(normalizedQuery) ||
          project.techStack.some(t => t.toLowerCase().includes(normalizedQuery))
        )
      )
      .sort((a, b) => {
        const demoDiff = Number(hasDemo(b)) - Number(hasDemo(a));
        if (demoDiff !== 0) return demoDiff; // projects with demo first
        return parseSortDate(b.date) - parseSortDate(a.date); // then by date desc
      });

    return (
        <section id="projects" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-slate-900">Featured Projects</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        A showcase of my work in data engineering, AI, and analytics across various industries
                    </p>
                </div>
                
                {/* Search + Filters */}
                <div className="flex flex-col items-center gap-4 mb-12">
                  <div className="w-full max-w-xl">
                    <label htmlFor="project-search" className="sr-only">Search projects</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        id="project-search"
                        type="text"
                        placeholder="Search projects..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full rounded-md border border-slate-300 bg-white px-9 py-2 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 p-2">
                         {categories.map((category) => (
                           <Button
                             key={category}
                             onClick={() => setActiveCategory(category)}
                             variant={activeCategory === category ? "default" : "outline"}
                             className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200
                                 ${activeCategory === category
                                     ? 'bg-blue-600 text-white hover:bg-blue-700'
                                     : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400'
                                 }
                             `}
                           >
                             {category}
                           </Button>
                         ))}
                   </div>
                 </div>

                 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                     {filteredProjects.map((project, index) => (
                         <ProjectCard key={index} project={project} />
                     ))}
                 </div>
             </div>
         </section>
     );
 };

 export default FeaturedProjects;