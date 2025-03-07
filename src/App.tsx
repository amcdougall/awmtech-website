import React, { useState } from 'react';
import { ArrowRight, BarChart2, Globe2, Lightbulb, Users2 } from 'lucide-react';
import { FusionLogo } from './components/FusionLogo';

function App() {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    window.location.href = `mailto:andrew.mcdougall@awmtechnologies.io?subject=Contact from ${formData.firstName}&body=Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <nav className="absolute top-0 left-0 right-0 z-10">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-white text-2xl font-bold">
                <FusionLogo size={32} className="text-white" />
                <span>AWM Technologies</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="text-white hover:text-blue-400 transition">Services</a>
                <a href="/about" className="text-white hover:text-blue-400 transition">About</a>
                <a href="#solutions" className="text-white hover:text-blue-400 transition">Solutions</a>
                <a href="#contact" className="text-white hover:text-blue-400 transition">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transforming Businesses Through Technology
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We help organizations evolve, innovate, and thrive in the digital age through cutting-edge solutions and strategic consulting.
            </p>
            <button className="bg-transparent text-white px-8 py-3 rounded-full flex items-center space-x-2 border-2 border-white hover:bg-white hover:text-black transition">
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Globe2 size={32} style={{ color: '#6DB33F' }} />,
                title: "Digital Transformation",
                description: "Modernize your business with cutting-edge digital solutions",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              },
              {
                icon: <BarChart2 size={32} style={{ color: '#6DB33F' }} />,
                title: "Data Analytics",
                description: "Transform your data into actionable insights",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              },
              {
                icon: <Users2 size={32} style={{ color: '#6DB33F' }} />,
                title: "Consulting",
                description: "Strategic guidance for your business growth",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div 
                  className="h-48 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${service.image})`
                  }}
                />
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl font-semibold mb-8">About our company</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              With a commitment to delivering tailored solutions and actionable insights, our consulting firm empowers businesses to unlock their full potential and achieve sustainable growth. We bring a wealth of expertise and dedication to understanding and meeting the unique needs of each client.
            </p>
            <a 
              href="/about"
              className="mt-8 bg-transparent text-black px-8 py-3 rounded-full flex items-center space-x-2 border-2 border-black hover:bg-black hover:text-white transition mx-auto inline-flex"
            >
              <span>Learn More</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20" style={{ backgroundColor: '#6DB33F' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Solutions</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Lightbulb size={32} />,
                title: "Innovation Labs",
                description: "Exploring cutting-edge technologies"
              },
              {
                icon: <Globe2 size={32} />,
                title: "Cloud Services",
                description: "Scalable cloud infrastructure"
              },
              {
                icon: <Users2 size={32} />,
                title: "Team Augmentation",
                description: "Expert talent solutions"
              },
              {
                icon: <BarChart2 size={32} />,
                title: "Business Intelligence",
                description: "Data-driven insights"
              }
            ].map((solution, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center text-white">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{solution.title}</h3>
                <p className="text-white/90">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-gray-600 mb-8">
              Ready to transform your business? Get in touch with us to discuss how we can help you achieve your goals.
            </p>
            <button 
              onClick={() => setIsContactFormVisible(!isContactFormVisible)}
              className="bg-transparent text-black px-8 py-3 rounded-full flex items-center space-x-2 border-2 border-black hover:bg-black hover:text-white transition mx-auto"
            >
              <span>Contact Us</span>
              <ArrowRight size={20} />
            </button>

            <div className={`mt-12 transition-all duration-500 ease-in-out overflow-hidden ${isContactFormVisible ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 mb-8">
                  Interested in working together? Fill out some info and we will be in touch shortly. We can't wait to hear from you!
                </p>
                <form onSubmit={handleSubmit} className="text-left">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AWM Technologies</h3>
              <p className="text-gray-400">
                Transforming businesses through innovative technology solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Digital Transformation</li>
                <li>Data Analytics</li>
                <li>Consulting</li>
                <li>Cloud Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li>Careers</li>
                <li><a href="/blog" className="hover:text-white transition">News</a></li>
                <li><a href="/#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#linkedin" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#twitter" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#facebook" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#instagram" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AWM Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;