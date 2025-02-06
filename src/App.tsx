import React from 'react';
import { ArrowRight, BarChart2, Globe2, Lightbulb, Users2 } from 'lucide-react';
import { FusionLogo } from './components/FusionLogo';

function App() {
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
                <span>AWMTechnologies</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="text-white hover:text-blue-400 transition">Services</a>
                <a href="#about" className="text-white hover:text-blue-400 transition">About</a>
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
                description: "Modernize your business with cutting-edge digital solutions"
              },
              {
                icon: <BarChart2 size={32} style={{ color: '#6DB33F' }} />,
                title: "Data Analytics",
                description: "Transform your data into actionable insights"
              },
              {
                icon: <Users2 size={32} style={{ color: '#6DB33F' }} />,
                title: "Consulting",
                description: "Strategic guidance for your business growth"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600">
                We are a forward-thinking technology company dedicated to helping businesses navigate the complexities of digital transformation. With years of experience and a team of expert professionals, we deliver innovative solutions that drive growth and efficiency.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Team collaboration" 
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
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
            <button className="bg-transparent text-black px-8 py-3 rounded-full flex items-center space-x-2 border-2 border-black hover:bg-black hover:text-white transition mx-auto">
              <span>Contact Us</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AWMTechnologies</h3>
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
                <li>About Us</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AWMTechnologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;