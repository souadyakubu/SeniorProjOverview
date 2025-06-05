import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Github, ExternalLink, FileText } from 'lucide-react';
import './App.css';

function App() {
  const [expanded, setExpanded] = useState(false);
  const project = {
    authors: ["Souad Yakubu"],
    advisor: "Harry Plantinga",
    date: "September 19, 2024",
    department: "Department of Computer Science, Calvin University",
    background: `The project serves as a reader's resource for literature, addressing challenges with archaic language and complex theological concepts. CCEL.org hosts many classic texts that readers often find difficult to engage with due to outdated terminology.`,
    solution: `The AI-based tool leverages language models to enhance reading comprehension by providing real-time explanations, modern language translations, and interactive learning features. Our solution helps bridge the gap between historical texts and modern readers.`,
    research: `This hybrid research and development project combines AI technology with reading comprehension techniques. Through multiple user testing iterations, we refined our approach to ensure the tool preserves the original meaning while enhancing accessibility.`,
    links: {
      website: "https://reader-tools.wray.dart.ccel.org",
      github: "https://github.com/souadyakubu/senior-project",
      report: "https://docs.google.com/document/d/1A_S59dgLKKRdodhDt2N81Czr4kqk_q5KjRawDD5CO34/edit?tab=t.0",
      slides: "https://docs.google.com/presentation/d/1Fx7CUeLlPxKHf__kf-dAQUFZkAvmUqZejKkNL_nbiD8/edit?usp=sharing_eip&ts=673cfa32"
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <header className="py-10 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
          Readers Tool
        </h1>
        <p className="text-xl text-gray-400">{project.department}</p>
      </header>

      <main className="container mx-auto px-4 pb-16">
        <div className="bg-[#1E1E1E] rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-4">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.authors.map((author, index) => (
                <span key={index} className="bg-[#2A2A2A] rounded-full px-3 py-1 text-sm text-gray-300">
                  {author}
                </span>
              ))}
              <span className="bg-[#2A2A2A] rounded-full px-3 py-1 text-sm text-gray-300">
                Advisor: {project.advisor}
              </span>
              <span className="bg-[#2A2A2A] rounded-full px-3 py-1 text-sm text-gray-300">
                {project.date}
              </span>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-2 text-teal-300">Background & Problem</h3>
                <p className="text-gray-400 leading-relaxed">{project.background}</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-2 text-teal-300">Our Solution</h3>
                <p className="text-gray-400 leading-relaxed">{project.solution}</p>
              </section>

              {expanded && (
                <section>
                  <h3 className="text-xl font-semibold mb-2 text-teal-300">Research & Development</h3>
                  <p className="text-gray-400 leading-relaxed">{project.research}</p>
                </section>
              )}

              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {expanded ? (
                  <>
                    Show less <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Read more <ChevronDown size={16} />
                  </>
                )}
              </button>

              <section>
                <h3 className="text-xl font-semibold mb-4 text-teal-300">Project Overview</h3>
                <div className="bg-[#292929] p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-cyan-400 font-medium mb-2">Key Features</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-300">•</span>
                          <span>Text modernization for classic archaic texts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-300">•</span>
                          <span>Contextual explanations for difficult passages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-300">•</span>
                          <span>Interactive quizzes for deeper comprehension</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-medium mb-2">Technology</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-teal-300">•</span>
                          <span>Claude AI for text analysis and transformation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-300">•</span>
                          <span>React frontend for responsive user experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-teal-300">•</span>
                          <span>Firebase backend with CCEL integration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-teal-300">Project Links</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
                  >
                    <ExternalLink size={18} /> Project Website
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-gray-500/20"
                  >
                    <Github size={18} /> GitHub Repository
                  </a>
                  <a
                    href={project.links.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    <FileText size={18} /> Final Report
                  </a>
                  <a
                    href={project.links.slides}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-teal-500/20"
                  >
                    <FileText size={18} /> Presentation Slides
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-gray-500">
        <p>© 2025 Calvin University - Computer Science Department</p>
      </footer>
    </div>
  );
}

export default App;