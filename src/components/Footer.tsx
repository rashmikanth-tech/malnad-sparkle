import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-cosmic border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="particles-bg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-4">MalnadTech</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We provide innovative IT solutions, web development, and digital strategies to help businesses thrive in the modern digital landscape.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="glass p-3 rounded-lg hover:bg-primary/20 transition-colors group">
                  <Facebook className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                </a>
                <a href="#" className="glass p-3 rounded-lg hover:bg-primary/20 transition-colors group">
                  <Twitter className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                </a>
                <a href="#" className="glass p-3 rounded-lg hover:bg-primary/20 transition-colors group">
                  <Linkedin className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                </a>
                <a href="#" className="glass p-3 rounded-lg hover:bg-primary/20 transition-colors group">
                  <Instagram className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'About Us', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Portfolio', href: '#portfolio' },
                  { label: 'Team', href: '#team' },
                  { label: 'Contact', href: '#contact' }
                ].map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-foreground">Services</h4>
              <ul className="space-y-3">
                {[
                  'Web Development',
                  'Mobile Apps',
                  'UI/UX Design',
                  'Digital Marketing',
                  'SEO Optimization',
                  'Custom Software'
                ].map((service) => (
                  <li key={service}>
                    <span className="text-foreground/70 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-foreground">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      Royal Enfield Building, Near NH Road<br />
                      Your City, Karnataka
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">+91 98765 43210</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">info@malnadtech.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-foreground/70 text-sm text-center md:text-left">
            © {currentYear} MalnadTech. All rights reserved. | 
            <span className="text-foreground/50 ml-2">
              Built with ❤️ using modern technologies
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              className="text-foreground/70 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </button>
            <button 
              className="text-foreground/70 hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </button>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="glass p-2 rounded-lg hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Back to Top - Mobile */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 glass-glow p-4 rounded-full hover:scale-110 transition-all duration-300 z-50 md:hidden"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-primary" />
      </button>
    </footer>
  );
};