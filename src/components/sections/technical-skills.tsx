import React from 'react';
import {
  Code,
  Database,
  Brain,
  BarChart,
  Cloud,
  Wrench,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Skill = {
  name: string;
  percentage: number;
  color: string;
};

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', percentage: 95, color: 'bg-blue-500' },
      { name: 'SQL', percentage: 90, color: 'bg-green-500' },
      { name: 'R', percentage: 85, color: 'bg-purple-500' },
      { name: 'JavaScript', percentage: 80, color: 'bg-yellow-500' },
      { name: 'Java', percentage: 75, color: 'bg-red-500' },
      { name: 'Scala', percentage: 70, color: 'bg-indigo-500' },
    ],
  },
  {
    title: 'Data Engineering',
    icon: Database,
    skills: [
      { name: 'Apache Spark', percentage: 90, color: 'bg-orange-500' },
      { name: 'Apache Kafka', percentage: 85, color: 'bg-teal-500' },
      { name: 'Apache Airflow', percentage: 88, color: 'bg-cyan-500' },
      { name: 'Hadoop', percentage: 80, color: 'bg-amber-500' },
      { name: 'ETL/ELT', percentage: 92, color: 'bg-emerald-500' },
      { name: 'Data Warehousing', percentage: 87, color: 'bg-violet-500' },
    ],
  },
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', percentage: 85, color: 'bg-orange-600' },
      { name: 'PyTorch', percentage: 80, color: 'bg-orange-500' },
      { name: 'Scikit-learn', percentage: 90, color: 'bg-teal-500' },
      { name: 'OpenAI API', percentage: 88, color: 'bg-sky-500' },
      { name: 'NLP', percentage: 82, color: 'bg-purple-500' },
      { name: 'Computer Vision', percentage: 78, color: 'bg-rose-500' },
    ],
  },
  {
    title: 'Analytics & Visualization',
    icon: BarChart,
    skills: [
      { name: 'Tableau', percentage: 90, color: 'bg-blue-500' },
      { name: 'Power BI', percentage: 85, color: 'bg-yellow-500' },
      { name: 'Plotly', percentage: 88, color: 'bg-green-500' },
      { name: 'D3.js', percentage: 75, color: 'bg-indigo-500' },
      { name: 'Matplotlib', percentage: 92, color: 'bg-red-500' },
      { name: 'Seaborn', percentage: 90, color: 'bg-blue-600' },
    ],
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: [
      { name: 'AWS', percentage: 85, color: 'bg-orange-500' },
      { name: 'Google Cloud', percentage: 80, color: 'bg-blue-500' },
      { name: 'Azure', percentage: 82, color: 'bg-cyan-500' },
      { name: 'Snowflake', percentage: 88, color: 'bg-sky-400' },
      { name: 'Databricks', percentage: 85, color: 'bg-red-500' },
      { name: 'Docker', percentage: 80, color: 'bg-blue-600' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      { name: 'Git', percentage: 90, color: 'bg-slate-700' },
      { name: 'Jupyter', percentage: 95, color: 'bg-orange-500' },
      { name: 'VS Code', percentage: 92, color: 'bg-blue-500' },
      { name: 'Linux', percentage: 85, color: 'bg-green-400' },
      { name: 'MongoDB', percentage: 80, color: 'bg-green-500' },
      { name: 'PostgreSQL', percentage: 88, color: 'bg-blue-700' },
    ],
  },
];

const SkillProgressBar = ({ name, percentage, color }: Skill) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-slate-700">{name}</span>
      <Badge variant="outline" className="text-xs font-semibold border-sky-200 text-sky-700">
        {percentage}%
      </Badge>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2">
      <div
        className={`h-2 rounded-full bg-sky-500`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const SkillCategoryCard = ({ title, icon: Icon, skills }: SkillCategory) => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-sky-100 hover:shadow-lg transition-shadow duration-300 h-full">
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillProgressBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My expertise spans across data engineering, machine learning, and analytics technologies
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;