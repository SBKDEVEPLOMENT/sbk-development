'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Filter, 
  Search,
  Menu,
  ChevronDown,
  Phone,
  Mail,
  X,
  Share2,
  Calendar,
  Home
} from 'lucide-react';
import { useState } from 'react';

const properties = [
  {
    id: 1,
    title: 'The Beverly Hills Estate',
    address: '1200 Benedict Canyon Dr, Beverly Hills, CA',
    price: '$14,500,000',
    beds: 6,
    baths: 8,
    sqft: '8,200',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    type: 'Villa',
    status: 'For Sale',
    coordinates: { top: '30%', left: '40%' }
  },
  {
    id: 2,
    title: 'Tribeca Penthouse Loft',
    address: '56 Leonard St, New York, NY',
    price: '$8,850,000',
    beds: 3,
    baths: 3.5,
    sqft: '3,100',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    type: 'Penthouse',
    status: 'New',
    coordinates: { top: '45%', left: '70%' }
  },
  {
    id: 3,
    title: 'Oceanfront Modern Masterpiece',
    address: '4532 North Bay Rd, Miami Beach, FL',
    price: '$22,000,000',
    beds: 7,
    baths: 9,
    sqft: '10,500',
    image: 'https://images.unsplash.com/photo-1600596542815-6ad4c727dd2d?w=800&q=80',
    type: 'Mansion',
    status: 'Featured',
    coordinates: { top: '60%', left: '30%' }
  },
  {
    id: 4,
    title: 'Minimalist Desert Retreat',
    address: '8800 Blue Jay Way, Palm Springs, CA',
    price: '$3,200,000',
    beds: 4,
    baths: 4,
    sqft: '3,500',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    type: 'Villa',
    status: 'Sold',
    coordinates: { top: '20%', left: '20%' }
  },
  {
    id: 5,
    title: 'Parisian Style Apartment',
    address: 'Upper East Side, New York, NY',
    price: '$4,100,000',
    beds: 2,
    baths: 2,
    sqft: '1,800',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    type: 'Apartment',
    status: 'For Sale',
    coordinates: { top: '40%', left: '60%' }
  }
];

export default function RealEstateDemo() {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const selectedProp = properties.find(p => p.id === selectedProperty);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      
      {/* Left Panel - Listings */}
      <div className="w-full lg:w-[600px] xl:w-[700px] flex flex-col h-full bg-white shadow-xl z-10">
        
        {/* Header */}
        <header className="px-8 py-6 border-b border-gray-100 flex-shrink-0">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="bg-black text-white p-2 rounded-lg">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight font-serif">LUXE ESTATES.</span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by city, neighborhood, or address..." 
              className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-sm border border-gray-100 p-2 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {['All', 'For Sale', 'For Rent', 'New Development', 'Sold'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors border ${
                  activeFilter === filter 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        {/* Property List */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">5 Properties Found</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
              Sort by: Recommended <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-8">
            {properties.map((property) => (
              <motion.div
                key={property.id}
                layoutId={`property-${property.id}`}
                onClick={() => setSelectedProperty(property.id)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {property.status}
                  </div>
                  <button className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold font-serif mb-1 group-hover:text-blue-900 transition-colors">{property.title}</h3>
                    <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {property.address}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-700 font-medium">
                      <span className="flex items-center gap-1"><Bed className="w-4 h-4 text-gray-400" /> {property.beds} Beds</span>
                      <span className="flex items-center gap-1"><Bath className="w-4 h-4 text-gray-400" /> {property.baths} Baths</span>
                      <span className="flex items-center gap-1"><Square className="w-4 h-4 text-gray-400" /> {property.sqft} sqft</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">{property.price}</p>
                    <p className="text-xs text-gray-400 mt-1">Est. $84k/mo</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Map Simulation */}
      <div className="hidden lg:block flex-1 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 grayscale contrast-[0.9] brightness-[1.1]">
           {/* Abstract Map Background */}
           <div className="w-full h-full bg-[#e5e7eb] relative">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             {/* Simulated Streets/Blocks */}
             <div className="absolute top-[20%] left-0 right-0 h-4 bg-white/50 rotate-3"></div>
             <div className="absolute top-0 bottom-0 left-[40%] w-4 bg-white/50 -rotate-6"></div>
           </div>
        </div>

        {/* Map Markers */}
        {properties.map((prop) => (
          <motion.div
            key={prop.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute cursor-pointer transition-transform hover:scale-110 hover:z-50 ${
              selectedProperty === prop.id ? 'z-40 scale-110' : 'z-10'
            }`}
            style={{ top: prop.coordinates.top, left: prop.coordinates.left }}
            onClick={() => setSelectedProperty(prop.id)}
          >
            <div className={`
              px-3 py-1.5 rounded-lg shadow-lg font-bold text-sm whitespace-nowrap relative
              ${selectedProperty === prop.id ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-50'}
            `}>
              {prop.price}
              <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${selectedProperty === prop.id ? 'bg-black' : 'bg-white'}`}></div>
            </div>
          </motion.div>
        ))}

        {/* Floating Action Buttons */}
        <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
          <button className="bg-white p-3 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
            <MapPin className="w-5 h-5" />
          </button>
          <button className="bg-white p-3 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
            <div className="w-5 h-5 flex items-center justify-center font-bold text-xs">3D</div>
          </button>
        </div>
      </div>

      {/* Property Details Modal Overlay */}
      <AnimatePresence>
        {selectedProperty && selectedProp && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="absolute top-0 right-0 h-full w-full md:w-[600px] bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="relative h-80">
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedProperty(null); }}
                className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/40 backdrop-blur p-2 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <img src={selectedProp.image} className="w-full h-full object-cover" alt={selectedProp.title} />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h2 className="text-3xl font-serif font-bold mb-2">{selectedProp.title}</h2>
                <p className="opacity-90 flex items-center gap-2"><MapPin className="w-4 h-4" /> {selectedProp.address}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-100">
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Price</p>
                  <p className="text-3xl font-bold">{selectedProp.price}</p>
                </div>
                <div className="flex gap-3">
                  <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <Bed className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                  <p className="font-bold">{selectedProp.beds} Beds</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <Bath className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                  <p className="font-bold">{selectedProp.baths} Baths</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl">
                  <Square className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                  <p className="font-bold">{selectedProp.sqft} sqft</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experience the epitome of luxury living in this stunning masterpiece. 
                  Featuring floor-to-ceiling windows, a chef's kitchen with top-of-the-line appliances, 
                  and a private outdoor oasis perfect for entertaining. The primary suite offers 
                  breathtaking views and a spa-like bathroom. Located in one of the most prestigious 
                  neighborhoods, this property defines modern elegance.
                </p>

                <h3 className="text-xl font-bold pt-4">Agent</h3>
                <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" alt="Agent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold">Robert Fox</p>
                    <p className="text-sm text-gray-500">Luxury Property Specialist</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-black text-white rounded-lg hover:bg-gray-800">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" /> Schedule a Tour
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}