import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Built a scalable online store with secure payments & smooth UX that increased conversions by 40%.',
      image: 'https://picsum.photos/600/400?tech=1',
      category: 'Web Development',
      tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      delay: '0s'
    },
    {
      title: 'Fitness Mobile App',
      description: 'Created a fitness app with real-time tracking & gamification features for iOS and Android.',
      image: 'https://picsum.photos/600/400?mobile=1',
      category: 'Mobile App',
      tech: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      delay: '0.2s'
    },
    {
      title: 'Brand Identity & Marketing',
      description: 'Designed impactful campaigns that boosted engagement by 50% and increased brand recognition.',
      image: 'https://picsum.photos/600/400?design=1',
      category: 'Branding',
      tech: ['Figma', 'Adobe CC', 'Strategy', 'Analytics'],
      delay: '0.4s'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Developed a comprehensive analytics dashboard with real-time data visualization.',
      image: 'https://picsum.photos/600/400?dashboard=1',
      category: 'Web App',
      tech: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      delay: '0.6s'
    },
    {
      title: 'AI-Powered Platform',
      description: 'Built an AI-driven platform for automated content generation and optimization.',
      image: 'https://picsum.photos/600/400?ai=1',
      category: 'AI/ML',
      tech: ['React', 'TensorFlow', 'Python', 'AWS'],
      delay: '0.8s'
    },
    {
      title: 'Blockchain Solution',
      description: 'Created a decentralized application for secure transactions and smart contracts.',
      image: 'https://picsum.photos/600/400?blockchain=1',
      category: 'Blockchain',
      tech: ['Solidity', 'Web3.js', 'Ethereum', 'IPFS'],
      delay: '1s'
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-gradient-secondary opacity-5 floating"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-accent opacity-5 floating" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-display font-black mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover our latest projects that showcase innovation, creativity, and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden neuro-card hover:scale-105 transition-all duration-500"
              style={{ animationDelay: project.delay }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <button className="glass p-2 rounded-lg hover:bg-white/20 transition-colors">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </button>
                      <button className="glass p-2 rounded-lg hover:bg-white/20 transition-colors">
                        <Github className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="glass px-3 py-1 text-xs font-medium text-white/90 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-muted/50 text-foreground/80 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            className="btn-modern bg-gradient-accent text-accent-foreground px-8 py-4 font-semibold hover:shadow-xl"
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
    </section>
  );
};