import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}


const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Submission failed");
      }

      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.01, borderColor: '#0ea5e9' },
    blur: { scale: 1, borderColor: '#1f2937' },
  };

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <div className="bg-gray-900 rounded-xl p-6 md:p-8 border border-gray-800">
        {isSubmitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-4"
            >
              <Check size={32} />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium px-6 py-2 rounded-md"
            >
              Send Another Message
            </motion.button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Your Name" name="name" value={formState.name} handleChange={handleChange} />
              <InputField label="Your Email" name="email" value={formState.email} handleChange={handleChange} type="email" />
            </div>
            <InputField label="Subject" name="subject" value={formState.subject} handleChange={handleChange} />
            <TextAreaField label="Message" name="message" value={formState.message} handleChange={handleChange} />
            {error && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm">{error}</motion.div>}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-md font-medium ${
                isSubmitting ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-600 text-black'
              } transition-colors`}
            >
              {isSubmitting ? (
                <>
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-gray-400 border-t-white rounded-full mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} className="ml-2" />
                </>
              )}
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

const InputField: React.FC<InputFieldProps> = ({ label, name, value, handleChange, type = "text" }) => {
  const inputVariants = {
    focus: { scale: 1.01, borderColor: '#0ea5e9' },
    blur: { scale: 1, borderColor: '#1f2937' },
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <motion.input
        whileFocus="focus"
        animate="blur"
        variants={inputVariants}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required
        className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </motion.div>
  );
};

const TextAreaField = ({ label, name, value, handleChange }) => {
  const inputVariants = {
    focus: { scale: 1.01, borderColor: '#0ea5e9' },
    blur: { scale: 1, borderColor: '#1f2937' },
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <motion.textarea
        whileFocus="focus"
        animate="blur"
        variants={inputVariants}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required
        rows={5}
        className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </motion.div>
  );
};

export default ContactForm;
