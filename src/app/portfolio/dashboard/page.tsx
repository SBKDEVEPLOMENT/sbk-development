'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  Activity, 
  Bell, 
  Search, 
  Settings,
  Truck,
  Package,
  Map,
  FileText,
  AlertCircle,
  CheckCircle2,
  Clock,
  MoreHorizontal,
  Download,
  Filter
} from 'lucide-react';
import { useState } from 'react';

// Mock Data
const shipments = [
  { id: 'SHP-2024-001', origin: 'Shanghai, CN', dest: 'Los Angeles, US', status: 'In Transit', progress: 65, eta: '2 Oct, 2024', value: '$124,500' },
  { id: 'SHP-2024-002', origin: 'Hamburg, DE', dest: 'New York, US', status: 'Customs', progress: 90, eta: '28 Sep, 2024', value: '$85,200' },
  { id: 'SHP-2024-003', origin: 'Tokyo, JP', dest: 'Singapore, SG', status: 'Delivered', progress: 100, eta: '25 Sep, 2024', value: '$210,000' },
  { id: 'SHP-2024-004', origin: 'Mumbai, IN', dest: 'Dubai, UAE', status: 'Pending', progress: 10, eta: '5 Oct, 2024', value: '$45,000' },
  { id: 'SHP-2024-005', origin: 'London, UK', dest: 'Toronto, CA', status: 'In Transit', progress: 45, eta: '3 Oct, 2024', value: '$98,400' },
  { id: 'SHP-2024-006', origin: 'Sydney, AU', dest: 'Perth, AU', status: 'Warning', progress: 30, eta: 'Delayed', value: '$12,300' },
];

const stats = [
  { label: 'Total Shipments', value: '1,284', change: '+12.5%', icon: Truck, color: 'text-blue-500' },
  { label: 'Active Revenue', value: '$4.2M', change: '+8.2%', icon: DollarSign, color: 'text-green-500' },
  { label: 'On-Time Delivery', value: '98.5%', change: '+1.2%', icon: CheckCircle2, color: 'text-purple-500' },
  { label: 'Critical Issues', value: '3', change: '-2', icon: AlertCircle, color: 'text-red-500' },
];

export default function LogisticsDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedShipment, setSelectedShipment] = useState<string | null>(null);

  return (
    <div className="flex h-screen bg-[#0F172A] text-slate-300 font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-20 lg:w-64 bg-[#1E293B] border-r border-slate-800 flex-shrink-0 flex flex-col transition-all duration-300">
        <div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-slate-800">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="ml-3 font-bold text-white text-lg hidden lg:block tracking-tight">LogiTech</span>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-2">
          {['Overview', 'Shipments', 'Fleet Map', 'Analytics', 'Documents', 'Settings'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`w-full flex items-center p-3 rounded-xl transition-all group ${
                activeTab === item 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item === 'Overview' && <BarChart3 className="w-5 h-5" />}
              {item === 'Shipments' && <Package className="w-5 h-5" />}
              {item === 'Fleet Map' && <Map className="w-5 h-5" />}
              {item === 'Analytics' && <Activity className="w-5 h-5" />}
              {item === 'Documents' && <FileText className="w-5 h-5" />}
              {item === 'Settings' && <Settings className="w-5 h-5" />}
              <span className="ml-3 font-medium hidden lg:block">{item}</span>
              {activeTab === item && (
                <motion.div 
                  layoutId="active-pill"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-white hidden lg:block"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs">
              JD
            </div>
            <div className="hidden lg:block overflow-hidden">
              <p className="text-sm font-medium text-white truncate">John Doe</p>
              <p className="text-xs text-slate-500 truncate">Logistics Manager</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Header */}
        <header className="h-16 bg-[#1E293B]/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
            <span className="text-white">Dashboard</span>
            <span>/</span>
            <span>Overview</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-slate-800 rounded-lg px-3 py-1.5 border border-slate-700 focus-within:border-blue-500 transition-colors w-64">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search shipment ID..." 
                className="bg-transparent border-none outline-none text-sm text-white ml-2 w-full placeholder:text-slate-500"
              />
            </div>
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </button>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Header Text */}
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Global Logistics Overview</h1>
                <p className="text-slate-500">Real-time monitoring of fleet operations and supply chain performance.</p>
              </div>
              <button className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-blue-900/20">
                <Download className="w-4 h-4" /> Export Report
              </button>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#1E293B] border border-slate-800 p-6 rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                    <stat.icon className={`w-24 h-24 ${stat.color}`} />
                  </div>
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 border border-slate-700 group-hover:border-slate-600 transition-colors`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <p className="text-slate-400 font-medium text-sm mb-1">{stat.label}</p>
                    <div className="flex items-end gap-3">
                      <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full bg-slate-800 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map & Live Feed Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Simulated Map */}
              <div className="lg:col-span-2 bg-[#1E293B] border border-slate-800 rounded-2xl overflow-hidden min-h-[400px] relative group">
                <div className="absolute inset-0 bg-[#0F172A] opacity-50 z-10 group-hover:opacity-40 transition-opacity" />
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80" 
                  alt="World Map" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 z-20 p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white text-lg bg-slate-900/80 px-4 py-2 rounded-lg backdrop-blur">Live Fleet Tracking</h3>
                    <div className="flex gap-2">
                      <button className="p-2 bg-slate-900/80 rounded-lg text-white hover:bg-blue-600 transition-colors">
                        <Map className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Map Markers Simulation */}
                  {[
                    { t: '20%', l: '30%', city: 'New York' },
                    { t: '40%', l: '60%', city: 'Dubai' },
                    { t: '35%', l: '80%', city: 'Tokyo' },
                    { t: '70%', l: '20%', city: 'São Paulo' },
                  ].map((marker, i) => (
                    <div 
                      key={i}
                      className="absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-[0_0_15px_rgba(59,130,246,0.8)] cursor-pointer hover:scale-150 transition-transform"
                      style={{ top: marker.t, left: marker.l }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                        {marker.city}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Feed */}
              <div className="bg-[#1E293B] border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold text-white text-lg mb-6">Recent Alerts</h3>
                <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                  {[
                    { title: 'Shipment #2394 Delayed', time: '10 min ago', type: 'warning', desc: 'Customs clearance pending at Rotterdam Port.' },
                    { title: 'New Route Optimized', time: '45 min ago', type: 'success', desc: 'AI saved 14% fuel on Atlantic route.' },
                    { title: 'Driver Check-in', time: '2h ago', type: 'info', desc: 'Fleet #882 arrived at warehouse B.' },
                    { title: 'Maintenance Required', time: '4h ago', type: 'error', desc: 'Vehicle TR-99 reporting engine heat warning.' },
                  ].map((event, i) => (
                    <div key={i} className="relative pl-8">
                      <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-[#1E293B] ${
                        event.type === 'warning' ? 'bg-amber-500' :
                        event.type === 'success' ? 'bg-green-500' :
                        event.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                      }`} />
                      <h4 className="text-white font-medium text-sm">{event.title}</h4>
                      <p className="text-slate-400 text-xs mt-1">{event.desc}</p>
                      <span className="text-slate-600 text-[10px] mt-2 block">{event.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-[#1E293B] border border-slate-800 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h3 className="font-bold text-white text-lg">Active Shipments</h3>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700 text-slate-400 text-sm hover:text-white hover:border-slate-500 transition-colors">
                    <Filter className="w-4 h-4" /> Filter
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors">
                    Add Shipment
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-400">
                  <thead className="bg-slate-900/50 text-xs uppercase font-medium text-slate-500">
                    <tr>
                      <th className="px-6 py-4">ID</th>
                      <th className="px-6 py-4">Route</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Progress</th>
                      <th className="px-6 py-4">Value</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {shipments.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-800/50 transition-colors cursor-pointer group">
                        <td className="px-6 py-4 font-medium text-white">{row.id}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-300">{row.origin}</span>
                            <span className="text-slate-600">→</span>
                            <span className="text-slate-300">{row.dest}</span>
                          </div>
                          <span className="text-xs text-slate-500">ETA: {row.eta}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                            row.status === 'In Transit' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                            row.status === 'Delivered' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                            row.status === 'Warning' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                            'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 max-w-[150px]">
                          <div className="w-full bg-slate-700 rounded-full h-1.5 mb-2">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${row.progress}%` }}></div>
                          </div>
                          <span className="text-xs text-slate-500">{row.progress}% Complete</span>
                        </td>
                        <td className="px-6 py-4 text-white font-medium">{row.value}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}