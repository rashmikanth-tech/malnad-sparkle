import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'On average, small websites take 2-4 weeks, while larger platforms may take 2-3 months. The timeline depends on the complexity of features, design requirements, and your feedback responsiveness. We provide detailed project timelines during our initial consultation.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer 24/7 support and comprehensive maintenance packages tailored to your needs. Our support includes regular updates, security monitoring, performance optimization, bug fixes, and technical assistance to ensure your digital assets remain secure and up-to-date.'
    },
    {
      question: 'Can you work with our existing design or brand guidelines?',
      answer: 'Absolutely! We can work with your existing design systems, brand guidelines, or create something completely new from scratch. We\'re flexible and can adapt to your brand requirements while ensuring consistency across all digital touchpoints.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Google Cloud. For mobile apps, we use React Native and Flutter. We stay current with the latest technologies to deliver cutting-edge solutions.'
    },
    {
      question: 'How do you ensure project quality and timeline adherence?',
      answer: 'We follow agile development methodologies with regular check-ins, milestone reviews, and transparent communication. Our project managers provide weekly updates, and we use collaborative tools to keep you informed throughout the development process.'
    },
    {
      question: 'Do you offer digital marketing services?',
      answer: 'Yes, we provide comprehensive digital marketing services including SEO optimization, social media marketing, content strategy, PPC advertising, and analytics. Our marketing team works closely with our development team to ensure seamless integration between your digital presence and marketing goals.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-28 h-28 rounded-full bg-gradient-secondary opacity-5 floating"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 rounded-full bg-gradient-primary opacity-5 floating" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-display font-black mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Get answers to the most common questions about our services, process, and approach
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="neuro-card overflow-hidden transition-all duration-300 hover:scale-[1.01]"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 flex items-center justify-between focus:outline-none group"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4 group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  
                  <div className={`glass p-2 rounded-full transition-all duration-300 ${openItems.includes(index) ? 'bg-gradient-primary' : ''}`}>
                    {openItems.includes(index) ? (
                      <Minus className={`w-5 h-5 transition-colors duration-300 ${openItems.includes(index) ? 'text-white' : 'text-primary'}`} />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-foreground/80 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="text-center mt-16">
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Still Have Questions?
              </h3>
              <p className="text-foreground/80 mb-6">
                Don't see what you're looking for? We're here to help with any questions about your project.
              </p>
              <button 
                className="btn-modern bg-gradient-accent text-accent-foreground px-8 py-3 font-semibold hover:shadow-lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};