import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import SectionTitle from '../components/SectionTitle';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { teamMembers } from '../data/team';

const Team: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-black">
        <div className="absolute inset-0 z-0">
          <ParticleBackground color="#14b8a6" quantity={60} />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
                Team
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              We are an anonymous team of students with a passion for delivering exceptional digital solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <center>
          <SectionTitle
            title="The Faces Behind NULLBOTS"
            subtitle="Our team combines diverse skills and expertise to deliver innovative digital solutions."
           
          />
          </center>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 group-hover:border-teal-600/40 group-hover:shadow-lg group-hover:shadow-teal-500/10">
                  <div className="relative aspect-square overflow-hidden">
                    <motion.img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="absolute bottom-0 left-0 right-0 p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white">{member.name}</h3>
                          <p className="text-teal-400 text-sm">{member.role}</p>
                        </div>
                        
                        <div className="flex space-x-3">
                          <motion.a
                            href="#"
                            whileHover={{ scale: 1.2, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-600 transition-colors"
                          >
                            <GitHub size={16} />
                          </motion.a>
                          
                          <motion.a
                            href="#"
                            whileHover={{ scale: 1.2, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-600 transition-colors"
                          >
                            <Linkedin size={16} />
                          </motion.a>
                          
                          <motion.a
                            href="#"
                            whileHover={{ scale: 1.2, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-600 transition-colors"
                          >
                            <Mail size={16} />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-400">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <ParticleBackground color="#10b981" quantity={40} speed={0.5} />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <center>
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our work and define our culture."
            
          />
          </center>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: 'Innovation',
                description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.',
              },
              {
                title: 'Quality',
                description: 'We are committed to excellence in every aspect of our work, from code to client communication.',
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and partner closely with our clients to achieve success.',
              },
              {
                title: 'Integrity',
                description: 'We operate with honesty, transparency, and ethical practices in all our endeavors.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Join Our Team"
              subtitle="Are you passionate about technology and innovation? We're always looking for talented individuals to join our team."
              center
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 rounded-md bg-teal-500 text-black font-medium hover:bg-teal-600 transition-colors"
              >
                View Open Positions
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;