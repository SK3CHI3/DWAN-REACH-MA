import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import DawnReachLogo from './DawnReachLogo';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    quote: '“DawnReach transformed our online presence. We saw real results in just a few months!”',
    name: 'Jane Mwangi',
    role: 'Marketing Lead, Acme Corp',
  },
  {
    quote: '“Professional, creative, and always responsive. Highly recommended for digital marketing.”',
    name: 'Samuel Otieno',
    role: 'CEO, Startup Hub',
  },
  {
    quote: '“Their training programs helped our team upskill and deliver better campaigns.”',
    name: 'Linda Wanjiru',
    role: 'Brand Manager, RetailPro',
  },
  {
    quote: '“We doubled our Instagram engagement after working with DawnReach. Their strategies work!”',
    name: 'Brian Kimani',
    role: 'Social Media Manager, TrendyWear',
  },
  {
    quote: '“The team at DawnReach is knowledgeable and always available. Our campaigns have never been better.”',
    name: 'Grace Njeri',
    role: 'Digital Lead, FinTech Africa',
  },
  {
    quote: '“From branding to paid ads, DawnReach delivered results at every step. Highly recommended!”',
    name: 'Peter Oloo',
    role: 'Founder, Oloo Foods',
  },
];

const ContactSection = () => (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 floating">
          <div className="w-15 h-15 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl transform rotate-12 opacity-20"></div>
        </div>
        <div className="absolute top-96 right-24 floating-delayed">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full opacity-20"></div>
        </div>
        <div className="absolute bottom-48 left-1/3 floating-delayed-2">
          <div className="w-18 h-18 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl transform -rotate-45 opacity-20"></div>
        </div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl pulse-glow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-52 h-52 bg-gradient-to-r from-orange-400/20 to-red-600/20 rounded-full blur-3xl pulse-glow"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let's discuss how we can help your business reach new heights.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information + Action Buttons */}
        <div className="space-y-8 lg:col-span-2 max-w-2xl px-8 mx-auto">
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://wa.me/254707110192?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20digital%20marketing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-4 p-4 bg-green-500 hover:bg-green-600 rounded-xl shadow-sm border-2 border-green-600 text-white font-semibold text-base transition-all"
              style={{ boxShadow: '0 2px 8px 0 rgba(37, 211, 102, 0.15)' }}
            >
              <FaWhatsapp className="w-6 h-6" />
              <span>WhatsApp <span className="ml-2 px-2 py-0.5 rounded bg-white/20 text-xs font-bold border border-white/30">Fastest</span></span>
            </a>
            <a
              href="tel:+254707110192"
              className="flex-1 flex items-center justify-center space-x-4 p-4 bg-blue-500 hover:bg-blue-600 rounded-xl shadow-sm border-2 border-blue-600 text-white font-semibold text-base transition-all"
            >
              <Phone className="w-6 h-6" />
              <span>Call</span>
            </a>
            <a
              href="mailto:alphonesomondi7@gmail.com?subject=Inquiry%20from%20Website&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              className="flex-1 flex items-center justify-center space-x-4 p-4 bg-orange-500 hover:bg-orange-600 rounded-xl shadow-sm border-2 border-orange-600 text-white font-semibold text-base transition-all"
            >
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
            </div>
          {/* Quick Stats */}
          <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto border border-gray-100 mt-8">
            <h4 className="font-semibold text-gray-900 mb-2 text-base">Why Choose DawnReach?</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-center">
                <div className="text-xl font-bold gradient-text">24h</div>
                <div className="text-xs text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold gradient-text">95%</div>
                <div className="text-xs text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold gradient-text">3+</div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>
                <div className="text-center">
                <div className="text-xl font-bold gradient-text">50+</div>
                <div className="text-xs text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </div>
                  </div>
                  </div>
                </div>
  </section>
);

const TestimonialsSection = () => {
  const scrollRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.9;
    if (direction === 'left') {
      scrollRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto-scroll effect
  React.useEffect(() => {
    if (isHovered) return; // Pause on hover
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      // If at end, scroll back to start
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollTo({ left: scrollLeft + clientWidth * 0.9, behavior: 'smooth' });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="relative">
                <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-blue-100 transition hidden md:block"
            onClick={() => scroll('left')}
            aria-label="Scroll testimonials left"
                >
            <FaChevronLeft className="w-5 h-5 text-blue-500" />
                </button>
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
            style={{ scrollSnapType: 'x mandatory', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-4 md:p-8 border border-gray-100 flex flex-col items-center min-w-[90vw] max-w-[95vw] md:min-w-[320px] md:max-w-[350px] flex-shrink-0 scroll-snap-align-start mx-2"
              >
                <p className="text-lg text-gray-700 mb-6 text-center">{t.quote}</p>
                <div className="font-bold text-blue-700">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-blue-100 transition hidden md:block"
            onClick={() => scroll('right')}
            aria-label="Scroll testimonials right"
          >
            <FaChevronRight className="w-5 h-5 text-blue-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <>
    <ContactSection />
    <TestimonialsSection />
  </>
);

export default Contact;