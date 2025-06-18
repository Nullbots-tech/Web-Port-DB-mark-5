import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
     // details: 'Innovation Hub, Tech Park',
      details2: 'Chennai, Tamil Nadu',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+91 93426 12543',
      details2: '+91 86083 19666',
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'nullbots.tech@gmail.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      //details2: 'Weekends: By appointment',
    },
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-black">
        <div className="absolute inset-0 z-0">
          <ParticleBackground color="#f97316" quantity={60} />
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
              Get In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Touch
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Have a project in mind? We'd love to hear from you and discuss how we can help bring your ideas to life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle
                title="Contact Information"
                subtitle="Feel free to reach out to us through any of the following channels. We'd be happy to answer your questions."
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-900 rounded-xl p-6 border border-gray-800"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-12 h-12 rounded-lg bg-orange-900/20 text-orange-400 flex items-center justify-center mb-4"
                    >
                      <item.icon size={24} />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.details}</p>
                    <p className="text-gray-400">{item.details2}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <SectionTitle
                title="Send Us a Message"
                subtitle="Fill out the form below, and we'll get back to you as soon as possible."
              />
              
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;