import React from 'react';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-image.jpg';

export const About: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-primary opacity-10 floating"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-gradient-accent opacity-10 floating" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="glass-glow rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <img 
                src={aboutImage} 
                alt="About MalnadTech - Modern technology team"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Tech Element */}
            <div className="absolute -top-4 -right-4 glass rounded-lg p-4 floating">
              <div className="text-2xl">🚀</div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 glass rounded-lg p-4">
              <div className="text-sm text-foreground/80">Since</div>
              <div className="text-xl font-bold gradient-text">2014</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-display font-black mb-4">
                About <span className="gradient-text">Us</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-6"></div>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              We are a team of passionate developers, designers, and marketers helping businesses grow with cutting-edge digital solutions.
            </p>
            
            <p className="text-foreground/70 leading-relaxed">
              Our mission is to create impactful digital products that engage customers, enhance brand value, and drive growth. With years of experience and a commitment to excellence, we deliver solutions that make a difference in the modern digital landscape.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                <span className="text-sm font-medium">Innovation First</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-secondary"></div>
                <span className="text-sm font-medium">Client Focused</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-accent"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                <span className="text-sm font-medium">Global Reach</span>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="btn-modern bg-gradient-secondary hover:shadow-lg"
              onClick={() => scrollToSection('#services')}
            >
              Discover Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};