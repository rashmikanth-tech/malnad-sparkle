import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Emma Brown',
      role: 'UI/UX Designer',
      image: 'https://i.pravatar.cc/400?img=32',
      description: 'Creative visionary with 8+ years in digital design. Specializes in user-centered design and modern interfaces.',
      skills: ['Figma', 'Adobe CC', 'Prototyping', 'User Research'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      delay: '0s'
    },
    {
      name: 'Liam Johnson',
      role: 'Full Stack Developer',
      image: 'https://i.pravatar.cc/400?img=47',
      description: 'Tech enthusiast who loves building scalable applications. Expert in modern web technologies and cloud architecture.',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      delay: '0.2s'
    },
    {
      name: 'Sophia Miller',
      role: 'Marketing Head',
      image: 'https://i.pravatar.cc/400?img=14',
      description: 'Strategic marketer with proven track record in digital campaigns. Passionate about data-driven growth strategies.',
      skills: ['SEO', 'Analytics', 'Strategy', 'Content Marketing'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      delay: '0.4s'
    },
    {
      name: 'James Wilson',
      role: 'Project Manager',
      image: 'https://i.pravatar.cc/400?img=56',
      description: 'Agile project management expert ensuring smooth delivery. Focuses on client satisfaction and team productivity.',
      skills: ['Agile', 'Leadership', 'Communication', 'Planning'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      },
      delay: '0.6s'
    }
  ];

  return (
    <section id="team" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-display font-black mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life with expertise and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group text-center"
              style={{ animationDelay: member.delay }}
            >
              {/* Card */}
              <div className="neuro-card p-6 hover:scale-105 transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay with Social Links */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                      <div className="flex gap-3">
                        <a href={member.social.linkedin} className="glass p-2 rounded-lg hover:bg-primary/20 transition-colors">
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                        <a href={member.social.twitter} className="glass p-2 rounded-lg hover:bg-primary/20 transition-colors">
                          <Twitter className="w-4 h-4 text-white" />
                        </a>
                        <a href={member.social.github} className="glass p-2 rounded-lg hover:bg-primary/20 transition-colors">
                          <Github className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Role Badge */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <span className="glass px-3 py-1 text-xs font-medium bg-gradient-primary text-white rounded-full">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-muted/30 text-foreground/80 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Join Our Team
            </h3>
            <p className="text-foreground/80 mb-6">
              We're always looking for talented individuals to join our growing team. Let's build the future together.
            </p>
            <button className="btn-modern bg-gradient-secondary text-secondary-foreground px-6 py-3 font-semibold hover:shadow-lg">
              View Careers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};