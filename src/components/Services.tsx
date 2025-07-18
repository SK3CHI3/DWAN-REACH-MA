import React, { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  PenTool, 
  Target, 
  Palette, 
  Globe, 
  Mail,
  Camera,
  TrendingUp,
  GraduationCap,
  Users,
  Award
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Services = () => {
  const [modalService, setModalService] = useState(null);
  const [seeMoreModal, setSeeMoreModal] = useState(null); // 'marketing' | 'training' | null
  const modalRef = useRef(null);

  // Lock scroll when any modal is open
  useEffect(() => {
    if (modalService || seeMoreModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalService, seeMoreModal]);

  // ESC key closes modals
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        if (modalService) setModalService(null);
        if (seeMoreModal) setSeeMoreModal(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalService, seeMoreModal]);

  // Focus trap for modal
  useEffect(() => {
    if (!modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) focusable[0].focus();
  }, [modalService, seeMoreModal]);

  const marketingServices = [
    {
      icon: Smartphone,
      title: 'Social Media Management',
      description: 'Complete management of FB, IG, TikTok, LinkedIn, and X with engaging content strategies.',
      features: ['Content Planning', 'Community Management', 'Analytics & Reporting']
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'Professional graphics, reels, TikTok videos, and blog content that captivates your audience.',
      features: ['Graphic Design', 'Video Production', 'Blog Writing']
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Strategic Facebook/Instagram ads and Google Ads campaigns that deliver measurable results.',
      features: ['Campaign Strategy', 'Ad Creative', 'Performance Optimization']
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      description: 'Complete brand identity development including logos, brand kits, and marketing materials.',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials']
    },
    {
      icon: Globe,
      title: 'Website Design & SEO',
      description: 'Modern, responsive websites optimized for search engines and user experience.',
      features: ['Web Development', 'SEO Optimization', 'Mobile Responsive']
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Automated email campaigns and sequences that nurture leads and drive conversions.',
      features: ['Email Automation', 'Campaign Design', 'List Management']
    },
    {
      icon: Camera,
      title: 'Professional Photography & Video',
      description: 'High-quality corporate event photography and videography for brand storytelling.',
      features: ['Corporate Events', 'Brand Photography', 'Video Production']
    }
  ];

  const mainMarketing = [
    marketingServices[0], // Social Media Management
    marketingServices[1], // Content Creation
    marketingServices[2], // Paid Advertising
  ];
  const moreMarketing = [
    marketingServices[3], // Branding & Design (now in see more)
    marketingServices[4],
    marketingServices[5],
    marketingServices[6],
  ];

  const trainingServices = [
    {
      icon: GraduationCap,
      title: 'Short Courses',
      description: 'Practical courses in social media marketing, branding, and digital advertising.',
      features: ['Social Media Marketing', 'Digital Branding', 'Paid Advertising']
    },
    {
      icon: Users,
      title: 'Corporate Training',
      description: 'In-house workshops and online sessions tailored for your team\'s needs.',
      features: ['Custom Workshops', 'Team Training', 'Online Sessions']
    },
    {
      icon: Award,
      title: '1-on-1 Coaching',
      description: 'Personalized coaching for business owners and marketers to accelerate growth.',
      features: ['Personal Mentoring', 'Strategy Sessions', 'Skill Development']
    },
    {
      icon: TrendingUp,
      title: 'Certification Programs',
      description: 'Comprehensive certification programs from basic to professional level.',
      features: ['Basic Certification', 'Advanced Training', 'Professional Certification']
    }
  ];

  const mainTraining = trainingServices.slice(0, 3);
  const moreTraining = trainingServices.slice(3);

  const ServiceCard = ({ service, index, onLearnMore }: { service: any, index: number, onLearnMore?: (service: any) => void }) => (
    <div 
      className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 min-h-[320px] sm:min-h-[340px] flex flex-col w-full max-w-xs mx-auto"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col flex-1">
        {/* Icon */}
        <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <service.icon className="w-8 h-8 text-white" />
        </div>
        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {service.description}
        </p>
        {/* Features */}
        <ul className="space-y-2 mb-4">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center text-sm text-gray-500">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        {/* Learn More Link */}
        <div className="mt-auto pt-6 border-t border-gray-100">
          <button
            onClick={() => onLearnMore ? onLearnMore(service) : setModalService(service)}
            className="text-primary font-medium hover:text-orange-500 transition-colors flex items-center group focus:outline-none"
          >
            Learn More
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Modal for service details
  const ServiceModal = ({ service, onClose }: { service: any, onClose: () => void }) => {
    if (!service) return null;
    const whatsappMsg = encodeURIComponent(`Hi DawnReach! I'm interested in your service: ${service.title}. Can you tell me more?`);
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-4 sm:p-8 relative animate-fade-in scale-95 sm:scale-100 transition-transform duration-200 max-h-[90vh] my-6 overflow-y-auto mt-20 sm:mt-32"
          ref={modalRef}
          tabIndex={-1}
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="sticky top-2 float-right right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none z-10 bg-white/80 rounded-full px-2"
            aria-label="Close"
          >
            ×
          </button>
          <div className="flex flex-col items-center pt-4 sm:pt-0">
            <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 mb-4 text-center">{service.description}</p>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-center text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/254707110192?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg transition-all duration-300 mt-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    );
  };

  // See More Modal
  const SeeMoreModal = ({ type, onClose }: { type: 'marketing' | 'training', onClose: () => void }) => {
    const services = type === 'marketing' ? moreMarketing : moreTraining;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-4 sm:p-8 relative animate-fade-in scale-95 sm:scale-100 transition-transform duration-200 max-h-[90vh] my-6 overflow-y-auto mt-20 sm:mt-32"
          ref={modalRef}
          tabIndex={-1}
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="sticky top-2 float-right right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none z-10 bg-white/80 rounded-full px-2"
            aria-label="Close"
          >
            ×
          </button>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center pt-4 sm:pt-0">
            {type === 'marketing' ? 'More Digital Marketing Services' : 'More Training & Academy'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-0 place-items-center">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} onLearnMore={(s) => { onClose(); setTimeout(() => setModalService(s), 200); }} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 floating">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transform rotate-12 opacity-20"></div>
        </div>
        <div className="absolute top-60 right-20 floating-delayed">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-40 left-1/4 floating-delayed-2">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl transform -rotate-12 opacity-20"></div>
        </div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl pulse-glow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-400/20 to-pink-600/20 rounded-full blur-3xl pulse-glow"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions and training programs designed to help your business thrive in the digital age.
          </p>
        </div>

        {/* Digital Marketing Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Digital Marketing Services
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
              {mainMarketing.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} onLearnMore={setModalService} />
              ))}
            </div>
          </div>
          {moreMarketing.length > 0 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setSeeMoreModal('marketing')}
                className="px-6 py-2 rounded-full font-semibold gradient-bg text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                See More Services
              </button>
            </div>
          )}
        </div>

        {/* Training Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Marketing Training & Academy
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
              {mainTraining.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} onLearnMore={setModalService} />
              ))}
            </div>
          </div>
          {moreTraining.length > 0 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setSeeMoreModal('training')}
                className="px-6 py-2 rounded-full font-semibold gradient-bg text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                See More Training
              </button>
            </div>
          )}
        </div>

        {/* See More Modal */}
        {seeMoreModal && <SeeMoreModal type={seeMoreModal} onClose={() => setSeeMoreModal(null)} />}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Let's work together to create a digital marketing strategy that drives real results for your business.
            </p>
            <a
              href="#contact"
              className="inline-block gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </div>
      {modalService && <ServiceModal service={modalService} onClose={() => setModalService(null)} />}
    </section>
  );
};

export default Services;