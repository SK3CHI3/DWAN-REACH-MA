
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxElements = parallaxRef.current.querySelectorAll('.parallax-element');
        
        parallaxElements.forEach((element, index) => {
          const speed = 0.1 + (index * 0.05);
          (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20">
      {/* Animated Background Elements */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none">
        {/* Floating 3D Elements */}
        <div className="parallax-element absolute top-20 left-10 floating">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transform rotate-12 opacity-20"></div>
        </div>
        <div className="parallax-element absolute top-40 right-20 floating-delayed">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-20"></div>
        </div>
        <div className="parallax-element absolute bottom-40 left-20 floating-delayed-2">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl transform -rotate-12 opacity-20"></div>
        </div>
        <div className="parallax-element absolute top-60 right-40 floating">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl transform rotate-45 opacity-20"></div>
        </div>

        {/* Gradient Orbs */}
        <div className="parallax-element absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl pulse-glow"></div>
        <div className="parallax-element absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-orange-400/30 to-pink-600/30 rounded-full blur-3xl pulse-glow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200/50 shadow-sm fade-in-up">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Empowering Brands to Reach New Heights</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="block text-gray-900">Transform Your</span>
              <span className="block gradient-text">Digital Presence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: '0.4s' }}>
              We empower startups, SMEs, and growing brands with innovative, result-driven digital marketing solutions and practical training.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://wa.me/254707110192?text=Hi%20DawnReach%20Marketing!%20I'd%20like%20to%20explore%20your%20services%20and%20see%20how%20you%20can%20help%20grow%20my%20business.%20Can%20we%20schedule%20a%20consultation?"
              target="_blank"
              rel="noopener noreferrer"
              className="group gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/254707110192?text=Hi!%20I'd%20love%20to%20learn%20more%20about%20DawnReach%20Marketing%20and%20your%20success%20stories.%20Can%20you%20share%20more%20details%20about%20your%20approach?"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/80 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-full font-semibold text-lg border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Learn More</span>
            </a>
          </div>

          {/* Stats */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.8s' }}>
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '15+', label: 'Team Members' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
