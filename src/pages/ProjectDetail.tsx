import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Tag, Code } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<typeof projects[0] | null>(null);
  const [nextProject, setNextProject] = useState<typeof projects[0] | null>(null);
  const [prevProject, setPrevProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const currentProject = projects.find(p => p.id === id);
    if (!currentProject) {
      navigate('/portfolio', { replace: true });
      return;
    }

    setProject(currentProject);
    
    const currentIndex = projects.findIndex(p => p.id === id);
    const nextIndex = (currentIndex + 1) % projects.length;
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    
    setNextProject(projects[nextIndex]);
    setPrevProject(projects[prevIndex]);
  }, [id, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="pt-20 pb-20 bg-gray-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Project Hero */}
        <section className="mb-16">
          <div className="mb-6">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Portfolio
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden aspect-video"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-0 left-0 p-6 md:p-10"
            >
              <span className="inline-block text-xs font-medium text-cyan-400 mb-2 uppercase tracking-wider">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl">
                {project.description}
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Project Details */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Project Date</p>
                    <p className="text-white">2023</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Tag size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Category</p>
                    <p className="text-white">{project.category}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Code size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Technologies</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Navigation */}
        <section className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {prevProject && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 sm:mb-0"
              >
                <Link
                  to={`/portfolio/${prevProject.id}`}
                  className="flex items-center group"
                >
                  <ArrowLeft size={16} className="mr-2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <div>
                    <p className="text-gray-400 text-sm">Previous Project</p>
                    <p className="text-white group-hover:text-cyan-400 transition-colors">{prevProject.title}</p>
                  </div>
                </Link>
              </motion.div>
            )}
            
            {nextProject && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to={`/portfolio/${nextProject.id}`}
                  className="flex items-center group text-right"
                >
                  <div>
                    <p className="text-gray-400 text-sm">Next Project</p>
                    <p className="text-white group-hover:text-cyan-400 transition-colors">{nextProject.title}</p>
                  </div>
                  <ArrowRight size={16} className="ml-2 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </Link>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;