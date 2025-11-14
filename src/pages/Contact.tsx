import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, LoaderCircle, CheckCircle, XCircle } from 'lucide-react';

const contactDetails = [
  {
    icon: <MapPin size={24} className="text-primary-blue" />,
    title: "Register Office",
    text: "N.H-34 Malda Bypass, Near Malda Court Railway Station, Post-Madhaipur, P.S. & Dist-Malda-732142 West Bengal.",
  },
  {
    icon: <MapPin size={24} className="text-primary-blue" />,
    title: "Corporate Office",
    text: "Dishari Health Point Pvt. Ltd. Education Department, Room No-7, 19 , B. G. Road , P. O - Mokdumpur , P.S- English Bazar, Dist - Malda 732103 , West Bengal.",
  },
  {
    icon: <Phone size={24} className="text-primary-blue" />,
    title: "Phone",
    text: "+91 9775901793 (Timing 11am to 5pm)",
    href: "tel:+919775901793",
  },
  {
    icon: <Mail size={24} className="text-primary-blue" />,
    title: "Email",
    text: "dipahs2022@gmail.com",
    href: "mailto:dipahs2022@gmail.com",
  },
];

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey || serviceID === 'YOUR_SERVICE_ID') {
      console.error("EmailJS environment variables are not configured.");
      setSubmissionStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          setSubmissionStatus('success');
          form.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSubmissionStatus('error');
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <AnimatedPage>
      <div className="bg-white">
        <header className="bg-primary-blue-light py-16 md:py-20 text-center">
          <div className="container mx-auto px-6">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-text-primary font-lexend tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're here to help and answer any question you might have. We look forward to hearing from you.
            </motion.p>
          </div>
        </header>

        <main className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-text-primary font-lexend mb-2">Contact Information</h2>
                <p className="text-text-muted mb-8">
                  Wish to enquire about admissions, syllabus, or anything else? You can walk in, call, or submit the form.
                </p>
                <div className="space-y-6">
                  {contactDetails.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-blue-light rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-text-primary text-lg">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-text-secondary hover:text-primary-blue transition-colors">
                            {item.text}
                          </a>
                        ) : (
                          <p className="text-text-secondary">{item.text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="lg:col-span-3 bg-background p-8 rounded-xl shadow-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-text-primary font-lexend mb-6">Send us a Message</h2>
                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">Full Name</label>
                    <input type="text" id="name" name="from_name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue transition" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
                    <input type="email" id="email" name="from_email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue transition" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue transition" placeholder="Admission Inquiry" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                    <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue transition" placeholder="Your message here..."></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button type="submit" disabled={isSubmitting} className="w-full bg-primary-blue text-white font-lexend font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? (
                        <>
                          <LoaderCircle size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                  
                  {submissionStatus === 'success' && (
                    <div className="flex items-center gap-3 text-green-600 bg-green-100 p-3 rounded-lg">
                      <CheckCircle size={20} />
                      <p className="text-sm font-medium">Your message has been sent successfully! We will get back to you shortly.</p>
                    </div>
                  )}
                  {submissionStatus === 'error' && (
                     <div className="flex items-center gap-3 text-red-600 bg-red-100 p-3 rounded-lg">
                       <XCircle size={20} />
                       <p className="text-sm font-medium">Something went wrong. Please check your EmailJS settings or try again later.</p>
                     </div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
