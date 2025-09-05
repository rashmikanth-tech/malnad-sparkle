import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-primary opacity-5 floating"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-accent opacity-5 floating" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-display font-black mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="neuro-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="glass border-white/10 bg-white/5 focus:bg-white/10"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground/80">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="glass border-white/10 bg-white/5 focus:bg-white/10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Subject"
                    className="glass border-white/10 bg-white/5 focus:bg-white/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="glass border-white/10 bg-white/5 focus:bg-white/10 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full btn-modern bg-gradient-primary text-primary-foreground py-6 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="neuro-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="glass p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-foreground/70 text-sm">
                      Royal Enfield Building, Near NH Road<br />
                      Your City, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-foreground/70 text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-foreground/70 text-sm">info@malnadtech.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-foreground/70 text-sm">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="neuro-card p-6">
              <h3 className="text-xl font-bold mb-4 gradient-text">Find Us</h3>
              <div className="aspect-video rounded-lg overflow-hidden glass">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!4v1725429196430!6m8!1m7!1spCvz4RdwFBvKxrySOf33MA!2m2!1d13.9168874!2d75.0738278!3f194.83546245714945!4f-10.023533876061279!5f0.7820865974627469"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MalnadTech Office Location"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="glass-glow rounded-3xl p-8 md:p-12 text-center bg-gradient-primary">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Stay Updated with Our Newsletter
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Get the latest tech trends, project insights, and exclusive offers delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 glass border-white/20 bg-white/10 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};