import React, { useState } from 'react';
import {
  Menu,
  X,
  ShoppingBag,
  Shield,
  Trophy,
  Users,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-navy-600" />
              <span className="ml-2 text-xl font-bold text-navy-600">Premium Footballs</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-navy-600 hover:text-navy-800">Products</a>
              <a href="#process" className="text-navy-600 hover:text-navy-800">Process</a>
              <a href="#testimonials" className="text-navy-600 hover:text-navy-800">Testimonials</a>
              <a href="#contact" className="text-navy-600 hover:text-navy-800">Contact</a>
              <button className="btn-primary">Shop Now</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-navy-600 hover:text-navy-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#products" className="block px-3 py-2 text-navy-600 hover:text-navy-800">Products</a>
              <a href="#process" className="block px-3 py-2 text-navy-600 hover:text-navy-800">Process</a>
              <a href="#testimonials" className="block px-3 py-2 text-navy-600 hover:text-navy-800">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-navy-600 hover:text-navy-800">Contact</a>
              <button className="w-full btn-primary mt-4">Shop Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-b from-navy-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-navy-800 mb-6">
                Crafting Excellence Since 1975
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Experience the perfect blend of tradition and innovation with our premium, 
                regulation-standard footballs. Hand-crafted for professionals, loved by all.
              </p>
              <div className="flex space-x-4">
                <button className="btn-primary">Explore Collection</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80"
                alt="Premium Football"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white" id="features">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy-800 mb-12">
            Crafted for Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-navy-50 rounded-lg">
              <Shield className="h-12 w-12 text-navy-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
              <p className="text-gray-600">
                Full-grain leather sourced from select tanneries, ensuring superior grip and durability.
              </p>
            </div>
            <div className="p-6 bg-navy-50 rounded-lg">
              <Trophy className="h-12 w-12 text-navy-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professional Grade</h3>
              <p className="text-gray-600">
                Meeting and exceeding all official league specifications and standards.
              </p>
            </div>
            <div className="p-6 bg-navy-50 rounded-lg">
              <Users className="h-12 w-12 text-navy-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Branding</h3>
              <p className="text-gray-600">
                Personalized team logos and colors available for bulk orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="section-padding bg-navy-50" id="process">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-navy-800 mb-12">
            Our Crafting Process
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1610456074710-81b2bd3ba7c8?auto=format&fit=crop&q=80"
              alt="Manufacturing Process"
              className="rounded-lg shadow-xl"
            />
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Material Selection</h3>
                  <p className="text-gray-600">Premium full-grain leather carefully selected for optimal performance.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Cutting & Preparation</h3>
                  <p className="text-gray-600">Precise cutting and shaping by master craftsmen.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Hand Stitching</h3>
                  <p className="text-gray-600">Traditional techniques ensuring durability and perfect shape.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Quality Control</h3>
                  <p className="text-gray-600">Rigorous testing meeting professional standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Interested in bulk orders or have questions? Our team is here to help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-navy-600 mr-2" />
                  <span>123 Craft Street, Leather District, CA 90210</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-navy-600 mr-2" />
                  <span>contact@premiumfootballs.com</span>
                </div>
              </div>
              <div className="mt-8 flex space-x-4">
                <Facebook className="h-6 w-6 text-navy-600 cursor-pointer" />
                <Twitter className="h-6 w-6 text-navy-600 cursor-pointer" />
                <Instagram className="h-6 w-6 text-navy-600 cursor-pointer" />
                <Youtube className="h-6 w-6 text-navy-600 cursor-pointer" />
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy-500 focus:ring-navy-500"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-navy-200">
                Crafting premium footballs since 1975, setting the standard for professional quality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#products" className="text-navy-200 hover:text-white">Products</a></li>
                <li><a href="#process" className="text-navy-200 hover:text-white">Process</a></li>
                <li><a href="#testimonials" className="text-navy-200 hover:text-white">Testimonials</a></li>
                <li><a href="#contact" className="text-navy-200 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-navy-200 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-navy-200 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-navy-200 hover:text-white">Shipping Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-navy-200 mb-4">Stay updated with our latest products and news.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
                />
                <button className="px-4 py-2 bg-brown-600 rounded-r-md hover:bg-brown-700">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-navy-700 text-center text-navy-200">
            <p>&copy; 2024 Premium Footballs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;