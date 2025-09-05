import React from 'react';
import { Search, Smartphone, Laptop, Palette, Code, TrendingUp } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your visibility with powerful SEO strategies that drive organic traffic and increase conversions.',
      gradient: 'bg-gradient-primary',
      delay: '0s'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Custom apps with great UI/UX for iOS & Android that deliver exceptional user experiences.',
      gradient: 'bg-gradient-secondary',
      delay: '0.2s'
    },
    {
      icon: Laptop,
      title: 'Web Development',
      description: 'Responsive, fast, and secure websites tailored to your brand that convert visitors into customers.',
      gradient: 'bg-gradient-accent',
      delay: '0.4s'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and drive engagement.',
      gradient: 'bg-gradient-primary',
      delay: '0.6s'
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Tailored software solutions that streamline operations and boost productivity.',
      gradient: 'bg-gradient-secondary',
      delay: '0.8s'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive marketing strategies that grow your brand and reach your target audience.',
      gradient: 'bg-gradient-accent',
      delay: '1s'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-display font-black mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your business in the modern digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-hover neuro-card p-8 text-center h-full"
              style={{ animationDelay: service.delay }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 w-16 h-16 mx-auto rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="inline-flex items-center text-primary hover:text-primary-glow transition-colors duration-300 font-medium">
                Learn More
                <svg 
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Transform Your Business?
            </h3>
            <p className="text-foreground/80 mb-6">
              Let's discuss how we can help you achieve your digital goals with our comprehensive services.
            </p>
            <button 
              className="btn-modern bg-gradient-primary text-primary-foreground px-8 py-3 font-semibold hover:shadow-lg"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};