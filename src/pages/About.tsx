import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FusionLogo } from '../components/FusionLogo';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-gray-900">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2 text-white text-2xl font-bold">
              <FusionLogo size={32} className="text-white" />
              <span>AWM Technologies</span>
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="/#services" className="text-white hover:text-blue-400 transition">Services</a>
              <a href="/about" className="text-white hover:text-blue-400 transition">About</a>
              <a href="/#solutions" className="text-white hover:text-blue-400 transition">Solutions</a>
              <a href="/#contact" className="text-white hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Who We Are</h1>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 text-lg mb-6">
                We are a forward-thinking technology company dedicated to helping business navigate the complexities of digital transformation. With years of experience, we deliver innovative solutions that drive growth and efficiency.
              </p>
              <p className="text-gray-700 text-lg mb-8">
                Get in touch today to discuss how we can provide tailored solutions to drive your business forward.
              </p>
              <a 
                href="/#contact"
                className="inline-flex items-center space-x-2 text-black hover:text-gray-600 transition"
              >
                <span>Contact Us</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-auto">
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
            <p>&copy; 2024 AWM Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}