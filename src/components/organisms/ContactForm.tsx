'use client'
import { FormEvent, useState } from 'react';
import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would add your API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4 animate-fadeIn">
        <div className="bg-green-50 rounded-full p-4 mb-4 animate-scaleIn">
          <svg className="w-12 h-12 text-green-500 mx-auto animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <Heading size="md" className="mb-4 animate-slideUp delay-200">Thank You!</Heading>
        <p className="text-gray-600 mb-8 animate-slideUp delay-300">We've received your message and will get back to you soon.</p>
        <Button 
          variant="primary" 
          onClick={() => setSubmitted(false)}
          className="animate-slideUp delay-400 hover:scale-105 transition-transform duration-200"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 animate-fadeIn">
      <Heading size="md" className="text-center mb-4 animate-slideDown">Work With Us</Heading>
      <p className="text-center text-gray-600 mb-8 max-w-2xl animate-slideDown delay-100">
        Have a project in mind? We're excited to collaborate and turn your vision into reality. 
        Let's create something extraordinary together.
      </p>
      <section className="w-full max-w-2xl animate-slideUp delay-200">
        <div className="w-full rounded-2xl p-8 shadow-2xl bg-gradient-to-br from-[#B2C4D5] to-[#9FB5CC] hover:shadow-3xl transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 group">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 transition-colors group-focus-within:text-[#FFB74C]">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200 focus:outline-none focus:border-[#FFB74C] focus:ring-2 focus:ring-[#FFB74C]/20 transition-all duration-200 text-black transform-gpu hover:translate-x-1"
                required
                minLength={2}
              />
            </div>
            
            <div className="space-y-2 group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 transition-colors group-focus-within:text-[#FFB74C]">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200 focus:outline-none focus:border-[#FFB74C] focus:ring-2 focus:ring-[#FFB74C]/20 transition-all duration-200 text-black transform-gpu hover:translate-x-1"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
            
            <div className="space-y-2 group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 transition-colors group-focus-within:text-[#FFB74C]">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-32 px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200 focus:outline-none focus:border-[#FFB74C] focus:ring-2 focus:ring-[#FFB74C]/20 transition-all duration-200 resize-none text-black transform-gpu hover:translate-x-1"
                required
                minLength={10}
                placeholder="Tell us about your project, goals, and how we can help bring your vision to life."
              />
            </div>
            
            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                variant="primary"
                disabled={isSubmitting}
                className="relative px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:rotate-1 active:scale-95"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
} 