'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, DollarSign, Activity, ArrowUp, ArrowDown, Bell, Search, Settings } from 'lucide-react';

export default function DashboardDemo() {
  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 hidden md:flex flex-col p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Activity className="w-6 h-6" />
          </div>
          <span className="font-bold text-xl">AdminDash</span>
        </div>
        
        <nav className="space-y-2 flex-1">
          {['Dashboard', 'Analytics', 'Customers', 'Orders', 'Products', 'Settings'].map((item, i) => (
            <div key={item} className={`p-3 rounded-lg cursor-pointer flex items-center gap-3 ${i === 0 ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
              <BarChart3 className="w-5 h-5" />
              <span>{item}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <header className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center bg-gray-700 rounded-lg px-4 py-2 w-64">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none text-sm w-full" />
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full" />
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Dashboard Overview</h1>
            <p className="text-gray-400">Welcome back, here's what's happening today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard icon={<DollarSign className="text-green-400" />} label="Total Revenue" value="$45,231.89" change="+20.1%" positive />
            <StatCard icon={<Users className="text-blue-400" />} label="Active Users" value="+2350" change="+180.1%" positive />
            <StatCard icon={<BarChart3 className="text-purple-400" />} label="Sales" value="+12,234" change="+19%" positive />
            <StatCard icon={<Activity className="text-red-400" />} label="Bounce Rate" value="42.3%" change="-4.5%" positive />
          </div>

          {/* Charts Area Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 bg-gray-800 p-6 rounded-2xl border border-gray-700"
            >
              <h3 className="font-semibold mb-6">Revenue Analytics</h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {[40, 60, 45, 70, 50, 65, 80, 55, 75, 60, 90, 85].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05 }}
                    className="w-full bg-blue-600/20 hover:bg-blue-600 rounded-t-sm transition-colors relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 p-6 rounded-2xl border border-gray-700"
            >
              <h3 className="font-semibold mb-6">Recent Activity</h3>
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New order received</p>
                      <p className="text-xs text-gray-400">2 minutes ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, change, positive }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-gray-800 p-6 rounded-2xl border border-gray-700"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-700/50 rounded-lg">{icon}</div>
        <div className={`flex items-center text-xs font-medium ${positive ? 'text-green-400' : 'text-red-400'}`}>
          {positive ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
          {change}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      <p className="text-gray-400 text-sm">{label}</p>
    </motion.div>
  );
}
