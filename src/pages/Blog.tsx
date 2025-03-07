import React from 'react';
import { ArrowRight, Rss } from 'lucide-react';
import { FusionLogo } from '../components/FusionLogo';

export default function Blog() {
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
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h1 className="text-4xl font-bold">AWM Technologies Blog</h1>
              <a 
                href="/rss.xml" 
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition"
              >
                <Rss size={20} />
                <span>RSS Feed</span>
              </a>
            </div>

            <div className="flex space-x-8 mb-12">
              <a 
                href="#all-posts"
                className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition border-b-2 border-black"
              >
                All Posts
              </a>
              <a 
                href="#news-events"
                className="text-lg font-semibold text-gray-600 hover:text-blue-600 transition"
              >
                News and Events
              </a>
            </div>

            <div className="space-y-12">
              {/* Placeholder for blog posts - you can replace this with actual content */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <p className="text-gray-500 mb-2">March 15, 2024</p>
                <h2 className="text-2xl font-bold mb-4">Latest Innovations in Digital Transformation</h2>
                <p className="text-gray-700 mb-4">
                  Discover how businesses are leveraging cutting-edge technologies to transform their operations and drive growth.
                </p>
                <a 
                  href="#read-more"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition"
                >
                  <span>Read More</span>
                  <ArrowRight size={20} />
                </a>
              </div>
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