'use client';

import { motion } from 'framer-motion';
import { CreditCard, ArrowUpRight, ArrowDownLeft, Wallet, PieChart, MoreHorizontal, Send, Plus } from 'lucide-react';

export default function FintechDemo() {
  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center p-4 md:p-8">
      {/* Mobile-first App Container */}
      <div className="w-full max-w-md bg-gray-900 rounded-[3rem] overflow-hidden border-8 border-gray-800 shadow-2xl relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>

        {/* App Content */}
        <div className="h-[800px] overflow-y-auto hide-scrollbar bg-gradient-to-br from-gray-900 to-black p-6 pt-12">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-700 rounded-full overflow-hidden border-2 border-white/20">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Welcome back</p>
                <p className="font-bold">Alex Morgan</p>
              </div>
            </div>
            <div className="p-2 bg-gray-800 rounded-full">
              <MoreHorizontal className="w-5 h-5" />
            </div>
          </div>

          {/* Balance Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-3xl mb-8 shadow-lg shadow-blue-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
            <p className="text-blue-100 text-sm mb-1">Total Balance</p>
            <h2 className="text-3xl font-bold mb-6">$42,593.00</h2>
            
            <div className="flex justify-between items-end">
              <div className="flex gap-2">
                <div className="w-8 h-5 bg-white/20 rounded-sm"></div>
                <div className="w-5 h-5 bg-white/20 rounded-full"></div>
              </div>
              <p className="font-mono text-sm text-blue-100">**** 4589</p>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <div className="flex justify-between gap-4 mb-8">
            <ActionButton icon={<Send className="w-5 h-5" />} label="Send" />
            <ActionButton icon={<Plus className="w-5 h-5" />} label="Top Up" />
            <ActionButton icon={<PieChart className="w-5 h-5" />} label="Stats" />
            <ActionButton icon={<MoreHorizontal className="w-5 h-5" />} label="More" />
          </div>

          {/* Transactions */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Transactions</h3>
              <a href="#" className="text-blue-400 text-sm">See All</a>
            </div>

            <div className="space-y-4">
              <TransactionItem 
                icon={<div className="bg-orange-500/20 p-2 rounded-full"><Wallet className="w-5 h-5 text-orange-500" /></div>}
                title="Netflix Subscription"
                subtitle="Entertainment"
                amount="-$15.99"
              />
              <TransactionItem 
                icon={<div className="bg-green-500/20 p-2 rounded-full"><ArrowDownLeft className="w-5 h-5 text-green-500" /></div>}
                title="Salary Received"
                subtitle="Upwork Inc."
                amount="+$3,450.00"
                positive
              />
               <TransactionItem 
                icon={<div className="bg-purple-500/20 p-2 rounded-full"><CreditCard className="w-5 h-5 text-purple-500" /></div>}
                title="Apple Store"
                subtitle="Electronics"
                amount="-$999.00"
              />
               <TransactionItem 
                icon={<div className="bg-blue-500/20 p-2 rounded-full"><Wallet className="w-5 h-5 text-blue-500" /></div>}
                title="Uber Ride"
                subtitle="Transport"
                amount="-$24.50"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, label }: any) {
  return (
    <div className="flex flex-col items-center gap-2">
      <button className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gray-700 transition-colors">
        {icon}
      </button>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
}

function TransactionItem({ icon, title, subtitle, amount, positive }: any) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>
      <span className={`font-bold ${positive ? 'text-green-400' : 'text-white'}`}>{amount}</span>
    </div>
  );
}
