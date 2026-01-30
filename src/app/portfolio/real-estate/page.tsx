'use client';

import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Heart, Filter } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern Villa with Pool',
    location: 'Beverly Hills, CA',
    price: '$4,500,000',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    tag: 'Luxury'
  },
  {
    id: 2,
    title: 'Downtown Penthouse',
    location: 'New York, NY',
    price: '$2,850,000',
    beds: 3,
    baths: 2,
    sqft: '2,100',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    tag: 'New'
  },
  {
    id: 3,
    title: 'Seaside Mansion',
    location: 'Miami, FL',
    price: '$6,200,000',
    beds: 6,
    baths: 6,
    sqft: '5,500',
    image: 'https://images.unsplash.com/photo-1600596542815-6ad4c727dd2d?w=800&q=80',
    tag: 'Featured'
  },
  {
    id: 4,
    title: 'Modern Loft',
    location: 'San Francisco, CA',
    price: '$1,200,000',
    beds: 2,
    baths: 2,
    sqft: '1,500',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    tag: 'Sold'
  }
];

export default function RealEstateDemo() {
  return (
    <div className="bg-white min-h-screen text-gray-900 pb-20">
      {/* Header with Search */}
      <div className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight">LUXE ESTATES</h1>
            <button className="text-sm font-medium hover:text-gray-300">Sign In</button>
          </div>
          <h2 className="text-4xl font-bold mb-6">Find Your Dream Home</h2>
          
          <div className="bg-white p-2 rounded-lg flex flex-col md:flex-row gap-2 max-w-4xl">
            <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Location</label>
              <input type="text" placeholder="City, Neighborhood..." className="w-full text-black focus:outline-none font-medium" />
            </div>
            <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-200">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Property Type</label>
              <select className="w-full text-black focus:outline-none font-medium bg-transparent">
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
            </div>
            <div className="flex-1 px-4 py-3">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Price Range</label>
              <select className="w-full text-black focus:outline-none font-medium bg-transparent">
                <option>$500k - $1M</option>
                <option>$1M - $5M</option>
                <option>$5M+</option>
              </select>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-md font-bold transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Listings */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">Featured Properties</h3>
          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {properties.map((property) => (
            <motion.div 
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={property.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={property.title} />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {property.tag}
                </div>
                <button className="absolute top-4 right-4 bg-white/20 hover:bg-white p-2 rounded-full backdrop-blur-sm transition-colors text-white hover:text-red-500">
                  <Heart className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-20">
                  <p className="text-white text-2xl font-bold">{property.price}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold mb-1">{property.title}</h4>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Bed className="w-4 h-4" /> {property.beds} Beds
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4" /> {property.baths} Baths
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4" /> {property.sqft} sqft
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
