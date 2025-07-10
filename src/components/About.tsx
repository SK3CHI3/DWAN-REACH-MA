
import React from 'react';
import { Target, Eye, Heart, Users, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'We believe in empowering businesses with the tools and knowledge they need to succeed in the digital world.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends and bring innovative solutions to help your brand stand out.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work as an extension of your team, committed to your success and long-term growth.'
    },
    {
      icon: Rocket,
      title: 'Results',
      description: 'Every strategy we implement is focused on delivering measurable results and real business impact.'
    }
  ];

  const stats = [
    { number: '3+', label: 'Years of Excellence' },
    { number: '50+', label: 'Successful Projects' },
    { number: '30+', label: 'Happy Clients' },
    { number: '95%', label: 'Client Retention' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">DawnReach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team dedicated to helping businesses reach new heights through innovative digital marketing solutions and comprehensive training programs.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Target className="w-8 h-8 text-blue-500 opacity-50" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Target className="w-8 h-8 text-blue-500 mr-3" />
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower startups, SMEs, and growing brands with innovative, result-driven digital marketing solutions and practical training that unlock their full potential in the digital space.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Eye className="w-8 h-8 text-orange-500 opacity-50" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 flex items-center">
              <Eye className="w-8 h-8 text-orange-500 mr-3" />
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the most trusted and impactful digital marketing agency and training hub in East Africa, helping businesses and professionals grow confidently in the digital era.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6 gradient-text">Meet Our Team</h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Our diverse team of digital marketing experts, creative designers, and business strategists are passionate about helping your business succeed.
          </p>
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">AM</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Alphonse Mondi</h4>
                <p className="text-gray-600">Founder & Digital Marketing Strategist</p>
                <p className="text-sm text-gray-500 mt-2">Leading digital transformation for East African businesses</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">TM</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Creative Team</h4>
                <p className="text-gray-600">Design & Content Specialists</p>
                <p className="text-sm text-gray-500 mt-2">Bringing brands to life through compelling visuals</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">ST</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Strategy Team</h4>
                <p className="text-gray-600">Growth & Analytics Experts</p>
                <p className="text-sm text-gray-500 mt-2">Driving measurable results through data-driven strategies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
