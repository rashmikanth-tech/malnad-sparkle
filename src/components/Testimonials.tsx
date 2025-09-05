import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, TechVision',
      image: 'https://i.pravatar.cc/120?img=5',
      rating: 5,
      text: 'MalnadTech transformed our online presence completely. Their team is super responsive and creative! The website they built for us has increased our conversion rate by 40% and improved our brand recognition significantly.',
    },
    {
      name: 'Sarah Williams',
      role: 'Founder, SmartApps',
      image: 'https://i.pravatar.cc/120?img=12',
      rating: 5,
      text: 'The app they built for us exceeded all expectations. Clean UI, smooth performance, and very fast delivery! Our users love the intuitive interface and the engagement has increased by 60% since launch.',
    },
    {
      name: 'David Lee',
      role: 'Marketing Director, GrowthPlus',
      image: 'https://i.pravatar.cc/120?img=18',
      rating: 5,
      text: 'Our sales increased by 50% thanks to their comprehensive marketing strategies. They truly understand how to connect with our target audience and create campaigns that convert. Highly recommend their services!',
    },
    {
      name: 'Maria Garcia',
      role: 'CTO, InnovateNow',
      image: 'https://i.pravatar.cc/120?img=25',
      rating: 5,
      text: 'Their technical expertise is outstanding. They delivered a complex enterprise solution on time and within budget. The ongoing support has been exceptional, and our system performance has improved dramatically.',
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-display font-black mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-glow rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic max-w-3xl mx-auto">
                "{testimonials[currentSlide].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full border-2 border-primary/20"
                />
                <div className="text-left">
                  <div className="font-bold text-lg text-foreground">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-foreground/70">
                    {testimonials[currentSlide].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-primary w-8' 
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-sm text-foreground/70">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">150+</div>
            <div className="text-sm text-foreground/70">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5.0</div>
            <div className="text-sm text-foreground/70">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-sm text-foreground/70">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};