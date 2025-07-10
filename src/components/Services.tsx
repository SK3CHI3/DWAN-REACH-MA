
import React from 'react';
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

const Services = () => {
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

  const ServiceCard = ({ service, index }: { service: any, index: number }) => (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
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
        <ul className="space-y-2">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center text-sm text-gray-500">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <a 
            href="#contact" 
            className="text-primary font-medium hover:text-orange-500 transition-colors flex items-center group"
          >
            Learn More 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Training Services */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Marketing Training & Academy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

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
    </section>
  );
};

export default Services;
