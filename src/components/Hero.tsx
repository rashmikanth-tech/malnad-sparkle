import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

export const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Websites', 'Apps', 'Brands', 'Marketing', 'Experiences'];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < texts[currentIndex].length) {
          setCurrentText(texts[currentIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(texts[currentIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
          setCharIndex(0);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, currentIndex, isDeleting, texts]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 15, 25, 0.8), rgba(15, 15, 25, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="particles-bg"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-primary opacity-20 floating" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-gradient-secondary opacity-20 floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-gradient-accent opacity-20 floating" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-gradient-primary opacity-15 floating" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center z-10 relative">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-hero mb-6 font-black text-shimmer">
            We Build{' '}
            <span className="gradient-text relative">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into digital reality with cutting-edge technology and 2025-level design
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="btn-modern bg-gradient-primary text-primary-foreground hover:shadow-2xl px-8 py-6 text-lg font-semibold animate-pulse-glow"
              onClick={() => scrollToSection('#services')}
            >
              Explore Services
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="glass border-white/20 text-foreground hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              onClick={() => scrollToSection('#portfolio')}
            >
              View Portfolio
            </Button>
          </div>
          
          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="glass rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold gradient-text">10+</div>
              <div className="text-sm text-foreground/60">Years Experience</div>
            </div>
            <div className="glass rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold gradient-text">150+</div>
              <div className="text-sm text-foreground/60">Projects Delivered</div>
            </div>
            <div className="glass rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold gradient-text">100+</div>
              <div className="text-sm text-foreground/60">Happy Clients</div>
            </div>
            <div className="glass rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-foreground/60">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};