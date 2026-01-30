'use client';

import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Activity, 
  MessageSquare, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  MoreVertical,
  Clock,
  FileText,
  Video
} from 'lucide-react';
import { useState } from 'react';

// Mock Data
const stats = [
  { title: 'Pacientes Totales', value: '1,284', change: '+12%', icon: Users, color: 'bg-blue-500' },
  { title: 'Citas Hoy', value: '42', change: '+4', icon: Calendar, color: 'bg-green-500' },
  { title: 'Consultas Activas', value: '8', change: '-2', icon: Video, color: 'bg-purple-500' },
  { title: 'Ingresos (Mes)', value: '$124.5k', change: '+8%', icon: Activity, color: 'bg-indigo-500' },
];

const appointments = [
  { id: 1, patient: 'Ana García', type: 'Consulta General', time: '09:00 AM', status: 'En Progreso', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
  { id: 2, patient: 'Carlos Ruiz', type: 'Cardiología', time: '10:30 AM', status: 'Pendiente', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80' },
  { id: 3, patient: 'María Lopez', type: 'Revisión Anual', time: '11:15 AM', status: 'Confirmado', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80' },
  { id: 4, patient: 'Juan Pérez', type: 'Urgencia', time: '12:00 PM', status: 'En Espera', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80' },
];

const recentPatients = [
  { name: 'Elena Torres', id: '#PT-2024-001', condition: 'Hipertensión', lastVisit: '2 Oct, 2024' },
  { name: 'Miguel Ángel', id: '#PT-2024-002', condition: 'Diabetes T2', lastVisit: '1 Oct, 2024' },
  { name: 'Laura Díaz', id: '#PT-2024-003', condition: 'Migraña Crónica', lastVisit: '28 Sep, 2024' },
];

export default function MedicalSaaS() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        className={`bg-white border-r border-slate-200 z-20 flex-shrink-0 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          {isSidebarOpen && <span className="font-bold text-xl text-slate-800">MediCare+</span>}
        </div>

        <nav className="mt-6 px-4 space-y-2">
          {[
            { name: 'Dashboard', icon: Activity },
            { name: 'Pacientes', icon: Users },
            { name: 'Agenda', icon: Calendar },
            { name: 'Telemedicina', icon: Video },
            { name: 'Mensajes', icon: MessageSquare },
            { name: 'Reportes', icon: FileText },
            { name: 'Ajustes', icon: Settings },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.name 
                  ? 'bg-blue-50 text-blue-600 shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {isSidebarOpen && <span className="font-medium">{item.name}</span>}
            </button>
          ))}
        </nav>

        {/* User Profile Snippet */}
        <div className="absolute bottom-0 w-full p-4 border-t border-slate-100">
          <div className={`flex items-center gap-3 ${!isSidebarOpen && 'justify-center'}`}>
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80" 
              alt="Dr. Profile" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            {isSidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">Dr. Sarah Wilson</p>
                <p className="text-xs text-slate-500 truncate">Cardiología</p>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-lg w-96">
            <Search className="w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar pacientes, citas..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-400"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
              <Plus className="w-4 h-4" />
              Nueva Cita
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-slate-50/50">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Page Header */}
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">Panel General</h1>
              <p className="text-slate-500 text-sm">Bienvenido de nuevo, Dr. Wilson. Tienes 4 citas pendientes hoy.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color} bg-opacity-10`}>
                      <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      stat.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                  <p className="text-slate-500 text-sm font-medium">{stat.title}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Upcoming Appointments */}
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h2 className="font-bold text-lg text-slate-900">Citas de Hoy</h2>
                  <button className="text-blue-600 text-sm font-medium hover:underline">Ver todas</button>
                </div>
                <div className="divide-y divide-slate-100">
                  {appointments.map((apt) => (
                    <div key={apt.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <img src={apt.image} alt={apt.patient} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                          <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{apt.patient}</h4>
                          <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Clock className="w-3 h-3" />
                            {apt.time} • {apt.type}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          apt.status === 'En Progreso' ? 'bg-blue-50 text-blue-600' :
                          apt.status === 'Confirmado' ? 'bg-green-50 text-green-600' :
                          apt.status === 'Pendiente' ? 'bg-amber-50 text-amber-600' :
                          'bg-slate-100 text-slate-500'
                        }`}>
                          {apt.status}
                        </span>
                        <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Patients */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-fit">
                <div className="p-6 border-b border-slate-100">
                  <h2 className="font-bold text-lg text-slate-900">Pacientes Recientes</h2>
                </div>
                <div className="p-6 space-y-6">
                  {recentPatients.map((patient, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-sm">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 text-sm">{patient.name}</h4>
                        <p className="text-xs text-slate-500 mb-1">ID: {patient.id}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                            {patient.condition}
                          </span>
                          <span className="text-[10px] text-slate-400">{patient.lastVisit}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-3 border border-dashed border-slate-300 rounded-xl text-slate-500 text-sm font-medium hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" /> Registrar Paciente
                  </button>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}