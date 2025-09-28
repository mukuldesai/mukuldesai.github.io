import Image from 'next/image';
import { GraduationCap, Award, Calendar, Eye, CheckCircle } from 'lucide-react';

const educationData = [
  {
    university: "Northeastern University",
    degree: "Master's degree, Information Systems",
    duration: "Aug 2023 - May 2025",
    gpa: "3.38",
    coursework: [
      "Data Management and Database Design",
      "Data Science and Engineering Methods",
      "Prompt Engineering and AI",
      "Big Data Architecture & Governance",
      "Application Engineering Development",
      "Business Analysis and Information Engineering",
      "Advances in Data Sciences and Architecture",
    ],
    skills: [
      "Python",
      "SQL",
      "Machine Learning (Scikit-learn, TensorFlow)",
      "LangChain & OpenAI GPT",
      "Data Engineering (Airflow, Kafka, dbt)",
      "Cloud (AWS, Snowflake)",
      "PostgreSQL & MongoDB",
      "Power BI & Tableau",
    ],
    activities: null,
  },
  {
    university: "Vivekanand Education Society's Institute Of Technology",
    degree: "Bachelor of Engineering - BE, Electronic and Telecommunication",
    duration: "Aug 2019 - May 2023",
    gpa: "3.29",
    coursework: [
      "Image Processing and Machine Vision",
      "Artificial Neural Networks and Fuzzy Logics",
      "Cloud Computing",
      "Augmented and Virtual Reality",
      "Computer Communications Network",
      "Internet Communication Engineering",
    ],
    skills: [
      "Python",
      "R",
      "Excel (Advanced)",
      "SQL Basics",
      "Data Visualization (Tableau)",
      "Machine Learning Foundations",
      "Linux",
    ],
    activities: ["Institute of Electrical and Electronics Engineering"],
  },
];

const certificationsData = [
  {
    title: "IBM Data Engineering Specialization",
    issuer: "IBM",
    date: "Dec 2024",
    image: "https://v0-portfolio-page-creation-seven.vercel.app/certificates/ibm-data-engineering.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/HJY7NISBPSXV",
  },
  {
    title: "Google Cloud Data Analytics Specialization",
    issuer: "Google Cloud Skills Boost",
    date: "Nov 2024",
    image: "https://v0-portfolio-page-creation-seven.vercel.app/certificates/google-cloud-analytics.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/0KKFQBDFG97F",
  },
  {
    title: "IBM Data Science Specialization",
    issuer: "IBM",
    date: "Oct 2024",
    image: "https://v0-portfolio-page-creation-seven.vercel.app/certificates/ibm-data-science.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/DWKFZX82LJPI",
  },
  {
    title: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "Aug 2024",
    image: "https://v0-portfolio-page-creation-seven.vercel.app/certificates/microsoft-linkedin.png",
    verifyUrl: "https://www.linkedin.com/learning/certificates/7693af777db08bad27e4522301e6323e46e4b142e3a47c51ef01539dc85d0802",
  },
];

const EducationCertifications = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Education &amp; Certifications
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My academic foundation and professional certifications in data science and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="flex items-center text-2xl font-semibold text-slate-800 mb-8">
              <GraduationCap className="h-6 w-6 mr-3 text-sky-600" />
              Education
            </h3>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="rounded-lg border bg-white p-6 shadow-sm border-sky-100 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-sky-600" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-slate-900">{edu.university}</h4>
                      <p className="text-sky-700 font-medium">{edu.degree}</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 mt-1">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1.5" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center">
                          <span className="font-semibold text-slate-600 mr-1.5">GPA:</span>
                          {edu.gpa}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pl-16">
                    {edu.coursework && (
                      <div className="mb-4">
                        <h5 className="mb-2 text-sm font-semibold text-slate-700">Key Coursework:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map(course => (
                            <div key={course} className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-sky-50 text-sky-800 border-sky-200">
                              {course}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {edu.skills && (
                      <div className="mb-4">
                        <h5 className="mb-2 text-sm font-semibold text-slate-700">Technical Skills:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map(skill => (
                            <div key={skill} className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 border-slate-200">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {edu.activities && (
                      <div>
                        <h5 className="mb-2 text-sm font-semibold text-slate-700">Activities:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.activities.map(activity => (
                             <div key={activity} className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 border-slate-200">
                              {activity}
                             </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center text-2xl font-semibold text-slate-800 mb-8">
              <Award className="h-6 w-6 mr-3 text-sky-600" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {certificationsData.map((cert, index) => (
                <div key={index} className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 border-slate-200">
                    <div className="flex-shrink-0">
                      <Image
                        src={cert.image}
                        alt={`${cert.title} logo`}
                        width={64}
                        height={64}
                        className="object-contain w-16 h-16"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-slate-900 leading-snug">{cert.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{cert.issuer}</p>
                      <p className="flex items-center text-sm text-slate-500 mt-1">
                        <Calendar className="h-4 w-4 mr-1.5" />
                        {cert.date}
                      </p>
                      <div className="mt-4 flex items-center gap-4">
                        <a href={cert.image} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-sky-200 text-sky-700 hover:bg-sky-50 h-8 px-3 rounded-md">
                          <Eye className="h-4 w-4" /> View
                        </a>
                        <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-sky-200 text-sky-700 hover:bg-sky-50 h-8 px-3 rounded-md">
                          <CheckCircle className="h-4 w-4" /> Verify
                        </a>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;