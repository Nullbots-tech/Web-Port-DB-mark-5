import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Code, Zap, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import ParticleBackground from '../components/ParticleBackground';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';

import { services } from '../data/services';
import { projects } from '../data/projects';

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = projects.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  //const statsItems = [
    //{ icon: Code, value: '50+', label: 'Projects Completed' },
    //{ icon: Users, value: '30+', label: 'Happy Clients' },
    //{ icon: Award, value: '10+', label: 'Awards Won' },
    //{ icon: Zap, value: '99%', label: 'Client Satisfaction' },
  //];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 pt-20 pb-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block text-cyan-400 font-semibold"
              >
                WELCOME TO NULLBOTS
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-white">We Create</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 inline-block">
                  Digital Solutions
                </span>{' '}
                <span className="text-white">For Your Business</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-lg md:text-xl max-w-lg"
              >
                We are an anonymous team of students with a passion for delivering exceptional digital solutions, from web and mobile applications to AI/ML solutions and game development.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-cyan-500 text-black font-medium transition-colors hover:bg-cyan-600"
                  >
                    Our Projects
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-transparent border border-cyan-500 text-cyan-400 font-medium transition-colors hover:bg-cyan-950/30"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-square">
                <motion.div
                  initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-xl shadow-cyan-500/10"
                >
                  <img
                    src="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="NULLBOTS Digital Solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </motion.div>
                
                <motion.div
                  initial={{ x: 20, y: 20, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-8 -right-8 bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-xl max-w-xs"
                >
                  <h3 className="text-xl font-bold text-white mb-2">Innovative Solutions</h3>
                  <p className="text-gray-400">
                    We combine creativity with technical expertise to deliver cutting-edge digital experiences.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
       
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <SectionTitle
              title="Our Services"
              subtitle="We offer a wide range of digital services to help your business grow and succeed in the digital landscape."
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6 md:mt-0"
            >
              <Link
                to="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
              >
                View All Services
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight size={16} className="ml-2" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={<service.icon size={24} />}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

  

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <SectionTitle
              title="Our Portfolio"
              subtitle="Check out some of our recent projects and see how we've helped our clients achieve their goals."
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6 md:mt-0"
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
              >
                View All Projects
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight size={16} className="ml-2" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <PortfolioCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-2xl p-8 md:p-12 border border-cyan-800/30 backdrop-blur-sm text-center max-w-4xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to transform your digital presence?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how NULLBOTS can help you achieve your goals with our innovative digital solutions. Get in touch today!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-600 transition-colors"
              >
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;